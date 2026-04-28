
import MapPage from "./pages/MapPage";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./contexts/UserContext";
import { LocationsProvider } from "./contexts/LocationsContext";
import MapButton from "./components/MapButton";
import { calcDistance } from "./services/MapService";
import LocationSimulator from "./services/LocationSimulator";


function App() {

  return (
    <LocationsProvider>
    <UserProvider>
      <BrowserRouter>
              <LocationSimulator/>

        <MapButton />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
    </LocationsProvider>
  );
}
export default App;