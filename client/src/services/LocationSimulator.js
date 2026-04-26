import { useEffect } from "react";
import axios from "axios";

function LocationSimulator() {

    
  useEffect(() => {
    const interval = setInterval(() => {
      const fakeLocation = {
        id: "123456789",
        coordinates: {
          latitude: {
            degrees: 31,
            minutes: 46,
            seconds: 40
          },
          longitude: {
            degrees: 35,
            minutes: 13,
            seconds: 45
          }
        },
        time: new Date().toISOString()
      };

      axios.post("https://localhost:5001/api/location", fakeLocation);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return null;
}

export default LocationSimulator;