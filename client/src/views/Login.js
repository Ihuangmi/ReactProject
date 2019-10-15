import React, { Component } from "react"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import '../css/shop.css';
import $ from 'jquery'

class NormalLoginForm extends Component {
    constructor(props){
        super(props);
        //绑定this时间，如果不绑定，无法传递this
        this.toRegister = this.toRegister.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit = e => {
        let url = "http://192.168.1.2:8080/login"
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                $.ajax({
                    url: url,
                    type: "POST",       //提交方式
                    data: {   //向后台提交的数据
                        name: values.username,
                        passwd: values.password
                    },
                    dataType: "JSON",       //规定请求成功后返回的数据
                    success:  (data)=> {
                        //请求成功之后进入该方法，data为成功后返回的数据
                        console.log(data)
                        alert(data.msg)
                        if (data.code === 1) {
                            this.props.history.push('/')              
                          }
                    },
                    error:  (errorMsg)=> {
                        //请求失败之后进入该方法，errorMsg为失败后返回的错误信息
                        console.log(errorMsg)
                    }
                });
            }
        });
    };

    
    toRegister(){
        console.log(this.props);
        //跳转到注册页面
        this.props.history.push('/register')
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (<div className="resDiv">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a onClick={this.toRegister}>register now!</a>
                </Form.Item>
            </Form>
        </div>);
    }
}
const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default Login

