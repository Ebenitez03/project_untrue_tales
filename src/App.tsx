import { useState } from 'react';
import styles from './App.module.css';
import Btn_reusable from "./components/btn_reusable/Btn_reusable";

function App() {
  return (
    <>
      <div>
        <header className={styles.header}>
        <Btn_reusable params="Profile"></Btn_reusable>
        <Btn_reusable params='Search'></Btn_reusable>
        </header>
        <div className={styles.body}>

        </div>
        <footer>

        </footer>
      </div>
      
    </>
  )
}

export default App
