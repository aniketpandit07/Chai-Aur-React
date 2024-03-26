
import './App.css'
import Random from './components/Random'
import Tags from './components/Tags'

function App() {

  return (
    <div className='w-full h-screen flex flex-col background  items-center'>
      <h1 className='bg-white rounded  w-11/12 text-center text-3xl mt-5 p-2'>Random Gifs</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-9'>
        <Random />
        <Tags />
      </div>
    </div>
  )
}

export default App
