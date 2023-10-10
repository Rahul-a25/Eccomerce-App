 export const CartCondition=(Data)=>{
    return {
        type:'condition',
        payload:Data
    }
}

export const formUsername=(Data,name)=>{
    return {
        type:'formUsername',
        payload:Data,
        name:name
    }
}
export const formFullname=(Data,name)=>{
    return {
        type:'formFullname',
        payload:Data,
        name:name
    }
}
export const formEmail=(Data,name)=>{
    return {
        type:'formEmail',
        payload:Data,
        name:name
    }
}
export const formPassword=(Data,name)=>{
    return {
        type:'formPassword',
        payload:Data,
        name:name
    }
}
