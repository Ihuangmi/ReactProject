
import { createStore } from "redux"
// let storage = window.sessionStorage

const store = {
	data: [], //搜索数据
	food: [],  //商品数据
	cart: [],  //购物车数据
	count:1,
	ip:"192.168.1.2"
}
//Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
const reducer = (state = store, action) => {
	console.log(state, action)

	switch (action.type) {
		case 'MY_DATA':
			let newState = JSON.parse(JSON.stringify(state))
			newState.data = action.value
			return newState

		case 'MY_FOOD':
			let foodState = JSON.parse(JSON.stringify(state))
			foodState.food = action.value
			return foodState

		case 'MY_CART':
			let cartState = JSON.parse(JSON.stringify(state))
			cartState.cart = action.value
			return cartState

		case 'MY_REDUCE':
			let reState = JSON.parse(JSON.stringify(state))
			reState.count= action.value
			return reState

		case 'MY_ADD':
			let addState = JSON.parse(JSON.stringify(state))
			addState.count= action.value
			return addState

		default:
			return state
	}
}
const storeObj = createStore(reducer)
export default storeObj;


//工具:
//1. 引入 redux
//2. 用redux 的createStore方法创建store
//3. store管理者==>传一个回调函数reducer
//4. reducer函数==>oldstate action==>提供返回数据和修改数据功能
//5.暴露store

//改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。
//store.dispatch 接受一个 Action 对象作为参数，将它发送出去。


//components:
//1.store.getState() ==>获取仓库数据
//2.store.dispacth(action)==>更新仓库数据(用reducer更新)
//3.store.subscribe(func)==>仓库更新会触发这个事件==>重新获取仓库数据+更新自己的state
