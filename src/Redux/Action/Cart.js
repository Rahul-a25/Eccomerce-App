const CartData=(Data,Inc)=>{
    return{
        type:'Cart',
        payload:Data,
        countval:Inc

    }
}
export default CartData