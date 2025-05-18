import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">Your Delhi Property Partner</h1>
        <p className="mb-4">Helping you buy, sell, and rent properties in Delhi with trust and expertise.</p>
        <Link to="/listings" className="btn btn-primary btn-lg">View Listings</Link>
      </div>

      <div className="row my-5">
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <img src="/images/feature1.jpg" className="card-img-top" alt="Buy Property" />
            <div className="card-body">
              <h5 className="card-title">Buy</h5>
              <p className="card-text">Find your dream home in Delhi.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <img src="/images/feature2.jpg" className="card-img-top" alt="Sell Property" />
            <div className="card-body">
              <h5 className="card-title">Sell</h5>
              <p className="card-text">Get the best price for your property.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <img src="/images/feature3.jpg" className="card-img-top" alt="Rent Property" />
            <div className="card-body">
              <h5 className="card-title">Rent</h5>
              <p className="card-text">Explore rental options tailored for you.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}