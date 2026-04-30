import { useEffect, useState } from "react";
import { sendLocation } from "./LocationService";
import { getStudents } from "./StudentService";
import { getTeachers } from "./TeacherService";

function LocationSimulator() {

  const [users, setUsers] = useState([]);

  const baseLat = { degrees: 31, minutes: 46, seconds: 0 };
  const baseLon = { degrees: 35, minutes: 13, seconds: 0 };

  useEffect(() => {
    const fetchUsers = async () => {
      const data = [ ...(await getStudents()),...(await getTeachers())];
      setUsers(data);
    };

    fetchUsers();
  }, []);

  function randomSecondsOffset(max = 30) {
    return Math.floor((Math.random() - 0.5) * 2 * max);
  }

  function normalizeDms(dms) {
    let { degrees, minutes, seconds } = dms;

    minutes += Math.floor(seconds / 60);
    seconds = seconds % 60;

    if (seconds < 0) {
      seconds += 60;
      minutes -= 1;
    }

    degrees += Math.floor(minutes / 60);
    minutes = minutes % 60;

    if (minutes < 0) {
      minutes += 60;
      degrees -= 1;
    }

    return { degrees, minutes, seconds };
  }

  function getRandomDms(base) {
    const noisy = {
      degrees: base.degrees,
      minutes: base.minutes,
      seconds: base.seconds + randomSecondsOffset(45)
    };

    return normalizeDms(noisy);
  }

  useEffect(() => {
    if (users.length === 0) return;
    const interval = setInterval(() => {
      users.forEach((user) => {
        const fakeLocation = {
          id: user.id,
          coordinates: {
            latitude: getRandomDms(baseLat),
            longitude: getRandomDms(baseLon),
          },
          time: new Date().toISOString()
        };

        sendLocation(fakeLocation);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [users]);

}
export default LocationSimulator;