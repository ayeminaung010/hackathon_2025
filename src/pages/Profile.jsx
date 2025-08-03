// STEP 3: Simple Profile.js (NO Provider needed)
// pages/Profile.js
import BottomNavbar from '../components/BottomNavbar'
import Navbar from '../components/Navbar'
import ProfileUI from '../components/profile_components/ProfileUI'
import { LiffProvider } from '../components/Provider/LiffProvider'

export default function Profile() {
  return (
    <>
      <Navbar />
      <LiffProvider>
        <ProfileUI />
      </LiffProvider>
      <BottomNavbar />
    </>
  )
}