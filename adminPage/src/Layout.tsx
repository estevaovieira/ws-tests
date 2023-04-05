import HeaderTitle from "./components/HeaderTitle"
import Navbar from "./components/Navbar"
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
      <HeaderTitle/>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout