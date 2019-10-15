
import React, { Component } from "react"
import $ from "jquery"

import { BrowserRouter as Router } from 'react-router-dom';
import { Card, Rate } from 'antd';
import 'antd/dist/antd.css';
import '../css/shop.css';
import storeObj from "./store"

const { Meta } = Card;


export default class Home extends Component {
	constructor(props) {
		super(props)
		
		this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
		})
		
		this.fn = this.fn.bind(this);

	}
	componentDidMount() {
		$.ajax({
			url: 'http://192.168.1.2:8080/home',
			type: 'post',
			success: (res) => {
				console.log("成功", res)
				this.setState({ data: res })
			}

		})
	}
	fn(id) {
		alert("进入点餐")
		this.props.history.push('/food') 
		console.log(id)            
	  }
	render() {

		return (<div>

			<div style={{ width: 980, margin: "0 auto" }}>
				<Router>
					<div className="shop">
							{this.state.data.map((item) =>
								<Card hoverable onClick={() => { this.fn( item.id ) }} style={{ width: 210, marginBottom: 20 }} cover={<img alt="example" key={item.id} src={item.img} />}>
									<Meta title={item.name} />
									<Rate disabled allowHalf value={parseFloat(item.rate)} style={{ fontSize: 14 }} /><span style={{ marginLeft: 15 }}>{item.rate}分</span>
									<p className="text"><span>起送:￥{item.startPrice}</span><span>配送费:￥{item.shipping}</span><span>{item.time}分钟</span></p>
								</Card>)}
					</div>
				</Router>
			</div>

		</div>)

	}

}


