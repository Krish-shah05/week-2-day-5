import React, { useState, useEffect } from 'react';

export default function NewProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="new-products-section">
        <h1 className="mb-4">Products</h1>
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="new-products-section">
        <h1 className="mb-4">Products</h1>
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="new-products-section">
      <h1 className="mb-4">Products</h1>
      <p className="lead mb-4">Browse our collection of products from the store</p>
      
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4">
            <div className="card h-100 product-card p-3">
              <div className="product-image-wrapper">
                <img 
                  src={product.image} 
                  className="card-img-top product-image" 
                  alt={product.title}
                  loading="lazy"
                />
              </div>
              
              <div className="card-body d-flex flex-column">
                <h5 className="card-title product-title">{product.title}</h5>
                
                <p className="card-text product-description flex-grow-1">
                  {product.description.length > 100 
                    ? product.description.substring(0, 100) + '...' 
                    : product.description}
                </p>
                
                <div className="product-info mb-3">
                  <div className="price-section">
                    <div className="product-price">
                      ${parseFloat(product.price).toFixed(2)}
                    </div>
                    <span className="product-category badge bg-secondary">{product.category}</span>
                  </div>
                  
                  <div className="rating-section mt-2">
                    <span className="badge bg-warning text-dark">
                      ⭐ {product.rating?.rate || 'N/A'} ({product.rating?.count || 0} reviews)
                    </span>
                  </div>
                </div>
                
                <button className="btn btn-primary w-100">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && !loading && !error && (
        <div className="alert alert-info" role="alert">
          No products found.
        </div>
      )}
    </div>
  );
}
