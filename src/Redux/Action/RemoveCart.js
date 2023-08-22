const RemoveCart=(Data,val)=>{
    return {
        type:"RemoveItem",
        payload:Data,
        DecVal:val
    }
}
export default RemoveCart