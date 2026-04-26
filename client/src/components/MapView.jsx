import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import icon2x from "leaflet/dist/images/marker-icon-2x.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: icon2x,
  shadowUrl: shadow,
});

function MapView({ locations }) {
  return (
    <MapContainer center={[31.7683, 35.2137]} zoom={11} style={{ height: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((loc) => (
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
    </MapContainer>
  );
}

export default MapView;