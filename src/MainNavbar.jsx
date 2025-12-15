import React from 'react'


export default function MainNavbar({ onNavigate }){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Silver Oak University-KRISH SHAH</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}