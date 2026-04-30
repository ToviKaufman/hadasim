


export function calcDistance(location1, location2) {

    let lat1 = location1.latitude;
    let lat2 = location2.latitude
    const R = 6371; 
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(location2.longitude - location1.longitude);
     lat1 = toRad(lat1);
     lat2 = toRad(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
}

function toRad(Value) {
    return Value * Math.PI / 180;
}

