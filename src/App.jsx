import { useState } from 'react'
import './App.css'
import Colors from './Colors'
import Navbar from './Navbar'

function App() {

  return (
    <div className='bg-[#f4dc95] min-h-screen'>
      <Navbar />
      <Colors />
    </div>
  )
}

export default App
