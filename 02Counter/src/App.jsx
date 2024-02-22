import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hooks
let [counter, setCounter] = useState(10)

//add value function
const addValue = ()=>{
  console.log("Clicked", counter);;
  setCounter(counter+1)
}

//remove value function
const removeValue = () =>{
  console.log("clicked", counter);
  setCounter(counter-1)
}


  return (
    <>
      <h1>Aniket Learning React</h1>
      <h3>Paisa he paisa hoga: {counter} Lpa</h3>


      <button onClick={addValue}>increase package {counter}</button>
      <br />
      <button onClick={removeValue}>decrease package{counter}</button>
    </>
  )
}

export default App
