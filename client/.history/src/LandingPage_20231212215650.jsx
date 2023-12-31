import React from 'react'

const LandingPage = () => {
  return (
    <div className=" h-screen bg-primaryBG  ">
            {/* grandparent wrapper */}
            <NavBar/>
        <div className='relative h-screen'>
            <div className='absolute inset-0 bg-secondary bg-gradient-to-br from-secondary to-transparent'></div>
        </div>
        {/* secondary bg */}
            <section className=''>
            {/* first section */}


            </section>

        
        LandingPage

    </div>
  )
}

export default LandingPage



function NavBar() {
  return (
    <div>NavBar</div>
  )
}
