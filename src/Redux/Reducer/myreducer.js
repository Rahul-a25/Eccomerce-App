

const initial={
    ApiData:[],
    FilterData:[],
    CartData:[],
    Count:0
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
            state={
              ...state,
              CartData:[...state.CartData,action.payload]
            }
            break;
            case 'RemoveItem':
            state={
              ...state,
              CartData:state.CartData.filter((id)=>{
                return action.payload!==id
              })
            }
            break;
            case 'detailcart':
              state={
                ...state,
                CartData:[...state.CartData,action.payload]
              }
              break;
              case 'inc':
                state={
                  ...state,
                  Count:state.Count+action.payload
                }
                break;
                case 'dec':
                state={
                  ...state,
                  Count:state.Count-action.payload
                }
                break;
                case 'search':
            state={
              ...state,
              ApiData:state.FilterData.filter((e)=>e.title.toLowerCase().includes(action.payload))
            }
            break;
    }
  return state
}
export default MyReducer;