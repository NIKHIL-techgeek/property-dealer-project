import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#hero">Delhi Property Dealer</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#residential">Residential</a></li>
              <li className="nav-item"><a className="nav-link" href="#commercial">Commercial</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="p-0">{children}</main>
      <footer className="bg-light py-4 mt-auto">
        <div className="container text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Delhi Property Dealer</p>
        </div>
      </footer>
    </>
  );
}