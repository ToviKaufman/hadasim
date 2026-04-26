import { useState } from "react";
import Login from "./components/Login";
import MapPage from "./services/MapPage";

function App() {
  return (
    <div>
      <Login></Login>
      <MapPage></MapPage>
    </div>
  );
}
export default App;