import { useState } from 'react'
import Navigator from './components/navigator/navigator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigator></Navigator>
    </>
  )
}

export default App
