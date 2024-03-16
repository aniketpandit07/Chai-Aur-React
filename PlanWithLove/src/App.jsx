import { useState } from 'react'
import './App.css'
import Tours from './components/Tours'
import Data from './components/Data'


function App() {
  const [tours, setTours] = useState(Data)

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={() => setTours(Data)}>Refresh</button>
      </div>
    )
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </>
  )
}

export default App
