import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';

type Props = {
    position: LatLngExpression;
    addressLabel?: string;
    zoom?: number;
    height?: number | string;
};

export default function MapSingleMarker({
                                            position,
                                            addressLabel = 'Наш адрес',
                                            zoom = 15,
                                            height = 400,
                                        }: Props) {
    return (
        <div style={{ height }} className="bg-white border-[5px] border-pink-400/60 w-[50%] mx-[40px] rounded-[2%] max-[1100px]:w-[80%] max-[1100px]:mx-[2  0px]">
            <MapContainer center={position} zoom={zoom} style={{ height: '100%', width: '100%' ,borderRadius: '1%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>{addressLabel}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
