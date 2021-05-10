



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

        // itemRemove: state => {
        //     let counter = 0
        //     if(state.cart.length !== 0 ) {
        //         state.cart.forEach(item => {
        //             counter -= item.quantity 
        //          })    
        //     }
            
        //     return counter
        // },

     
  

    },
  
    mutations: {
        ADD_TO_CART: (state, { product, quantity}) => {
            let  exists = state.cart.find(item => item.product._id === product._id)
            if(exists) {
                exists.quantity += quantity
            
                

            } else  {
                state.cart.push({ product, quantity })   
         }
            return
            
        },



        // INNER_ADDER: (state, { product, quantity}) => {
        //     let  exists = state.cart.find(item => item.product._id === product._id)
        //     if(product._id === product._id) {
        //     exists.quantity += quantity
        //         return

        //     }
            
            
        // },


        // INNER_REMOVER: (state, { product, quantity }) => {
        //     let exists = state.cart.find(item => item.product._id === product._id )
        //     if(exists) {
        //         exists.quantity  -= quantity
        //         // state.cart.item -= item
                
        //         return
        //     }
        //     state.cart.item.delete({ product, quantity })
        // }
    },
    actions: {
        addProductToCart:  ({commit}, { product, quantity, _id})  => {
            console.log(product)
           let item = {
               product,
               _id,
               quantity: Number(quantity)
           } 
            commit('ADD_TO_CART',  item )
        },  
  
        
        // addProduct:  ({commit}, { product, quantity })  => {
        //     commit('INNER_ADDER', { product, quantity })
        //     console.log( typeof addProduct)
             
        // },  
  
    //      removeProduct: ({ commit }, { product, quantity}) => {
    //     // let item = {
    //     //     product,
    //     //     quantity: Number(quantity)
    //     //   }
    //         commit ('INNER_REMOVER', { product, quantity })
    // }  
  
  
 },

            
}








// getOneProduct: async ({commit}, id) => {
//     const res = await axios.get('http://localhost:9999/api/products/' + id)
//     commit('SET_PRODUCT', res.data)
//   },