import React from 'react'

const Stall = () => {
  
    return (
      <div className="flex min-h-screen w-[95%]">
        <div className="w-full text-black">
          {/* Your existing code */}
          {zones.map((zone, zoneIndex) => (
            <div key={zoneIndex} className="mt-16">
              <ZoneLabel number={zoneIndex + 1} />
              <div className="flex flex-wrap gap-[2rem] mt-6">
                {zone.stalls.map((stall, stallIndex) => (
                  <Stall key={stallIndex} stall={stall} /> // Render the Stall component
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
  
  };
  

}

export default Stall


