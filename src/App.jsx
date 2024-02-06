import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './style.css'

import Main from "../public/components/Main.jsx"
import Navbar from "../public/components/Navbar.jsx"
function App() {
  const [darkMode,setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }
  return (
    <div className='container'>
      <Navbar 
      darkMode = {darkMode}
      toggleDarkMode = {toggleDarkMode}
       />
      <Main darkMode = {darkMode} />
    </div>
  )
}

export default App
