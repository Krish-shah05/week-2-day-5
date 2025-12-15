import React, { useState } from 'react'
import MainNavbar from './MainNavbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NewProducts from './NewProducts'
import Footer from './Footer'


export default function App(){
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="d-flex flex-column min-vh-100">
      <MainNavbar onNavigate={setCurrentPage} />
      <main className="flex-grow-1 container py-5">
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'products' && <NewProducts />}
      </main>
      <Footer />
    </div>
  )
}