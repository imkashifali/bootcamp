import React,{useContext} from 'react'
import counterContext from './CounterContext';
import Dell from './Dell'


const Doc = (props) => {
   const CountValue = useContext(counterContext);
   console.log(CountValue[0]);

    return (
        <div>
            <h1>{props.MIS} </h1>
                <h2><Dell scholl="fourth"/></h2>
                <h1> {CountValue[0]}</h1> 
               <button onClick={ () => {CountValue[1](++CountValue[0])}}>Doc Press</button>


        </div>
    )
}

export default Doc
