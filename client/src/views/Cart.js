import React, { Component } from "react"
import store from "./store"
import storeObj from "./store"
import { Button, Icon, Card } from 'antd';
export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
        })


    }


    fm(cart) {
        // alert("您一共消费￥元")
        // console.log(cart)
        let count = 0
        cart.map((item) => {
            count += parseFloat(item.price)
        })
        // console.log(count)
        return count
    }
    clear(){

        let action = {
            type: "MY_CART",
            value: []
        }
        store.dispatch(action, function () {
            console.log('dispatch触发')
        })

    }
    reduce(count) {
        // alert(count)
        let action = {
            type: "MY_REDUCE",
            value:count--
        }
        store.dispatch(action, function () {
            console.log('dispatch触发')
        })
    }
    add(count) {
        alert(count)
        let action = {
            type: "MY_ADD",
            value:count++
        }
        store.dispatch(action, function () {
            console.log('dispatch触发')
        })
        
        // return count
    }

    render() {
        return (<div>
            <Card title="购物车" extra={<a href="#" onClick={ ()=>{ this.clear() } }>清空购物车</a>} style={{ width: 400 ,position:"fixed",top:80,left:855}}>
                { this.state.cart.map((item) =>{
                  
                    return (<div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                            <span>{item.name}</span>
                            <div style={{ position:"relative",top:0,left:0}}>
                                <Icon type="minus-square" onClick={() => { this.reduce(this.state.count) }} />
                                <span>{this.state.count}</span>
                                <Icon type="plus-square" onClick={() => { this.add(this.state.count) }} />
                            </div>
                            <span> ￥{item.price}元 </span>
                        </div>)
                })}

                <div style={{ display: "flex", justifyContent: "space-between",color:"red" }}><span>总计：￥ {this.fm(this.state.cart)}元</span>
                    <Button type="primary" onClick={() => { this.fm(this.state.cart) }}>去下单</Button>
                </div>
            </Card>

        </div>)
    }
}