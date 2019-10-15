
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './css/shop.css';
import Searchs from './views/Searchs'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Food from './views/Food'

export default class App extends Component {
    constructor(arg) {
        super(arg)

    }

    render() {

        return (<div>

            <Router>

                <div style={{ backgroundColor: "aliceblue",minHeight:620}}>
                    <div>
                    <header className="head" >
                        <Link to="/" style={{marginLeft:200}}>首页</Link>
                        <Link to="/food"></Link>
                        <Link to="/login" style={{marginLeft:20}}>登录</Link>
                        <Link to="/register" style={{marginLeft:20}}>注册</Link>
                        <Searchs></Searchs>

                    </header>
                    </div>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/food' component={Food} />                  
                </div>               
            </Router>
        </div>

        )
    }

}


