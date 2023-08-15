import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar.jsx'
import RightSidebar from '../../components/RightSidebar/RightSidebar.jsx'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar.jsx'
const Home = () => {
  return (
  <div className='home-container-1'>
    <LeftSidebar/>
    <div children='home-container-2'>
    <HomeMainbar/>
      <RightSidebar/>
    </div>
  </div>
  )
}

export default Home
