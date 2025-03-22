import { useState , useEffect} from 'react'
import NavigationBar from './components/navigation-bar/navigation-bar.jsx'
import Home from './components/home/home.jsx'
import './App.css'

function App() {
  const [Component,setComponent] = useState(null);

  useEffect(() => {
    const navigationHandler = (event) => { 
      setComponent(event.detail.component);
    };

    globalThis.eventEmitter.on('navigate', navigationHandler);
    return () => {
      globalThis.eventEmitter.remove('navigate', navigationHandler);  
    }

  }, []);
 
  return (
    <>
      <NavigationBar defaultTab="home"/>
      <header>
         <h1>Toolbox</h1>
      </header>

      <main>
        {Component ? <Component /> : <Home />}
      </main>

      <footer>&copy; charleslemmert-toolbox </footer>
    </>
  )
}

export default App
