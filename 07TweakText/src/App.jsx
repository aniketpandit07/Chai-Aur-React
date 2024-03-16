import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";



function App() {
  const [mode, setMode] = useState("light")

  const toggleMode =()=>{
    if(mode === "light"){
      setMode("dark") 
      document.body.style.background = "gray"
    }
    else{
      setMode("light") 
      document.body.style.background = "white"
    }
  }
  return (
    <div>
    <Navbar title="TweakText" mode={mode} toggleMode = {toggleMode}/ >
    {/* <Navbar/> */}
    <TextForm heading="Enter text" mode={mode}  />
    {/* <About/> */}
   

    
    </div>
  );

}
export default App;
