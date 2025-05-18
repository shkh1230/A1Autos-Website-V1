"use client"

import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./Navbar"
import TopBar from "./TopBar"
import Footer from "./Footer"

const Layout = () => {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
