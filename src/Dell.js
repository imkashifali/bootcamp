import React,{useContext} from 'react';
import counterContext from './CounterContext'

const Dell =(props) => {
    const countValue = useContext(counterContext);
    return (
        <div>
            {props.scholl}
               <h1> {countValue[0]}</h1> 
            <button onClick={ () => {countValue[1](++countValue[0])}}>Dell Update</button>
        </div>
    )
}

export default Dell
