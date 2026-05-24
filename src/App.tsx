// import { useState } from 'react'

import './App.css'
import  './modules/header.tsx'
import FreeModule from './modules/free/freemodule.tsx'
import CtaBlock from './modules/cta/ctablock.tsx'
import Header from './modules/header.tsx'


function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
   <div className="wrapper relative h-screen overflow-hidden">
    <div className="stage absolute inset-0">
      <div className="corners h-screen" aria-hidden='true'></div>
      <div className="shimmer h-screen" aria-hidden="true" ></div>
    </div>

    <div className="content relative z-10 bg-transparent">
      <div className="container flex flex-col items-center justify-center h-screen">
        <Header />
        <FreeModule />
        <div className="separator"></div> 
        <CtaBlock />
      </div>
    </div>
    

    
    </div>
     
    </>
  )
}

export default App
