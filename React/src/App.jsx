import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import the component here
import Class from "./Counter"
import Counter from './Counter'

function App() {

  return (
    <>
      <div>
        {/* call the comp */}
        <Counter/>
      </div>
    </>
  )
}

export default App
