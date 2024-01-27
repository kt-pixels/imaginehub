import React from 'react'
import ImageContainer from './ImageContainer'
import SideMenu from './SideMenu'
import Welcome from './Welcome'

function Home() {
  return (
    <div>
        <Welcome />
        <ImageContainer />
        {/* <SideMenu /> */}
    </div>
  )
}

export default Home