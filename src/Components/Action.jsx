const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";
export function incrementAction(){
    return{type:INCREMENT,}
}

export function decrementNumber(){
    return {type:DECREMENT,};
}
