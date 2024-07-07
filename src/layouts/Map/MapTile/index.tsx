import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

type MapTileProps = {
  position: [number, number]
}

const MapCenterHandler = ({ position }: { position: [number, number] }) => {
  const map = useMap()
  map.panTo(position)

  return null
}

const MapTile = ({ position }: MapTileProps) => {
  console.log(position)
  return (
    <MapContainer
      center={[35.6583, 139.7048]}
      zoom={17}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.6583, 139.7048]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MapCenterHandler position={position} />
    </MapContainer>
  )
}

export default MapTile
