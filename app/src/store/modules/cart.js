



export default {
   state : {
       cart: []
   },
    getters: {
        
        shoppingCart: state => state.cart,
        itemCunter: state => {
            let counter = 0
            state.cart.forEach(item => {
               counter += item.quantity 
               

            })
            return counter
        },

        totalCounter: state => {
            let totalPriceItems = 0
            if (state.cart.length !== 0) {
                state.cart.forEach(item => {
                  totalPriceItems += item.product.price * item.quantity  
                })
            }
            return totalPriceItems
        },

        itemRemove: state => {
            let counter = 0
            if(state.cart.length !== 0 ) {
                state.cart.forEach(item => {
                    counter -= item.quantity 
                 })    
            }
            
            return counter
        },

     
  

    },
  
    mutations: {
        ADD_TO_CART: (state, { product, quantity}) => {
            let  exists = state.cart.find(item => item.product._id === product._id)
            if(exists) {
                exists.quantity += quantity
             return;
                

            } else  {
                state.cart.push({ product, quantity })   
         }
            
            
        },



        INNER_ADDER: (state, { product, quantity }) => {
            let  Adder = state.cart.find(item => item.product._id === product._id)
            if(Adder) {
            Adder.quantity += quantity
                return

            }
                        
        },

        REMOVE_FROM_CART: (state, { product }) => {
        

                state.cart = state.cart.filter(item => {
                    return item.product._id !== product._id
                })
        },


        INNER_REMOVER: (state, { product, quantity }) => {
            let exists = state.cart.find(item => item.product._id === product._id )
            if(exists) {
                exists.quantity  -= quantity
             
                
                return;
            } else if (product.quantity < 1) {
                            state.cart.splice({ product, quantity })

                    console.log('funkar')
                    return
                
            }
            // state.cart.item.delete({ product, quantity })
        }
    },
    actions: {
        addProductToCart:  ({commit}, { product, quantity})  => {
            console.log(product)
           let item = {
               product,
              
               quantity: Number(quantity)
           } 
            commit('ADD_TO_CART',  item )
        },  
  
        
        addProduct:  ({commit}, { product, quantity })  => {
            commit('INNER_ADDER', { product, quantity })
            // console.log( typeof addProduct)
             
        },  
  
         removeProduct: ({ commit }, { product, quantity}) => {
        // let item = {
        //     product,
        //     quantity: Number(quantity)
        //   }
            commit ('INNER_REMOVER', { product, quantity })
        } ,
        
        removeFromCart: ({ commit }, { product }) => {
            // let item = {
            //     product,
            //     quantity: Number(quantity)
            //   }
                commit ('REMOVE_FROM_CART', { product  })
                // axios.delete('http://localhost:9999/api/products/')
                
        }  



  },

}








// getOneProduct: async ({commit}, id) => {
//     const res = await axios.get('http://localhost:9999/api/products/' + id)
//     commit('SET_PRODUCT', res.data)
//   },