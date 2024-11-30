import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn_reusable from "./components/btn_reusable/Btn_reusable";

function App() {
  return (
    <>
      <div>
        <Btn_reusable params="Try"></Btn_reusable>
      </div>
      
    </>
  )
}

export default App
