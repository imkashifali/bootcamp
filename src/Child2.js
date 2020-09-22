import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer'

const Child2 = () => {
    const [state, dispatch] = useReducer(CounterReducer,1);
    console.log(state);
    return (
        <div>
           <h1> {state} </h1> 
           <button onClick={ () => dispatch('INCREMENT')}>Update Reducre</button>
           <button onClick={ () => dispatch('DECREMENT')}>Decrement Reducer</button>
        </div>
    )
}

export default Child2
