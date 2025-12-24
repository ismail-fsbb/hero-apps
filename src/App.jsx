import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Counter from './components/counter'
import TrendingApps from './components/TrendingApps'
function App() {

  return (
    <>
      <Hero />
      <Counter />
      <TrendingApps />
    </>
  )
}

export default App
