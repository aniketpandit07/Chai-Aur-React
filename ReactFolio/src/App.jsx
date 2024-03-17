import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [name, setName] = useState("aniket")

  function changeHandler(event) {
    console.log(text);
    setText(event.target.value)
  }

  //USE EFFECT HOOK
  //variation 1 -> every render
  // useEffect(() => {
  //   console.log("Ui rendered");
  // })

  //variation 2 -> First render only
  // useEffect(() => {
  //   console.log("ui renderrrrrrrr");
  // }, [])

  //variation 3 ->first render + whenever depedency change
  // useEffect(() => {
  //   console.log("change render");
  // }, [name])

  //variaation 4 -> to handle unmounting of component
  useEffect(()=>{
    console.log("listner added");

    return()=>{
      console.log("listner removed");
    }
  }, [text])

  
  return (
    <>
      <input type='text' onChange={changeHandler}></input>
    </>
  )
}

export default App
