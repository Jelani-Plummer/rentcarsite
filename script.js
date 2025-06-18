// Header Component
function Header() {
  return (
      <header className="header">
          <div className="container header-container">
              <div className="logo">
                  <h1>TURO</h1>
              </div>
              
              <nav>
                  <ul className="nav-menu">
                      <li className="nav-item"><a href="#" className="nav-link">Cars</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">Vans</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">SUVs</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">How Turo works</a></li>
                  </ul>
              </nav>
              
              <div className="header-actions">
                  <a href="#" className="header-action">Become a Host</a>
                  <a href="#" className="header-action">Sign in</a>
                  <a href="#" className="header-action btn btn-primary">Sign up</a>
                  <button className="mobile-menu-btn">
                      <i className="fas fa-bars"></i>
                  </button>
              </div>
          </div>
      </header>
  );
}

// Hero Component
function Hero() {
  return (
      <section className="hero">
          <div className="container">
              <h1 className="hero-title">Find the perfect car to tackle your next adventure</h1>
              <p className="hero-subtitle">Book cars on demand by the hour, day, or week</p>
              
              <div className="hero-search">
                  <input type="text" className="search-input" placeholder="Location" />
                  <input type="text" className="search-input" placeholder="Start date" />
                  <input type="text" className="search-input" placeholder="End date" />
                  <button className="search-btn">Search</button>
              </div>
          </div>
      </section>
  );
}

// HowItWorks Component
function HowItWorks() {
  return (
      <section className="section how-it-works">
          <div className="container">
              <h2 className="section-title">How Turo works</h2>
              <div className="steps">
                  <div className="card step-card">
                      <div className="step-icon">
                          <i className="fas fa-search"></i>
                      </div>
                      <h3 className="step-title">Find the perfect car</h3>
                      <p className="step-description">Filter by price, style, features and more to find your ideal ride</p>
                  </div>
                  
                  <div className="card step-card">
                      <div className="step-icon">
                          <i className="fas fa-calendar-check"></i>
                      </div>
                      <h3 className="step-title">Book your trip</h3>
                      <p className="step-description">Choose your dates and book securely online with flexible cancellation options</p>
                  </div>
                  
                  <div className="card step-card">
                      <div className="step-icon">
                          <i className="fas fa-road"></i>
                      </div>
                      <h3 className="step-title">Hit the road</h3>
                      <p className="step-description">Meet your host or get contact-free delivery, then enjoy the journey</p>
                  </div>
              </div>
          </div>
      </section>
  );
}

// FeaturedCars Component
function FeaturedCars() {
  // Sample car data
  const cars = [
      { id: 1, make: "Tesla", model: "Model 3", price: 89, rating: 4.9, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { id: 2, make: "BMW", model: "X5", price: 112, rating: 4.8, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { id: 3, make: "Jeep", model: "Wrangler", price: 78, rating: 4.7, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { id: 4, make: "Porsche", model: "911 Carrera", price: 245, rating: 5.0, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { id: 5, make: "Mercedes-Benz", model: "C-Class", price: 95, rating: 4.6, image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { id: 6, make: "Audi", model: "A4", price: 87, rating: 4.8, image: "https://images.unsplash.com/photo-1580274437635-c862f0f7e7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];
  
  return (
      <section className="section featured-cars">
          <div className="container">
              <h2 className="section-title">Featured cars near you</h2>
              <div className="car-grid">
                  {cars.map(car => (
                      <div className="card car-card" key={car.id}>
                          <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" />
                          <div className="car-details">
                              <div className="car-make">{car.make}</div>
                              <div className="car-model">{car.model}</div>
                              <div className="car-price">${car.price}<span>/day</span></div>
                              <div className="car-rating">
                                  <i className="fas fa-star"></i> {car.rating}
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  );
}

// BecomeHost Component
function BecomeHost() {
  return (
      <section className="section become-host">
          <div className="container">
              <div className="host-container">
                  <div className="host-content">
                      <h2 className="host-title">Become a host and earn extra income</h2>
                      <p className="host-description">Share your car with travelers and earn money to cover costs or fund your next road trip. You're in control with your own pricing, availability, and requirements.</p>
                      <a href="#" className="btn btn-secondary">Learn how to host</a>
                  </div>
                  <div>
                      <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Become a host" className="host-image" />
                  </div>
              </div>
          </div>
      </section>
  );
}

// Benefits Component
function Benefits() {
  return (
      <section className="section benefits">
          <div className="container">
              <h2 className="section-title">Why choose Turo</h2>
              <div className="benefits-grid">
                  <div className="card benefit-card">
                      <div className="benefit-icon">
                          <i className="fas fa-car"></i>
                      </div>
                      <h3 className="benefit-title">Wide selection</h3>
                      <p className="benefit-description">Choose from thousands of cars, from economy to luxury</p>
                  </div>
                  
                  <div className="card benefit-card">
                      <div className="benefit-icon">
                          <i className="fas fa-shield-alt"></i>
                      </div>
                      <h3 className="benefit-title">Protection plans</h3>
                      <p className="benefit-description">Drive with peace of mind with our insurance options</p>
                  </div>
                  
                  <div className="card benefit-card">
                      <div className="benefit-icon">
                          <i className="fas fa-users"></i>
                      </div>
                      <h3 className="benefit-title">Trusted community</h3>
                      <p className="benefit-description">Join millions of users who share and rent cars on Turo</p>
                  </div>
              </div>
          </div>
      </section>
  );
}

// Footer Component
function Footer() {
  return (
      <footer className="footer">
          <div className="container">
              <div className="footer-container">
                  <div className="footer-column">
                      <h3>Product</h3>
                      <ul className="footer-links">
                          <li className="footer-link"><a href="#">Cars</a></li>
                          <li className="footer-link"><a href="#">Vans</a></li>
                          <li className="footer-link"><a href="#">SUVs</a></li>
                          <li className="footer-link"><a href="#">Trucks</a></li>
                          <li className="footer-link"><a href="#">Minivans</a></li>
                      </ul>
                  </div>
                  
                  <div className="footer-column">
                      <h3>Company</h3>
                      <ul className="footer-links">
                          <li className="footer-link"><a href="#">About us</a></li>
                          <li className="footer-link"><a href="#">How Turo works</a></li>
                          <li className="footer-link"><a href="#">Careers</a></li>
                          <li className="footer-link"><a href="#">Press</a></li>
                          <li className="footer-link"><a href="#">Blog</a></li>
                      </ul>
                  </div>
                  
                  <div className="footer-column">
                      <h3>Support</h3>
                      <ul className="footer-links">
                          <li className="footer-link"><a href="#">Help Center</a></li>
                          <li className="footer-link"><a href="#">Contact support</a></li>
                          <li className="footer-link"><a href="#">Trust & Safety</a></li>
                          <li className="footer-link"><a href="#">Insurance</a></li>
                          <li className="footer-link"><a href="#">FAQs</a></li>
                      </ul>
                  </div>
                  
                  <div className="footer-column">
                      <h3>Hosting</h3>
                      <ul className="footer-links">
                          <li className="footer-link"><a href="#">Become a host</a></li>
                          <li className="footer-link"><a href="#">Host resources</a></li>
                          <li className="footer-link"><a href="#">Host protection</a></li>
                          <li className="footer-link"><a href="#">Earnings calculator</a></li>
                          <li className="footer-link"><a href="#">Host FAQ</a></li>
                      </ul>
                  </div>
              </div>
              
              <div className="footer-bottom">
                  <p>© 2023 Turo, Inc. All rights reserved.</p>
              </div>
          </div>
      </footer>
  );
}

// Main App Component
function App() {
  return (
      <div>
          <Header />
          <Hero />
          <HowItWorks />
          <FeaturedCars />
          <BecomeHost />
          <Benefits />
          <Footer />
      </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);