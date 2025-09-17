import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Shop } from '../../models/Shop';

function Shops() {
  // VÕTA ANDMEBAASIST ja KUVA HTMLs
  const shopsUrl = "https://mihkel-webshop-05-2025-default-rtdb.europe-west1.firebasedatabase.app/shops.json";
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    fetch(shopsUrl)
    .then(res => res.json())
    .then(json => {
      setShops(json || []);
    })
  }, []);

  return (
    <div>
      <MapContainer style={{height: "300px", borderRadius: "30px", margin: "10%"}} center={[59.435, 24.754]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shops.map(shop => 
        <Marker position={[shop.longitude, shop.latitude]}>
          <Popup>
            {shop.name}. <br /> Avatud {shop.openTime}
          </Popup>
        </Marker>
        )}
        {/* <Marker position={[59.441, 24.734]}>
          <Popup>
            Balti jaama turg. <br /> Avatud 9-22.
          </Popup>
        </Marker>
        <Marker position={[59.435, 24.754]}>
          <Popup>
            Viru keskus. <br /> Avatud 9-22.
          </Popup>
        </Marker>
        <Marker position={[59.422, 24.792]}>
          <Popup>
            Ülemiste keskus. <br /> Avatud 9-22.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  )
}

export default Shops