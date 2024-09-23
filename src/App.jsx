import { useState } from 'react'
import Counter from './Counter'

import './App.css'

function App() {

  return (
    <>
      <div className='d-flex align-items-center border bg-dark justify-content-center' style={{height:'100vh'}}>
        <Counter/>
      </div>
      
    </>
  )
}

export default App
