import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import icon2x from "leaflet/dist/images/marker-icon-2x.png";
import shadow from "leaflet/dist/images/marker-shadow.png";
import { useUser } from "../contexts/UserContext";
import { getLocations } from "../services/LocationService";
import { useEffect, useState } from "react";
import { calcDistance } from "../services/MapService";
import { useLocations } from "../contexts/LocationsContext";


const defaultIcon = L.icon({
    iconUrl: icon,
    iconRetinaUrl: icon2x,
    shadowUrl: shadow,
});

const redIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    iconRetinaUrl: icon2x,
    shadowUrl: shadow,

});

const teacherIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png",
    iconRetinaUrl: icon2x,
    shadowUrl: shadow,


});

function TeacherMapView({ students }) {

    const { user } = useUser();
    const {locations} = useLocations();
    const [errorLocations, setErrorLocations] = useState([]);
    const [correctLocations, setCorrectLocations] = useState([]);
    const [teacherLocation, setTeacherLocation] = useState([]);

    useEffect(() => {
        setTeacherLocation(locations.find(item => item.id === user.id));
        const studentsLocations = locations.filter(item => students?.map(student => student.id).includes(item.id));
        const studentsDistanceList = studentsLocations?.map(studentLocation => ({ ...studentLocation, distance: calcDistance(teacherLocation, studentLocation) }));
        setErrorLocations(studentsDistanceList?.filter(item => item.distance > 3) || []);
        setCorrectLocations(studentsDistanceList?.filter(item => item.distance < 3) || []);
    }, [locations]);

    if (!students || students.length === 0) {
        return <p>אין למורה תלמידות</p>;
    }
    return (
        <div style={{ width: "100%" }}>

            <MapContainer center={[31.7683, 35.2137]} zoom={11} style={{ height: "500px" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {correctLocations.map((loc) => (
                    <Marker key={loc.id} position={[loc.latitude, loc.longitude]} icon={defaultIcon}>
                        <Tooltip
                            permanent
                            direction="top"
                            offset={[0, 0]}
                        >
                            ת"ז: {loc.id}
                        </Tooltip>
                    </Marker>
                ))}

                {errorLocations.map((loc) => (
                    <Marker key={loc.id} position={[loc.latitude, loc.longitude]} icon={redIcon}>
                        <Tooltip
                            permanent
                            direction="top"

                            offset={[0, 0]}
                        >
                            ת"ז: {loc.id}
                        </Tooltip>
                    </Marker>
                ))}

                <Marker key={teacherLocation.id} position={[teacherLocation.latitude, teacherLocation.longitude]} icon={teacherIcon}>
                    <Tooltip
                        permanent
                        direction="top"
                        offset={[0, 0]}

                    >
                        מורה
                    </Tooltip>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default TeacherMapView;