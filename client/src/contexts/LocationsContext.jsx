import { createContext, useContext, useEffect, useState } from "react";
import { getLocations } from "../services/LocationService";
import * as signalR from "@microsoft/signalr";
import { BASE_URL } from "../config";

const LocationsContext = createContext();

export function LocationsProvider({ children }) {
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
      .withUrl(`${BASE_URL}/locationHub`)
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
      setLocations((prev) => {
        const filtered = prev.filter(x => x.id !== location.id);
        return [...filtered, location];
      });
    });
  }, [connection]);


  return (
    <LocationsContext.Provider value={{ locations }}>
      {children}
    </LocationsContext.Provider>
  );
}

export function useLocations() {
  return useContext(LocationsContext);
}