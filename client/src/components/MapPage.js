
import { useEffect, useState } from "react";
import MapView from "./MapView";
import { getLocations } from "../services/LocationService";
import LocationSimulator from "../services/LocationSimulator";
import * as signalR from "@microsoft/signalr";


function MapPage() {
  const [locations, setLocations] = useState([]);
  const [connection, setConnection] = useState(null);


  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getLocations();
      setLocations(data);
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7273/locationHub")
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (!connection) return;

    connection.start().then(() => {
      console.log("SignalR connected");
    });
  }, [connection]);

useEffect(() => {
  if (!connection) return;

  connection.on("ReceiveLocation", (location) => {
    console.log("new location:", location);

    setLocations((prev) => {
      const filtered = prev.filter(x => x.id !== location.id);
      return [...filtered, location];
    });
  });
}, [connection]);

  return (
    <>
      <LocationSimulator />
      <MapView locations={locations} />
    </>
  );
}

export default MapPage;