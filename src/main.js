import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'


Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: [{
        name: '鼠标',
        price: 20
      },
      {
        name: '键盘',
        price: 40
      },
      {
        name: '耳机',
        price: 60
      },
      {
        name: '显示屏',
        price: 80
      }
    ]
  },
  getters: { //添加getters// 相当于计算属性
    saleProducts: (state) => {
      let saleProducts = state.products.map(product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts;
    }
  },
  mutations: {//相当vue 对象中的方法
    minusPrice(state, payload) {
      let newPrice = state.products.forEach(product => {
        product.price -= payload
      })
    }
  }
})
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})