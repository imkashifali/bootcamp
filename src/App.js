import React,{useState} from 'react';
import Message from './Message';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [morning, night] = useState(true);

  return (
    <div className={`box ${morning? 'morning':'night'}`}>  
      <h1>{morning? 'Morning': 'Night'}</h1>
      <Message  counters = {count}/>
     <button onClick={ () => setCount(count +1)}>Update Run</button>
     <button onClick={ () => night(!morning) }>Update Day</button>
    </div>

  );
}

export default App;
