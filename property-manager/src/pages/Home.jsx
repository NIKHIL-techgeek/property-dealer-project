import React from 'react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="section-hero">
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Delhi Properties</h1>
          <p className="lead mb-4">
            Fast, fair & hassle-free residential & industrial property services across Delhi.
          </p>
          <p className="fs-5 mb-4">
            📞{' '}
            <a href="tel:+919810264427" className="text-white fw-bold">
              +91-9810264427
            </a>
          </p>
          <a href="#contact" className="btn btn-lg btn-light">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-services">
        <div className="container">
          <h2 className="mb-4">What We Do</h2>
          <div className="services-grid">
            {[
              { title: 'Buy',        desc: 'Find your dream home in your ideal neighborhood.' },
              { title: 'Sell',       desc: 'Get the best market price, quickly and transparently.' },
              { title: 'Rent',       desc: 'Access vetted rental properties to suit your lifestyle.' },
              { title: 'Commercial', desc: 'Assist you with leasing and purchasing commercial properties.' }
            ].map(({ title, desc }) => (
              <div key={title} className="service-item">
                <h5>{title}</h5>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-about">
        <div className="container">
          <h2 className="mb-4">About Us</h2>
          <p>
            Delhi Properties has been guiding residential & industrial clients for over 10 years with hyper-local expertise.
          </p>
          <p>
            Certified agents, transparent fees, and a commitment to honesty—your property is more than an address, it’s a promise.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-contact">
        <div className="container">
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
