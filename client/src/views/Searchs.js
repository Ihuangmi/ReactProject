import React, { Component } from 'react';
import { Input } from 'antd';
import $ from 'jquery'
import store from "./store"


export default class Searchs extends Component {
  constructor(arg) {
    super(arg)

    this.state = {
      data: []
    }

  }


  fn(value) {
    console.log(value)
    $.ajax({
      url: "http://192.168.1.2:8080/searchs",
      type: "POST",       //提交方式
      data: {   //向后台提交的数据
        data: value
      },
      dataType: "JSON",       //规定请求成功后返回的数据
      success: (res) => {
        console.log("成功", res)
        // this.setState({ data: res })
        if (res.length > 0) {
          let action = {
            type: "MY_DATA",
            value: res
          }
          store.dispatch(action, function () {
            console.log('dispatch触发')
          })
        }

      },
      error: (res) => {
        console.log("失败", res)
      }
    });


  }

  render() {
    const { Search } = Input;
    return (
      <div>
        <Search style={{ width: 300, position: "relative", top: -50, left: 865 }} onSearch={(value) => { this.fn(value) }} enterButton />
      </div>
    )

  }
}


