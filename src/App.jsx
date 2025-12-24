import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Counter from './components/counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Counter />
    </>
  )
}

export default App
