import React,{useContext} from 'react';
import Child from './Child';
import CounterContext from './CounterContext';

const Parent =(props) => {

  let CountValue =  useContext(CounterContext);
  console.log(CountValue);
  return (
    <div>
      <Child />
      {/* <h1>{props.mast}</h1> */}
      <h1> {CountValue[0]}</h1> 
      <button onClick={ () => {CountValue[1](++CountValue[0])}}>Parent Press</button>
        
    </div>
  )
}

export default Parent
