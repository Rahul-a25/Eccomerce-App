import CartData from "../Action/Cart";


const initial={
    ApiData:[],
    FilterData:[],
    CartData:[],
    Count:0,
    LoggedIn:false,
    Form:{
      Username:'',
      Email:'',
      FullName:'',
      Password:''

    }
}
const MyReducer=(state=initial,action)=>{
    switch (action.type){
        case 'Data':
        state={
            ...state,
            ApiData:action.payload
        }
        break;
        case 'Filter':
        state={
            ...state,
            FilterData:action.payload
        }
        break;
        case 'All':
        state={
            ...state,
            ApiData:state.FilterData
        }
        break;
        case 'Ele':
          state={
            ...state,
            ApiData:state.FilterData.filter((e)=>e.category==='electronics')
          }  
          break;
          case 'Men':
            state={
              ...state,
              ApiData:state.FilterData.filter((e)=>e.category===`men's clothing`)
            }
            break;
            case 'Jewelary':
            state={
              ...state,
              ApiData:state.FilterData.filter((e)=>e.category===`jewelery`)
            }
            break;
            case 'WomanCloth':
            state={
              ...state,
              ApiData:state.FilterData.filter((e)=>e.category===`women's clothing`)
            }
            break;
            case 'Cart':
            //   const existingItem = state.Cart.find((item) => item.id === payload.id);
            //   if (existingItem) {
            //     return {
            //       ...state,
            //       Cart: state.Cart.map((item) =>
            //         item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            //       ),
            //     };
            //   } else {
            //     return {
            //       ...state,
            //       Cart: [...state.Cart, { ...payload, qty: 1 }],
            //     };
            //   }
            // }
            const existingItem = state.CartData.find((item) => item.id === action.payload.id);
            if(existingItem){
              return{
                ...state,
                CartData:state.CartData.map((item) =>
                        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item),
                 
              }
             
            }
            else{
              return{
                ...state,
                // updated
               CartData: [...state.CartData, {...action.payload,qty:1}],
               Count:state.Count+action.countval 
              }
          }
            // state={
            //   ...state,
            //   // action.payload.filter((e)=>e.id!=action.payload.id)?
            //   // [...state.CartData,action.payload]
            //   CartData:[...state.CartData,action.payload]
             
            // }
            break;
            case 'RemoveItem':
              const existingItem1 =state.CartData.find((item) => item.id === action.payload.id);
              if(existingItem1.qty ===1){
                  return {
                      ...state,
                      CartData: state.CartData.filter((item) => item.id !== action.payload.id),
                      Count:state.Count-action.DecVal
                    };
                     
              }
              
              else{
                return  {
                    ...state,
                    CartData: state.CartData.map((item) =>
                      item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
                    ),
                   
                  };
            }
            // state={
            //   ...state,
            //   CartData:state.CartData.filter((id)=>{
            //     return action.payload!==id
            //   }),
            //   Count:state.Count-action.DecVal
            // }
            // break;
            case 'detailcart':
              state={
                ...state,
                CartData:[...state.CartData,action.payload],
              }
              break;
                case 'dec':
                state={
                  ...state,
                  
                }
                break;
                case 'search':
            state={
              ...state,
              ApiData:state.FilterData.filter((e)=>e.title.toLowerCase().includes(action.payload))
            }
            break;
            case 'condition':
                state={
                  ...state,
                  LoggedIn:action.payload
                }
                break;
                case 'formUsername':
                state={
                  ...state,
                  Form:{
                    ...state.Form,
                    [action.name]:action.payload,
                    // fullname:action.payload,
                    // email:action.payload,
                    // password:action.payload

                  }
                }
                break;
                case 'formFullname':
                state={
                  ...state,
                  Form:{
                    ...state.Form,
                    [action.name]:action.payload,
                    // fullname:action.payload,
                    // email:action.payload,
                    // password:action.payload

                  }
                }
                break;
                case 'formEmail':
                state={
                  ...state,
                  Form:{
                    ...state.Form,
                    [action.name]:action.payload,
                    // fullname:action.payload,
                    // email:action.payload,
                    // password:action.payload

                  }
                }
                break;
                case 'formPassword':
                state={
                  ...state,
                  Form:{
                    ...state.Form,
                    [action.name]:action.payload,
                    // fullname:action.payload,
                    // email:action.payload,
                    // password:action.payload

                  }
                }
                break;

    }
  return state
}
export default MyReducer;