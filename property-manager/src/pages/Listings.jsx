import React from 'react';

export default function Listings() {
  return (
    <div className="card bg-dark text-white">
      <img
        src="/images/delhi-placeholder.jpg"
        className="card-img"
        alt="Delhi skyline"
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
        <h2 className="card-title">Delhi Properties</h2>
        <p className="card-text">Buy, Sell, and Rent with Confidence</p>
        <ul className="list-unstyled fs-5">
          <li>🏠 Purchasing Property</li>
          <li>💰 Selling Properties</li>
          <li>🤝 Rental Assistance</li>
        </ul>
      </div>
    </div>
  );
}