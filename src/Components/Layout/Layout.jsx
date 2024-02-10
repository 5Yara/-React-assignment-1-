import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return <>

    <Navbar/>
    {/* <div className="vh-100"> */}
    <Outlet></Outlet>
    {/* </div> */}
    <Footer/>

  </>
}
