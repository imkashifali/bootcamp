import React,{useContext} from 'react';
import CounterContext from './CounterContext';
import Doc from './Doc';

const Child = () => {
  let CountValue = useContext(CounterContext);
  console.log(CountValue);
  return (
    <div>
         
      <Doc MIS="three"/>

      <h1> {CountValue[0]}</h1> 
        <button onClick={ () => {CountValue[1] (++CountValue[0]) }}>Childer Value</button>
    </div>
  )
}

export default Child
