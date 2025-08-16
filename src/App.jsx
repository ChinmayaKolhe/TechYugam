import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TechYugam from './pages/TechYugam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TechYugam />
    </>
  )
}

export default App
