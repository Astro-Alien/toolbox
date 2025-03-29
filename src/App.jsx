import Home from "./components/home/home.jsx";
import "./App.css";
import NavigationBar from "./components/navigation-bar/navigation-bar.jsx"

function App() {
  return (
    <>
    <div className="flex">
      <NavigationBar />
    </div>
    <main className="flex justify-center content-center
                    h-[100%] w-[100%]
                    bg-champagne
                    text-blue-dianne" >
          <Home />            
    </main>
    </>
  );
}

export default App;
