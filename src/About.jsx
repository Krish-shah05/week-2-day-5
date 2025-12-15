import React from 'react';

export default function About() {
  return (
    <div className="about-section">
      <h1 className="mb-4">About Us</h1>
      
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 p-4">
            <h4 className="mb-3">Our Mission</h4>
            <p>We are dedicated to providing you with the best expense management experience. Our goal is to help you track, manage, and optimize your spending with ease and confidence.</p>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card h-100 p-4">
            <h4 className="mb-3">Our Vision</h4>
            <p>To empower individuals and businesses worldwide with intelligent financial management tools that drive growth and financial stability.</p>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 p-4 text-center">
            <h5 className="mb-3">📊 Analytics</h5>
            <p>Get detailed insights into your spending patterns with comprehensive analytics and reports.</p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100 p-4 text-center">
            <h5 className="mb-3">💰 Budget Planning</h5>
            <p>Set and manage budgets effectively to stay within your financial limits and achieve your goals.</p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100 p-4 text-center">
            <h5 className="mb-3">🔒 Security</h5>
            <p>Your financial data is protected with enterprise-grade security and encryption standards.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card p-4">
            <h4 className="mb-3">Why Choose Us?</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">✅ Easy to use interface</li>
              <li className="list-group-item">✅ Real-time expense tracking</li>
              <li className="list-group-item">✅ Comprehensive budget management</li>
              <li className="list-group-item">✅ Detailed spending reports</li>
              <li className="list-group-item">✅ Multi-device synchronization</li>
              <li className="list-group-item">✅ 24/7 Customer Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
