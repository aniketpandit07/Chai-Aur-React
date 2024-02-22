
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
 
  let myObj ={
    username: "aniket",
    age:22
  }

  let newArr =[2,2,3]

  return (
    //fragment
    <> 
    <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind Test</h1>
    //this card is a props
   <Card  channel ='chaiaurcode' someObj={myObj} newa={newArr} username='Pandit' btnText='hover me'/>
   <Card username='Anni' />

    </>
  )
}

export default App
