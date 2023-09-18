export const getallpizzasreducers=(state={pizza:[]} , action)=>{
    switch(action.type){
        case 'GET_PIZZA_REQUEST' : return{
            loading :true,
            ... state
        }
        case "GET_PIZZAS_SUCCESS" :return {
            loading:false,
            pizzas: action.payload
        }
        case "GET_PIZZA_FAILED" : return{
            loading:false,
            error : action.payload
        }
        default : return state
    }

}