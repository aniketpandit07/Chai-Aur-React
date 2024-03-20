import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import Labs from './components/Labs'
import NotFound from './components/NotFound'
import { NavLink } from 'react-router-dom'
import './App.css'
import MainHeader from './components/MainHeader'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>

      </nav>
      <Routes>
        <Route path='/' element={<MainHeader />}>
              <Route index element={<Home/>}/>
              <Route path='/about' element={<About />} />
              <Route path='/support' element={<Support />} />
              <Route path='/labs' element={<Labs />} />
              <Route path='/*' element={<NotFound />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
