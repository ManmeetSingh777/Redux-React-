import{incrementAction,decrementNumber} from  './Action'
import {createStore } from 'redux';   
import  reducer from './Reducer';
import { useState } from 'react';


const store= createStore(reducer);

export default function LikeCounter(){
    const [count,setCounter]=useState(0);   
    console.log(store.getState())
    store.subscribe(()=>{setCounter(store.getState().count)
})

    return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>store.dispatch(incrementAction())}>Like</button>
    <button onClick={()=>store.dispatch(decrementNumber())}>DisLike</button>
    
    </>
    )
    
    
}

