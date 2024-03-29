import axios from 'axios'
// import api from ''

export default {
  state: {
    products: [],
    product: null
  },
  getters: {
    products: state => state.products,
    product: state => state.product
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_PRODUCT: (state, product) => {
      state.product = product
    },
    CLEANUP: state => {
      state.product = null
    }
  },
  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('http://localhost:9999/api/products')
      commit('SET_PRODUCTS', res.data)
    
    },
    getOneProduct: async ({commit}, _id) => {
      const res = await axios.get('http://localhost:9999/api/products/' + _id)
      commit('SET_PRODUCT', res.data)
    },
    cleanup: ({commit}) => {
      commit('CLEANUP')
    }
  }
}
  