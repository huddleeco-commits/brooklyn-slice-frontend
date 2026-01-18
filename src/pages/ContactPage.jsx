import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: 'Arial, sans-serif',
    },
    hero: {
      position: 'relative',
      height: '60vh',
      backgroundImage: 'url(https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(139, 0, 0, 0.7)',
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      color: '#ffffff',
      maxWidth: '800px',
      padding: '0 20px',
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      color: '#FFD700',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    section: {
      padding: '4rem 0',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1rem',
      color: '#8B0000',
    },
    sectionSubtitle: {
      fontSize: '1.125rem',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#666666',
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      marginTop: '3rem',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '2rem',
      }
    },
    contactInfo: {
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      borderRadius: '10px',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.5rem',
    },
    infoIcon: {
      width: '50px',
      height: '50px',
      backgroundColor: '#8B0000',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1rem',
      fontSize: '1.5rem',
      color: '#ffffff',
    },
    infoText: {
      flex: 1,
    },
    infoTitle: {
      fontWeight: 'bold',
      fontSize: '1.125rem',
      marginBottom: '0.25rem',
      color: '#8B0000',
    },
    infoDescription: {
      color: '#666666',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      '@media (max-width: 480px)': {
        gridTemplateColumns: '1fr',
      }
    },
    label: {
      marginBottom: '0.5rem',
      fontWeight: 'bold',
      color: '#333333',
    },
    input: {
      padding: '0.75rem',
      border: '2px solid #e0e0e0',
      borderRadius: '5px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      outline: 'none',
    },
    textarea: {
      padding: '0.75rem',
      border: '2px solid #e0e0e0',
      borderRadius: '5px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      outline: 'none',
      resize: 'vertical',
      minHeight: '120px',
    },
    submitButton: {
      backgroundColor: '#8B0000',
      color: '#ffffff',
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1.125rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      alignSelf: 'flex-start',
    },
    hoursSection: {
      backgroundColor: '#f8f9fa',
    },
    hoursGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    hoursCard: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    cardIcon: {
      width: '80px',
      height: '80px',
      backgroundColor: '#8B0000',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem',
      fontSize: '2rem',
      color: '#ffffff',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#8B0000',
    },
    hoursText: {
      color: '#666666',
      lineHeight: '1.6',
    },
    mapSection: {
      padding: '0',
    },
    mapContainer: {
      width: '100%',
      height: '400px',
      backgroundColor: '#f0f0f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666666',
      fontSize: '1.125rem',
    },
    ctaSection: {
      backgroundColor: '#8B0000',
      textAlign: 'center',
      color: '#ffffff',
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    ctaSubtitle: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      color: '#FFD700',
    },
    ctaButton: {
      backgroundColor: '#FFD700',
      color: '#8B0000',
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Contact Brooklyn Slice</h1>
          <p style={styles.heroSubtitle}>We'd love to hear from you! Get in touch with any questions, feedback, or special requests.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <p style={styles.sectionSubtitle}>Send us a message and we'll respond as soon as possible</p>
          
          <div style={window.innerWidth > 768 ? styles.contactGrid : { display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Contact Information */}
            <div style={styles.contactInfo}>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📍</div>
                <div style={styles.infoText}>
                  <div style={styles.infoTitle}>Address</div>
                  <div style={styles.infoDescription}>123 Brooklyn Avenue<br />Brooklyn, NY 11201</div>
                </div>
              </div>
              
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📞</div>
                <div style={styles.infoText}>
                  <div style={styles.infoTitle}>Phone</div>
                  <div style={styles.infoDescription}>(718) 555-SLICE<br />(718) 555-7542</div>
                </div>
              </div>
              
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>✉️</div>
                <div style={styles.infoText}>
                  <div style={styles.infoTitle}>Email</div>
                  <div style={styles.infoDescription}>hello@brooklynslice.com<br />orders@brooklynslice.com</div>
                </div>
              </div>
              
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>🕒</div>
                <div style={styles.infoText}>
                  <div style={styles.infoTitle}>Hours</div>
                  <div style={styles.infoDescription}>Mon-Thu: 11AM-10PM<br />Fri-Sat: 11AM-11PM<br />Sun: 12PM-9PM</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={window.innerWidth > 480 ? styles.formRow : { display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      ...styles.input,
                      ':focus': { borderColor: '#8B0000' }
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>
              </div>
              
              <div style={window.innerWidth > 480 ? styles.formRow : { display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={styles.textarea}
                  onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  placeholder="Tell us about your inquiry, special requests, or feedback..."
                />
              </div>
              
              <button
                type="submit"
                style={styles.submitButton}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#A00000';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#8B0000';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Hours & Services Section */}
      <section style={{ ...styles.section, ...styles.hoursSection }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Hours & Services</h2>
          <p style={styles.sectionSubtitle}>Find out when we're open and how we can serve you</p>
          
          <div style={styles.hoursGrid}>
            <div 
              style={styles.hoursCard}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={styles.cardIcon}>🕐</div>
              <h3 style={styles.cardTitle}>Operating Hours</h3>
              <div style={styles.hoursText}>
                <strong>Monday - Thursday</strong><br />11:00 AM - 10:00 PM<br /><br />
                <strong>Friday - Saturday</strong><br />11:00 AM - 11:00 PM<br /><br />
                <strong>Sunday</strong><br />12:00 PM - 9:00 PM
              </div>
            </div>
            
            <div 
              style={styles.hoursCard}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={styles.cardIcon}>🚚</div>
              <h3 style={styles.cardTitle}>Delivery</h3>
              <div style={styles.hoursText}>
                <strong>Delivery Hours</strong><br />Same as operating hours<br /><br />
                <strong>Delivery Area</strong><br />5-mile radius from our location<br /><br />
                <strong>Minimum Order</strong><br />$15 for delivery
              </div>
            </div>
            
            <div 
              style={styles.hoursCard}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={styles.cardIcon}>🎉</div>
              <h3 style={styles.cardTitle}>Catering</h3>
              <div style={styles.hoursText}>
                <strong>Order in Advance</strong><br />24-48 hours notice required<br /><br />
                <strong>Perfect for</strong><br />Parties, meetings, events<br /><br />
                <strong>Contact</strong><br />Call or email for quotes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={styles.mapSection}>
        <div style={styles.mapContainer}>
          <div>
            📍 Interactive Map Coming Soon<br />
            123 Brooklyn Avenue, Brooklyn, NY 11201
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ ...styles.section, ...styles.ctaSection }}>
        <div style={styles.container}>
          <h2 style={styles.ctaTitle}>Ready to Order?</h2>
          <p style={styles.ctaSubtitle}>Skip the wait and order your favorite Brooklyn Slice pizza online!</p>
          <Link
            to="/online-ordering"
            style={styles.ctaButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#FFC000';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#FFD700';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Order Online Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;