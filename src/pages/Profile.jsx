import React from 'react'
import ProfileUI from '../components/profile_components/ProfileUI'
import Navbar from '../components/Navbar'
import BottomNavbar from '../components/BottomNavbar'

export default function Profile() {
  return (
    <>
      <Navbar/>
      <ProfileUI  />
      <BottomNavbar/>
    </>
  )
}
