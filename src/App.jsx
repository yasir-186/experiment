import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header title="yasir1"></Header>
    <Header title="yasir2"></Header>
    </div>
  )
}

function Header({title}){
  return <i>
    {title}
  </i>
}

export default App
