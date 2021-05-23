import axios from 'axios'
import router from '@/router'
// import cart from '../modules/cart'



export default {
    state: {
        loggedIn: false,
        profile: {}
        
    },
    getters: {
        loggedIn: state => state.loggedIn, 
        logout: state => state.loggedIn ,
        profile: state => state.profile
        
    },

    mutations: {
        LOGIN_USER: (state, user) => {
            console.log(user)
            state.profile= user;
            state.loggedIn = true;          
        },
        LOGOUT_USER: state => {
            state.profile= {};
            state.loggedIn = false;
        },
    },

    actions: {

      
        register: async ({dispatch}, _user ) => {
            
            await axios.post('http://localhost:9999/api/users/register', _user)
            const user = {
                email: _user.email,
                password: _user.password,
                
                
            }
            dispatch('login', user)
        },
        
        login: ({commit}, user, route ) => {
             axios.post('http://localhost:9999/api/users/login', user)
              .then(res => {
                  if(res.status === 200) {
                      console.log(res.data.user)
                      console.log(res.data.token)
                      commit('LOGIN_USER', { ...res.data.user, token: res.data.token })  

                   

                      if(route) {
                         router.push(route)   
                      } else  {
                          router.push('/Products')
                         
                                      
                    }
                    
                  }
              })
        },
        logout:({commit}) => {
         
            router.push("/");
            commit('LOGOUT_USER')
        },
        addToOrders: ({ state }, cart)  => {
            axios.patch(`http://localhost:9999/api/users/addorder/${state.profile.email}`, cart ,{
                headers: { Authorization: "Bearer " + state.profile.token }
            }).then(res => {
                console.log(cart)
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }   
  }
}








