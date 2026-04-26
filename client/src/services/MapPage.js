import { useEffect, useState } from "react";
import MapView from "../components/MapView";
import axios from "axios";

function MapPage() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7273/api/location")
      .then(res => setLocations(res.data));
  }, []);

  return <MapView locations={locations} />;
}

export default MapPage;