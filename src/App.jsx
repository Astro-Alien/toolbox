import { useState , useEffect} from 'react'
import NavigationBar from './components/navigation-bar/navigation-bar.jsx'
import Welcome from './components/welcome/welcome.jsx'
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
      <NavigationBar defaultTab="welcome"/>
      <header>
         <h1>Toolbox</h1>
      </header>

      <main>
        {Component ? <Component /> : <Welcome />}
      </main>

      <footer>&copy; charleslemmert-toolbox </footer>
    </>
  )
}

export default App
