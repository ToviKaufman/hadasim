import { useNavigate, useLocation } from "react-router-dom";

function MapButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/map") {
    return null;
  }

  return (
    
      <button className="map-button"
        onClick={() => navigate("/map")}
      >
        צפייה במפה
      </button>
  
  );
}

export default MapButton;