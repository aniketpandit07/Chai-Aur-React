
import Chai from "./chai"
import Button from "./Button"
import Student from "./Student"
import Food from "./Food"

function App() {
  

  return (
    <>
    <h1>Chai aur react with Vite | Aniket </h1>
    <Chai/>
    <Button/>
    <Student name="Aniket" age="ref" isPass={true}/>
    <Student name="Abhi" age={34} isPass={false}/>
    <Student name="Shruti" age={18} isPass={true}/>
    <Student  />
    <Food ></Food>
    </>
  )
}

export default App
