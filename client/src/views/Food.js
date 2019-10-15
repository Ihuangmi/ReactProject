
import React, { Component } from "react"
import $ from "jquery"
import { Card, Icon } from 'antd';
import 'antd/dist/antd.css';
import store from "./store"
import storeObj from "./store"
import Cart from "./Cart"
const { Meta } = Card;

export default class Food extends Component {
	constructor(arg) {
		super(arg)
		this.state = storeObj.getState()
		storeObj.subscribe(() => {
			this.setState(storeObj.getState())
		})
	}
	componentDidMount() {
		$.ajax({
			url: 'http://192.168.1.2:8080/food',
			type: 'post',
			success: (res) => {
				console.log("成功", res)
				// this.setState({ food: res })
				let action = {
					type: "MY_FOOD",
					value: res
				}
				store.dispatch(action, function () {
					console.log('dispatch触发')
				})

			}

		})
	}



	fn(id, name) {
		console.log(id, name, '加入购物车')
		$.ajax({
			url: "http://192.168.1.2:8080/cart",
			type: "POST",       //提交方式
			data: {   //向后台提交的数据
				data: id
			},
			dataType: "JSON",       //规定请求成功后返回的数据
			success: (res) => {
				console.log("成功", res, this.state.cart)
				let cartArr = this.state.cart
				cartArr.push(res[0])

				let action = {
					type: "MY_CART",
					value: cartArr
				}
				store.dispatch(action, function () {
					console.log('dispatch触发')
				})


			},
			error: (res) => {
				console.log("失败", res)
			}
		});


	}
	render() {

		return (<div style={{ display: "flex", marginLeft: 184 }}>
			<div className="shop" style={{ width: 660 }}>
				{this.state.food.map((item) =>
					<Card hoverable style={{ width: 170, marginBottom: 20 }} cover={<img alt="example" key={item.id} src={item.img} />}>
						<Meta title={item.name} />
						<p className="text">赞{item.likes}</p>
						<p><span style={{ marginRight: 70 }}>￥{item.price}</span><Icon onClick={() => { this.fn(item.id, item.name) }} type="plus-circle" /></p>
					</Card>)}
			</div>

			<Cart></Cart>

		</div>)

	}

}


