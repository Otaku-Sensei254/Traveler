import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Pages/Home'
//import Packages from './Components/Pages/Packages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Home/>
      
    </>
  )
}

export default App
