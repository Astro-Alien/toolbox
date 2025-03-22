import { useState , useEffect} from 'react'
import NavigationBar from './components/navigation-bar/navigation-bar.jsx'
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
      <NavigationBar />
      <header>
         <h1>header</h1>
      </header>

      <main>
        {Component ? <Component /> : <h1>Loading...</h1>}
      </main>

      <footer>&copy; charleslemmert-toolbox</footer>
    </>
  )
}

export default App
