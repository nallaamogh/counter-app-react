import './App.css'
import {useState} from 'react'
function App(){


  let stock=10
  let [value,setValue]=useState(0)


  let decrease=()=>{
    if (value>0){
      setValue(value-1)
    }

  }

  let increase=()=>{
    if(value<stock){
      setValue(value+1)
    }
  }

  
  return (
  <div className="container">
    <button className="minus" onClick={decrease} disabled={value===0}>-</button>
    <p>{value}</p>
    <button className="plus" onClick={increase} disabled={value===stock}>+</button>
  </div>
  )
}

export default App