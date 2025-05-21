import React from 'react';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="text-center py-5"
        style={{
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          color: '#fff',
          textShadow: '0 1px 3px rgba(0,0,0,0.3)'
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Delhi Properties</h1>
          <p className="lead mb-4">
            Fast, fair & hassle-free buying, selling, and renting across Delhi.
          </p>
          <p className="fs-5 mb-4">
            📞{' '}
            <a
              href="tel:+919810264427"
              className="text-white fw-bold text-decoration-none"
            >
              +91-9810264427
            </a>
          </p>
          <a
            href="tel:+919810264427"
            className="btn btn-light"
            style={{
              fontSize: '1.25rem',
              padding: '0.75rem 1.5rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
            }}
          >
            Call Now
          </a>
        </div>
      </section>

      {/* Services */}
      {/* Services */}
      <section id="services" className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">What We Do</h2>

          <div className="mb-4">
            <h5 className="fw-bold">Buy</h5>
            <p>Find your dream home in your ideal neighborhood.</p>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold">Sell</h5>
            <p>Get the best market price, quickly and transparently.</p>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold">Rent</h5>
            <p>Access vetted rental properties to suit your lifestyle.</p>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold">Commercial</h5>
            <p>Assist you with leasing and purchasing of commercial properties.</p>
          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-center">About Us</h2>
          <p>
            Delhi Properties has been guiding buyers, sellers, and renters for
            over 10 years. Our hyper-local expertise ensures you get personalized
            service every step of the way.
          </p>
          <p>
            Certified agents, transparent fees, and a commitment to honesty—because
            your home is more than an address, it’s a promise.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-5 text-center"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <div className="container">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="fs-4 mb-4">
            📞{' '}
            <a
              href="tel:+919810264427"
              className="text-decoration-none fw-semibold"
              style={{ color: '#1e3c72' }}
            >
              +91-9810264427
            </a>
          </p>
          <a href="tel:+919810264427" className="btn btn-primary btn-lg">
            Call Now
          </a>
        </div>
      </section>
    </>
  );
}