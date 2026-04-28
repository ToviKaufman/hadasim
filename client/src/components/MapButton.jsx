import { useNavigate, useLocation } from "react-router-dom";

function MapButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/map") {
    return null;
  }

  return (
     <div className="map-button-wrapper">
    <button className="button"
      onClick={() => navigate("/map")}
    >
      צפייה במפה
    </button>
    </div>
  );
}

export default MapButton;