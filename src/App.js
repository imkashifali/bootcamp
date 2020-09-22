import React,{useState} from 'react'
import Parent from './Parent'
import CounterContext from './CounterContext';

function App() {
  const setCounter= useState(1)
  return (
    <CounterContext.Provider value={setCounter}>
        <div>
           <Parent mast = "Parent Question" />
        </div>
    </CounterContext.Provider>
    
  )
}

export default App
