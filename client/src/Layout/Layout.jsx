import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'


function Layout() {
  return (
    <div className='w-screen min-h-screen font-[poppins]'>
      <Header/>
      <Sidebar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
