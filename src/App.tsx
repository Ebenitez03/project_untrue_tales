import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn_reusable from "./components/btn_reusable/Btn_reusable";

function App() {
  return (
    <>
      <div>
        <body>
        <header>
        <Btn_reusable params="Profile"></Btn_reusable>
        <Btn_reusable params='Search'></Btn_reusable>
        </header>
        <div>

        </div>
        <footer>

        </footer>
        </body>
      </div>
      
    </>
  )
}

export default App
