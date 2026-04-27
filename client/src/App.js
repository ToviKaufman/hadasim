import { useState } from "react";
import Login from "./components/Login";
import MapPage from "./components/MapPage";

function App() {
  const [screen, setScreen] = useState("login"); 
  return (
    <div>
     {screen === "login" && (
        <Login onShowMap={() => setScreen("map")} />
      )}

      {screen === "map" && (
        <MapPage />
      )}
    </div>
  );
}
export default App;