import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Card, Rate } from 'antd';
import Store from './Store'
import 'antd/dist/antd.css';
import '../css/shop.css';
const { Meta } = Card;

export default class Product extends Component {
  constructor(props) {
    super(props)

  }

  fn() {
    alert("进入点餐")

  }



  render() {
    return (<Router>
      <div className="shop">
        <Link to='/store' className="shop">
          {this.props.arr.map((item) =>
            <Card hoverable onClick={() => { this.fn() }} style={{ width: 210, marginBottom: 20 }} cover={<img alt="example" key={item.id} src={item.img} />}>
              <Meta title={item.name} />
              <Rate disabled allowHalf value={parseFloat(item.rate)} style={{ fontSize: 14 }} /><span style={{ marginLeft: 15 }}>{item.rate}分</span>
              <p className="text"><span>起送:￥{item.startPrice}</span><span>配送费:￥{item.shipping}</span><span>{item.time}分钟</span></p>              
            </Card>)}
        </Link>
        <Route exact path='/store' component={Store} />
      </div>
    </Router>)
  }
}