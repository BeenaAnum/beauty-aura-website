import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Matte Lipstick - Ruby Red',
      category: 'lips',
      price: '$24.99',
      originalPrice: '$29.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Long-lasting matte lipstick with rich pigmentation'
    },
    {
      id: 2,
      name: 'Glow Foundation',
      category: 'face',
      price: '$34.99',
      originalPrice: '$39.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1522338242990-f8b7c8c9b68d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Lightweight foundation with natural finish'
    },
    {
      id: 3,
      name: 'Eyeshadow Palette - Sunset',
      category: 'eyes',
      price: '$49.99',
      originalPrice: '$59.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: '18 vibrant shades for day and night looks'
    },
    {
      id: 4,
      name: 'Waterproof Mascara',
      category: 'eyes',
      price: '$19.99',
      originalPrice: '$24.99',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Lengthening and volumizing mascara'
    },
    {
      id: 5,
      name: 'Blush Duo - Peach',
      category: 'face',
      price: '$27.99',
      originalPrice: '$32.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Dual-toned blush for natural flush'
    },
    {
      id: 6,
      name: 'Makeup Brush Set',
      category: 'tools',
      price: '$59.99',
      originalPrice: '$79.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1556228578-9c360e1d458b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Professional 12-piece brush set'
    },
    {
      id: 7,
      name: 'Lip Gloss - Clear Shine',
      category: 'lips',
      price: '$16.99',
      originalPrice: '$19.99',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Non-sticky glossy finish'
    },
    {
      id: 8,
      name: 'Setting Powder',
      category: 'face',
      price: '$29.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70',
      description: 'Translucent powder for all-day wear'
    }
  ];

  const makeupServices = [
    {
      id: 1,
      title: 'Bridal Package (3 days)',
      description: 'Mehndi, Barat, Valima',
      price: '$250.00',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '3 Days'
    },
    {
      id: 2,
      title: 'Airbrush Makeup',
      description: 'Flawless, long-lasting makeup for any event',
      price: '$350.00',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '1 Day'
    },
    {
      id: 3,
      title: 'Glam Makeup',
      description: 'Bold and dramatic look for special occasions',
      price: '$250.00',
      image: 'https://images.unsplash.com/photo-1519415711931-702deacf5be8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '1 Day'
    },
    {
      id: 4,
      title: 'Makeup Trial Bridal',
      description: 'Preview your bridal look before the big day',
      price: '$350.00',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '1 Look'
    },
    {
      id: 5,
      title: 'Party Makeup',
      description: 'Elegant makeup for parties and celebrations',
      price: '$400.00',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '1 Day'
    },
    {
      id: 6,
      title: 'Soft Natural Makeup',
      description: 'Subtle, everyday makeup for a fresh look',
      price: '$325.00',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '1 Day'
    }
  ];

  const hairServices = [
    {
      id: 1,
      title: 'Hairstyling',
      description: 'Any look (Extra charge for flowers)',
      price: '$150.00',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '1 Style'
    },
    {
      id: 2,
      title: 'Hair Cutting',
      description: 'Layer, Bob, Step cuts',
      price: '$300.00',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '1 Hour'
    },
    {
      id: 3,
      title: 'Hair Style',
      description: 'Any Style (Extra pay for fresh flower)',
      price: '$180.00',
      image: 'https://images.unsplash.com/photo-1559620192-032c64bc86af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '1 Style'
    },
    {
      id: 4,
      title: 'Bridal Hair Styling',
      description: 'Elegant hairstyles for brides',
      price: '$450.00',
      image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '2 Hours'
    },
    {
      id: 5,
      title: 'Hair Coloring',
      description: 'Professional hair coloring services',
      price: '$200.00',
      image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '2 Hours'
    },
    {
      id: 6,
      title: 'Hair Treatment',
      description: 'Deep conditioning and repair treatments',
      price: '$120.00',
      image: 'https://images.unsplash.com/photo-1560851248-7a2a48efb433?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '1 Hour'
    }
  ];

  const skincareServices = [
    {
      id: 1,
      title: 'Gold Facial',
      description: 'Luxury facial with gold particles for radiant skin',
      price: '$180.00',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '90 Minutes'
    },
    {
      id: 2,
      title: 'Hydra Facial',
      description: 'Deep hydration and skin rejuvenation',
      price: '$150.00',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '60 Minutes'
    },
    {
      id: 3,
      title: 'Anti-Aging Facial',
      description: 'Reduces fine lines and wrinkles',
      price: '$200.00',
      image: 'https://images.unsplash.com/photo-1556228578-9c360e1d458b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '75 Minutes'
    },
    {
      id: 4,
      title: 'Acne Treatment',
      description: 'Professional acne clearing and prevention',
      price: '$120.00',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '60 Minutes'
    },
    {
      id: 5,
      title: 'Skin Whitening',
      description: 'Brightening treatment for even skin tone',
      price: '$160.00',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '90 Minutes'
    },
    {
      id: 6,
      title: 'Oxygen Facial',
      description: 'Revitalizing treatment with oxygen infusion',
      price: '$140.00',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '60 Minutes'
    }
  ];

  const handFootServices = [
    {
      id: 1,
      title: 'Classic Manicure',
      description: 'Cleaning, shaping, cuticle care, and polish',
      price: '$25.00',
      image: 'https://images.unsplash.com/photo-1607779097040-6e8c1f3d3b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '45 Minutes'
    },
    {
      id: 2,
      title: 'Spa Pedicure',
      description: 'Relaxing foot treatment with massage',
      price: '$35.00',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '60 Minutes'
    },
    {
      id: 3,
      title: 'Gel Nails',
      description: 'Long-lasting gel polish application',
      price: '$45.00',
      image: 'https://images.unsplash.com/photo-1607779097040-6e8c1f3d3b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      duration: '75 Minutes'
    },
    {
      id: 4,
      title: 'French Manicure',
      description: 'Classic French tips with white polish',
      price: '$30.00',
      image: 'https://images.unsplash.com/photo-1607779097040-6e8c1f3d3b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70',
      duration: '60 Minutes'
    },
    {
      id: 5,
      title: 'Paraffin Treatment',
      description: 'Moisturizing paraffin wax for hands',
      price: '$40.00',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '45 Minutes'
    },
    {
      id: 6,
      title: 'Nail Art Design',
      description: 'Custom nail art and designs',
      price: '$50.00',
      image: 'https://images.unsplash.com/photo-1607779097040-6e8c1f3d3b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '90 Minutes'
    }
  ];

  const waxingServices = [
    {
      id: 1,
      title: 'Full Body Wax',
      description: 'Complete body hair removal',
      price: '$80.00',
      image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '120 Minutes'
    },
    {
      id: 2,
      title: 'Brazilian Wax',
      description: 'Complete intimate hair removal',
      price: '$45.00',
      image: 'src/assets/brazilian-wax.jpg',
      duration: '45 Minutes'
    },
    {
      id: 3,
      title: 'Face Waxing',
      description: 'Eyebrows, upper lip, and chin',
      price: '$25.00',
      image: 'src/assets/face-wax.jpg',
      duration: '30 Minutes'
    },
    {
      id: 4,
      title: 'Underarm Wax',
      description: 'Underarm hair removal',
      price: '$20.00',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70',
      duration: '20 Minutes'
    },
    {
      id: 5,
      title: 'Leg Waxing',
      description: 'Full leg hair removal',
      price: '$35.00',
      image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      duration: '45 Minutes'
    },
    {
      id: 6,
      title: 'Back Waxing',
      description: 'Complete back hair removal',
      price: '$40.00',
      image: '',
      duration: '30 Minutes'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCartCount(prev => prev + 1);
    alert(`${product.name} added to cart!`);
  };

  const bookService = (service) => {
    alert(`Booking: ${service.title}\nPrice: ${service.price}\nDuration: ${service.duration}`);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>BeautyAura</h1>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#makeup" onClick={closeMenu}>Makeup</a>
            <a href="#hair" onClick={closeMenu}>Hair</a>
            <a href="#skincare" onClick={closeMenu}>Skincare & Facial</a>
            <a href="#hands-feet" onClick={closeMenu}>Hand & Feet</a>
            <a href="#waxing" onClick={closeMenu}>Waxing</a>
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <div className="nav-right">
            {/* Search Bar */}
            <div className="search-container">
              <div className="search-bar">
                {/* <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                /> */}
                
                <input
  type="text"
  placeholder="Search products..."
  value={searchQuery}
  onChange={(e) => {
    setSearchQuery(e.target.value);
    setSelectedCategory('all');
  }}
  className="search-input"
/>

                {searchQuery && (
                  <button className="clear-search-btn" onClick={clearSearch}>
                    ×
                  </button>
                )}
                <button type='button' className="search-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="cart-icon">
              <button onClick={() => alert('View Cart')}>
                🛒 <span className="cart-count">{cartCount}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="hero-with-bg" id="home">
        <div className="hero-bg-overlay"></div>
        <div className="hero-content-bg">
          <div className="welcome-text">
            <h2>Welcome</h2>
            <h3>To</h3>
            <h1>Beauty Corner</h1>
          </div>
          <div className="discount-banner">
            <span className="discount-text">20% OFF FOR NEW MEMBERS</span>
          </div>
          <button className="hero-cta-button">Book Your Appointment</button>
        </div>
      </section>

      {/* All Services Section */}
      <section className="services-section" id="services">
        <div className="section-header">
          <h2>Our Premium Services</h2>
          <p>Professional beauty services with elegance and care</p>
        </div>
        <div className="services-grid">
          {[...makeupServices, ...hairServices, ...skincareServices, ...handFootServices, ...waxingServices].slice(0, 6).map(service => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <span className="service-duration">{service.duration}</span>
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-price">
                  <span className="price">{service.price}</span>
                </div>
                <button 
                  className="book-now-btn"
                  onClick={() => bookService(service)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Makeup Services Section */}
      <section className="specialty-section makeup-section" id="makeup">
        <div className="section-header">
          <h2>Makeup Services</h2>
          <p>Transform your look with our professional makeup artistry</p>
        </div>
        <div className="specialty-grid">
          {makeupServices.map(service => (
            <div key={service.id} className="specialty-card">
              <div className="specialty-image">
                <img src={service.image} alt={service.title} />
                <div className="specialty-overlay">
                  <span className="specialty-duration">{service.duration}</span>
                </div>
              </div>
              <div className="specialty-info">
                <h3>{service.title}</h3>
                <p className="specialty-description">{service.description}</p>
                <div className="specialty-price">
                  <span className="price">{service.price}</span>
                </div>
                <button 
                  className="specialty-btn"
                  onClick={() => bookService(service)}
                >
                  Book Makeup
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hair Services Section */}
      <section className="specialty-section hair-section" id="hair">
        <div className="section-header">
          <h2>Hair Services</h2>
          <p>Expert hair styling, cutting, and treatment services</p>
        </div>
        <div className="specialty-grid">
          {hairServices.map(service => (
            <div key={service.id} className="specialty-card">
              <div className="specialty-image">
                <img src={service.image} alt={service.title} />
                <div className="specialty-overlay">
                  <span className="specialty-duration">{service.duration}</span>
                </div>
              </div>
              <div className="specialty-info">
                <h3>{service.title}</h3>
                <p className="specialty-description">{service.description}</p>
                <div className="specialty-price">
                  <span className="price">{service.price}</span>
                </div>
                <button 
                  className="specialty-btn"
                  onClick={() => bookService(service)}
                >
                  Book Hair Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skincare Services Section */}
      <section className="specialty-section skincare-section" id="skincare">
        <div className="section-header">
          <h2>Skincare & Facial Services</h2>
          <p>Revitalize your skin with our premium facial treatments</p>
        </div>
        <div className="specialty-grid">
          {skincareServices.map(service => (
            <div key={service.id} className="specialty-card">
              <div className="specialty-image">
                <img src={service.image} alt={service.title} />
                <div className="specialty-overlay">
                  <span className="specialty-duration">{service.duration}</span>
                </div>
              </div>
              <div className="specialty-info">
                <h3>{service.title}</h3>
                <p className="specialty-description">{service.description}</p>
                <div className="specialty-price">
                  <span className="price">{service.price}</span>
                </div>
                <button 
                  className="specialty-btn"
                  onClick={() => bookService(service)}
                >
                  Book Facial
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hand & Feet Services Section */}
      <section className="specialty-section hands-section" id="hands-feet">
        <div className="section-header">
          <h2>Hand & Feet Services</h2>
          <p>Professional manicure and pedicure treatments</p>
        </div>
        <div className="specialty-grid">
          {handFootServices.map(service => (
            <div key={service.id} className="specialty-card">
              <div className="specialty-image">
                <img src={service.image} alt={service.title} />
                <div className="specialty-overlay">
                  <span className="specialty-duration">{service.duration}</span>
                </div>
              </div>
              <div className="specialty-info">
                <h3>{service.title}</h3>
                <p className="specialty-description">{service.description}</p>
                <div className="specialty-price">
                  <span className="price">{service.price}</span>
                </div>
                <button 
                  className="specialty-btn"
                  onClick={() => bookService(service)}
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Waxing Services Section */}
      <section className="specialty-section waxing-section" id="waxing">
        <div className="section-header">
          <h2>Waxing Services</h2>
          <p>Professional hair removal services</p>
        </div>
        <div className="specialty-grid">
          {waxingServices.map(service => (
            <div key={service.id} className="specialty-card">
              <div className="specialty-image">
                <img src={service.image} alt={service.title} />
                <div className="specialty-overlay">
                  <span className="specialty-duration">{service.duration}</span>
                </div>
              </div>
              <div className="specialty-info">
                <h3>{service.title}</h3>
                <p className="specialty-description">{service.description}</p>
                <div className="specialty-price">
                  <span className="price">{service.price}</span>
                </div>
                <button 
                  className="specialty-btn"
                  onClick={() => bookService(service)}
                >
                  Book Waxing
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Our Services Categories</h2>
        <div className="categories-list">
          <div className="category-item" onClick={() => document.getElementById('makeup').scrollIntoView({behavior: 'smooth'})}>
            <div className="category-icon">💄</div>
            <h3>Makeup</h3>
            <p>Professional makeup for all occasions</p>
          </div>
          <div className="category-item" onClick={() => document.getElementById('hair').scrollIntoView({behavior: 'smooth'})}>
            <div className="category-icon">💇</div>
            <h3>Hair Styling</h3>
            <p>Haircuts, styling, and treatments</p>
          </div>
          <div className="category-item" onClick={() => document.getElementById('skincare').scrollIntoView({behavior: 'smooth'})}>
            <div className="category-icon">✨</div>
            <h3>Skincare & Facial</h3>
            <p>Revitalizing facial treatments</p>
          </div>
          <div className="category-item" onClick={() => document.getElementById('hands-feet').scrollIntoView({behavior: 'smooth'})}>
            <div className="category-icon">👐</div>
            <h3>Hand & Feet</h3>
            <p>Manicure and pedicure services</p>
          </div>
          <div className="category-item" onClick={() => document.getElementById('waxing').scrollIntoView({behavior: 'smooth'})}>
            <div className="category-icon">🪒</div>
            <h3>Waxing</h3>
            <p>Professional hair removal</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="products">
        <div className="section-header">
          <h2>Shop Our Products</h2>
          <p>Premium beauty products for your home care routine</p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="search-filter-section">
          <div className="search-results-info">
            {searchQuery && (
              <div className="search-info">
                <p>Search results for: <strong>"{searchQuery}"</strong></p>
                <button onClick={clearSearch} className="clear-all-btn">
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* Categories Filter */}
          <div className="categories">
            <div className="category-filters">
              {['all', 'face', 'eyes', 'lips', 'tools'].map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    {product.originalPrice && (
                      <span className="discount-badge">
                        Sale
                      </span>
                    )}
                    <div className="product-overlay">
                      <button 
                        className="quick-view-btn"
                        onClick={() => alert(`Quick View: ${product.name}`)}
                      >
                        Quick View
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category.toUpperCase()}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-rating">
                      {'★'.repeat(Math.floor(product.rating))}
                      <span className="rating-number">{product.rating}</span>
                    </div>
                    <div className="product-price">
                      <span className="current-price">{product.price}</span>
                      {product.originalPrice && (
                        <span className="original-price">{product.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="no-results">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="1">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <h3>No products found</h3>
            <p>Try a different search term or category</p>
            <button onClick={clearSearch} className="cta-button">
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Beauty Aura</h2>
            <p className="tagline">Premium beauty salon offering professional makeup, hair styling, skincare, and bridal services with elegance and care.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>Karachi, Pakistan</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+92 300 1234567</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>beautyaura@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="quick-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#makeup">Makeup</a>
            <a href="#hair">Hair</a>
            <a href="#skincare">Skincare</a>
            <a href="#hands-feet">Hand & Feet</a>
            <a href="#waxing">Waxing</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Beauty Aura | Beauty Salon</h3>
            <p>Your premium destination for beauty and wellness</p>
            <div className="appointment-cta">
              <button className="footer-cta-button" onClick={() => alert('Call us at +92 300 1234567 to book!')}>
                📞 Call to Book
              </button>
            </div>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <a href="#makeup">Makeup</a>
            <a href="#hair">Hair Styling</a>
            <a href="#skincare">Skincare & Facial</a>
            <a href="#hands-feet">Hand & Feet</a>
            <a href="#waxing">Waxing</a>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">📺</a>
            </div>
            <div className="business-hours">
              <h5>Business Hours</h5>
              <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Beauty Aura | Beauty Salon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;