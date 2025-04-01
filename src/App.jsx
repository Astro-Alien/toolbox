import "./App.css";
import NavigationBar from "./components/navigation/navigation-bar/navigation-bar.jsx";
import RouterControler from "./components/navigation/router-controler/router-controler.jsx";

function App() {
  return (
    <>
          <div className="flex">
            <NavigationBar />
          </div>
          <main className="flex justify-center content-center
                          h-[100%] w-[100%]
                          bg-champagne
                          text-blue-dianne">
                <RouterControler/>
          </main>
    </>
  );
}

export default App;
