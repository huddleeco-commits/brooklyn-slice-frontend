import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CateringPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Catering request submitted! We\'ll contact you within 24 hours.');
  };

  const cateringPackages = [
    {
      id: 1,
      name: 'Brooklyn Classic',
      serves: '10-15 people',
      price: '$120',
      description: 'Perfect for small gatherings',
      items: ['3 Large Pizzas', 'Caesar Salad', 'Garlic Bread', '2L Soda']
    },
    {
      id: 2,
      name: 'Borough Feast',
      serves: '20-30 people',
      price: '$280',
      description: 'Great for office parties and celebrations',
      items: ['6 Large Pizzas', '2 Large Salads', 'Garlic Knots', 'Wings Platter', 'Beverages']
    },
    {
      id: 3,
      name: 'Brooklyn Banquet',
      serves: '40-50 people',
      price: '$480',
      description: 'Perfect for large events and parties',
      items: ['10 Large Pizzas', '3 Large Salads', 'Appetizer Platters', 'Dessert Platter', 'Full Beverage Service']
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8f8f8'
    },
    hero: {
      height: '70vh',
      backgroundImage: 'url(https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    heroContent: {
      textAlign: 'center',
      color: 'white',
      zIndex: 2,
      position: 'relative',
      padding: '0 20px'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
      '@media (max-width: 768px)': {
        fontSize: '2.5rem'
      }
    },
    heroSubtitle: {
      fontSize: '1.4rem',
      marginBottom: '2rem',
      color: '#FFD700',
      '@media (max-width: 768px)': {
        fontSize: '1.2rem'
      }
    },
    ctaButton: {
      backgroundColor: '#8B0000',
      color: 'white',
      padding: '15px 30px',
      fontSize: '1.2rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      fontWeight: 'bold'
    },
    section: {
      padding: '80px 0'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#333'
    },
    packagesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginBottom: '4rem'
    },
    packageCard: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '3px solid transparent'
    },
    packageCardSelected: {
      border: '3px solid #8B0000',
      transform: 'translateY(-5px)'
    },
    packageName: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#8B0000',
      marginBottom: '0.5rem'
    },
    packagePrice: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#FFD700',
      marginBottom: '0.5rem'
    },
    packageServes: {
      fontSize: '1.1rem',
      color: '#666',
      marginBottom: '1rem'
    },
    packageDescription: {
      fontSize: '1rem',
      color: '#555',
      marginBottom: '1.5rem',
      fontStyle: 'italic'
    },
    packageItems: {
      listStyle: 'none',
      padding: 0
    },
    packageItem: {
      padding: '0.5rem 0',
      borderBottom: '1px solid #eee',
      color: '#333'
    },
    servicesSection: {
      backgroundColor: 'white'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    serviceCard: {
      textAlign: 'center',
      padding: '2rem'
    },
    serviceIcon: {
      fontSize: '3rem',
      color: '#8B0000',
      marginBottom: '1rem'
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#333'
    },
    serviceDescription: {
      color: '#666',
      lineHeight: '1.6'
    },
    gallerySection: {
      backgroundColor: '#f8f8f8'
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem'
    },
    galleryImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '10px',
      transition: 'transform 0.3s ease'
    },
    formSection: {
      backgroundColor: 'white'
    },
    form: {
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f8f8f8',
      padding: '3rem',
      borderRadius: '10px'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 'bold',
      color: '#333'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '5px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    textarea: {
      width: '100%',
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '5px',
      fontSize: '1rem',
      minHeight: '120px',
      resize: 'vertical',
      transition: 'border-color 0.3s ease'
    },
    select: {
      width: '100%',
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '5px',
      fontSize: '1rem',
      backgroundColor: 'white',
      transition: 'border-color 0.3s ease'
    },
    submitButton: {
      backgroundColor: '#8B0000',
      color: 'white',
      padding: '15px 40px',
      fontSize: '1.2rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      fontWeight: 'bold'
    },
    infoSection: {
      backgroundColor: '#8B0000',
      color: 'white',
      textAlign: 'center'
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    },
    infoCard: {
      padding: '1.5rem'
    },
    infoTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#FFD700'
    },
    infoText: {
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Brooklyn Slice Catering</h1>
          <p style={styles.heroSubtitle}>Bringing Authentic NY Pizza to Your Event</p>
          <a 
            href="#packages" 
            style={styles.ctaButton}
            onMouseOver={(e) => e.target.style.backgroundColor = '#a00000'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#8B0000'}
          >
            View Packages
          </a>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Catering Packages</h2>
          <div style={styles.packagesGrid}>
            {cateringPackages.map((pkg) => (
              <div
                key={pkg.id}
                style={{
                  ...styles.packageCard,
                  ...(selectedPackage === pkg.id ? styles.packageCardSelected : {})
                }}
                onClick={() => setSelectedPackage(pkg.id)}
                onMouseOver={(e) => {
                  if (selectedPackage !== pkg.id) {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedPackage !== pkg.id) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                  }
                }}
              >
                <h3 style={styles.packageName}>{pkg.name}</h3>
                <div style={styles.packagePrice}>{pkg.price}</div>
                <div style={styles.packageServes}>{pkg.serves}</div>
                <p style={styles.packageDescription}>{pkg.description}</p>
                <ul style={styles.packageItems}>
                  {pkg.items.map((item, index) => (
                    <li key={index} style={styles.packageItem}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{...styles.section, ...styles.servicesSection}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Catering Services</h2>
          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>🚚</div>
              <h3 style={styles.serviceTitle}>Free Delivery</h3>
              <p style={styles.serviceDescription}>
                Complimentary delivery within 10 miles of our Brooklyn location for orders over $100.
              </p>
            </div>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>⏰</div>
              <h3 style={styles.serviceTitle}>Flexible Timing</h3>
              <p style={styles.serviceDescription}>
                We accommodate your schedule with precise delivery times to ensure your event runs smoothly.
              </p>
            </div>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>👥</div>
              <h3 style={styles.serviceTitle}>Setup Service</h3>
              <p style={styles.serviceDescription}>
                Optional setup and serving assistance available for larger events and corporate functions.
              </p>
            </div>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>🍕</div>
              <h3 style={styles.serviceTitle}>Custom Menus</h3>
              <p style={styles.serviceDescription}>
                Personalized menu options to accommodate dietary restrictions and special requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{...styles.section, ...styles.gallerySection}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Catering Gallery</h2>
          <div style={styles.galleryGrid}>
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800" 
              alt="Catering Setup"
              style={styles.galleryImage}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />
            <img 
              src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800" 
              alt="Pizza Spread"
              style={styles.galleryImage}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" style={{...styles.section, ...styles.formSection}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Request a Quote</h2>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
              </div>
            </div>
            
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="eventDate">Event Date *</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="guestCount">Number of Guests *</label>
                <select
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  style={styles.select}
                  required
                  onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                >
                  <option value="">Select guest count</option>
                  <option value="10-20">10-20 guests</option>
                  <option value="20-30">20-30 guests</option>
                  <option value="30-50">30-50 guests</option>
                  <option value="50+">50+ guests</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="eventType">Event Type</label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  style={styles.select}
                  onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                >
                  <option value="">Select event type</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Birthday">Birthday Party</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="message">Additional Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                style={styles.textarea}
                placeholder="Tell us about your event, dietary restrictions, or special requests..."
                onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>

            <div style={{textAlign: 'center'}}>
              <button
                type="submit"
                style={styles.submitButton}
                onMouseOver={(e) => e.target.style.backgroundColor = '#a00000'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#8B0000'}
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Info Section */}
      <section style={{...styles.section, ...styles.infoSection}}>
        <div style={styles.container}>
          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Advance Notice</h3>
              <p style={styles.infoText}>
                Please place catering orders at least 48 hours in advance. For large events (50+ guests), we recommend 1 week notice.
              </p>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Payment Terms</h3>
              <p style={styles.infoText}>
                50% deposit required to secure your date. Final payment due upon delivery. We accept cash, card, and corporate accounts.
              </p>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Delivery Area</h3>
              <p style={styles.infoText}>
                We deliver throughout Brooklyn and Manhattan. Contact us for deliveries outside these areas - additional fees may apply.
              </p>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Questions?</h3>
              <p style={styles.infoText}>
                Call us at (718) 555-SLICE or email catering@brooklynslice.com. Our catering team is here to help!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CateringPage;