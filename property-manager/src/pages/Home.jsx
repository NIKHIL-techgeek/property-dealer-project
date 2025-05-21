// src/pages/Home.jsx
import React from 'react';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="section-hero">
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-3">Delhi Property Dealer</h1>
          <p className="lead mb-4">
            Your trusted partner for buying, selling, and renting residential & commercial properties across Delhi.
          </p>
          <p className="fs-5 mb-4">
            📞{' '}
            <a href="tel:+919810264427" className="text-white fw-bold">
              +91-9810264427
            </a>
          </p>
          <a href="#residential" className="btn btn-lg btn-light">
            Explore
          </a>
        </div>
      </section>

      {/* Residential Panel */}
      <section id="residential" className="py-5 panel-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">Residential Properties</h2>
              <p className="mt-3">
                From cozy apartments to spacious villas—find the perfect home that fits your lifestyle and budget in Delhi.
              </p>
            </div>
            <div className="col-md-6 panel-img">
              <img
                src="/images/residential.jpg"
                alt="Residential Properties"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Panel */}
      <section id="commercial" className="py-5 panel-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 panel-img mb-4 mb-md-0">
              <img
                src="/images/commercial.jpg"
                alt="Commercial Properties"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Commercial Properties</h2>
              <p className="mt-3">
                Office spaces, retail outlets, and industrial warehouses—secure the right commercial spot to grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-services">
        <div className="container text-center">
          <h2 className="mb-4">Our Services</h2>
          <div className="services-grid">
            {[
              { title: 'Buy', desc: 'Find and purchase properties at the best prices.' },
              { title: 'Sell', desc: 'List and sell your property quickly and transparently.' },
              { title: 'Rent', desc: 'Rent reliable homes and commercial spaces.' },
              { title: 'Consult', desc: 'Expert advice on market trends and investments.' }
            ].map(({ title, desc }) => (
              <div key={title} className="service-item">
                <h5>{title}</h5>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Gallery */}
      <section id="properties" className="section-gallery">
        <div className="container text-center">
          <h2 className="mb-4">Showcase</h2>
          <div className="properties-grid">
            <div className="card property-card">
              <img src="/images/prop1.jpg" alt="Property 1" />
              <div className="card-body">
                <h5 className="card-title">Cozy 2-BHK in South Delhi</h5>
                <p className="card-text">2 Beds · 2 Baths</p>
              </div>
            </div>
            <div className="card property-card">
              <img src="/images/prop2.jpg" alt="Property 2" />
              <div className="card-body">
                <h5 className="card-title">Modern Office Space</h5>
                <p className="card-text">₹1.2Cr · 1200 sq.ft · Commercial</p>
              </div>
            </div>
            <div className="card property-card">
              <img src="/images/prop3.jpg" alt="Property 3" />
              <div className="card-body">
                <h5 className="card-title">Luxury Villa in NOIDA</h5>
                <p className="card-text">₹2.5Cr · 4 Beds · 3 Baths</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-about">
        <div className="container">
          <h2 className="mb-4 text-center">About Us</h2>
          <div className="row align-items-center">
            {/* Dad’s Photo */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src="/images/dad.jpg"
                alt="Our Team - Dad"
                className="img-fluid rounded-circle shadow"
                style={{ maxWidth: '200px' }}
              />
            </div>
            {/* Text */}
            <div className="col-md-8">
              <p>
                Over 10 years of experience guiding clients through Delhi’s real estate market with transparent, personalized service.
              </p>
              <p>
                Certified professionals, honest fees, and a commitment to making your property journey seamless and successful.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="section-contact">
        <div className="container text-center">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="fs-4 mb-4">
            📞{' '}
            <a href="tel:+919810264427" className="fw-semibold" style={{ color: '#fff' }}>
              +91-9810264427
            </a>
          </p>
          <a href="tel:+919810264427" className="btn btn-lg btn-light">
            Call Now
          </a>
        </div>
      </section>
    </>
  );
}
