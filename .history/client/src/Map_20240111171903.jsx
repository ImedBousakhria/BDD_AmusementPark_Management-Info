import React from 'react'

const Map = () => {
  return (
<>
     Testing interactive map
     <MapContainer center={[48.8701459,2.7739347]} zoom={30}>
      <TileLayer attribution='https://www.openstreetmap.org/?mlat=48.8598&mlon=2.7617#map=13/48.8598/2.7617'
      url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'/>
     </MapContainer>
    </>  )
}

export default Map