
import MapPage from "./pages/MapPage";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./components/UserContext";
import MapButton from "./components/MapButton";

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <MapButton />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
export default App;