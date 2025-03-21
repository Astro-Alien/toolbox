import { useState } from 'react'
import Navigator from './components/navigator/navigator'
import './App.css'

function App() {
  return (
    <>
      <header>
          <Navigator />
      </header>

      <main>
          <h1>Welcome To The Toolbox</h1>
      </main>

      <footer>&copy; charleslemmert-toolbox</footer>
    </>
  )
}

export default App
