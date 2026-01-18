import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
    },
    hero: {
      position: 'relative',
      height: '100vh',
      backgroundImage: 'url(https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      padding: '0 20px',
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.8s ease-out',
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 8vw, 6rem)',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
      lineHeight: '1.1',
    },
    heroSubtitle: {
      fontSize: 'clamp(1.2rem, 3vw, 2rem)',
      marginBottom: '30px',
      color: '#FFD700',
      fontWeight: '500',
    },
    heroDescription: {
      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
      marginBottom: '40px',
      lineHeight: '1.6',
      maxWidth: '600px',
      margin: '0 auto 40px',
    },
    ctaButton: {
      display: 'inline-block',
      backgroundColor: '#8B0000',
      color: 'white',
      padding: '18px 40px',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderRadius: '50px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)',
      border: '2px solid #8B0000',
      cursor: 'pointer',
    },
    ctaButtonHover: {
      backgroundColor: '#FFD700',
      color: '#8B0000',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
    },
    section: {
      padding: '80px 20px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#8B0000',
    },
    sectionSubtitle: {
      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
      textAlign: 'center',
      marginBottom: '60px',
      color: '#666',
      maxWidth: '600px',
      margin: '0 auto 60px',
      lineHeight: '1.6',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginBottom: '60px',
    },
    featureCard: {
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      border: '1px solid #f0f0f0',
    },
    featureCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
      display: 'block',
    },
    featureTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#8B0000',
    },
    featureDescription: {
      color: '#666',
      lineHeight: '1.6',
      fontSize: '1rem',
    },
    gallerySection: {
      backgroundColor: '#f8f9fa',
    },
    gallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
    },
    galleryItem: {
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      backgroundColor: 'white',
    },
    galleryImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    galleryContent: {
      padding: '25px',
    },
    galleryTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#8B0000',
    },
    galleryDescription: {
      color: '#666',
      lineHeight: '1.6',
    },
    ctaSection: {
      backgroundColor: '#8B0000',
      color: 'white',
      textAlign: 'center',
      backgroundImage: 'linear-gradient(135deg, #8B0000 0%, #660000 100%)',
    },
    ctaSectionTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    ctaSectionText: {
      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px',
      lineHeight: '1.6',
    },
    ctaButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    secondaryButton: {
      display: 'inline-block',
      backgroundColor: 'transparent',
      color: 'white',
      padding: '15px 35px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderRadius: '50px',
      transition: 'all 0.3s ease',
      border: '2px solid white',
      cursor: 'pointer',
    },
    secondaryButtonHover: {
      backgroundColor: 'white',
      color: '#8B0000',
    },
  };

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredGallery, setHoveredGallery] = useState(null);

  return (
    <div style={styles.page}>
      <main>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroOverlay}></div>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Brooklyn Slice</h1>
            <p style={styles.heroSubtitle}>Authentic New York Style Pizza in the Heart of Brooklyn</p>
            <p style={styles.heroDescription}>
              Experience the authentic taste of New York with our hand-tossed dough, premium ingredients, and time-honored recipes passed down through generations.
            </p>
            <Link 
              to="/online-ordering"
              style={{
                ...styles.ctaButton,
                ...(hoveredButton === 'primary' ? styles.ctaButtonHover : {})
              }}
              onMouseEnter={() => setHoveredButton('primary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Order Online Now
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Why Choose Brooklyn Slice?</h2>
            <p style={styles.sectionSubtitle}>
              We're committed to serving you the most authentic New York pizza experience with fresh ingredients and traditional methods.
            </p>
            
            <div style={styles.featuresGrid}>
              <div 
                style={{
                  ...styles.featureCard,
                  ...(hoveredCard === 'authentic' ? styles.featureCardHover : {})
                }}
                onMouseEnter={() => setHoveredCard('authentic')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <span style={{...styles.featureIcon, color: '#8B0000'}}>🍕</span>
                <h3 style={styles.featureTitle}>Authentic Recipes</h3>
                <p style={styles.featureDescription}>
                  Traditional New York style recipes passed down through generations, using only the finest imported ingredients and time-tested techniques.
                </p>
              </div>
              
              <div 
                style={{
                  ...styles.featureCard,
                  ...(hoveredCard === 'fresh' ? styles.featureCardHover : {})
                }}
                onMouseEnter={() => setHoveredCard('fresh')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <span style={{...styles.featureIcon, color: '#FFD700'}}>🌱</span>
                <h3 style={styles.featureTitle}>Fresh Daily</h3>
                <p style={styles.featureDescription}>
                  Our dough is made fresh daily, and we source the highest quality mozzarella and San Marzano tomatoes for that perfect slice every time.
                </p>
              </div>
              
              <div 
                style={{
                  ...styles.featureCard,
                  ...(hoveredCard === 'community' ? styles.featureCardHover : {})
                }}
                onMouseEnter={() => setHoveredCard('community')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <span style={{...styles.featureIcon, color: '#8B0000'}}>❤️</span>
                <h3 style={styles.featureTitle}>Community Love</h3>
                <p style={styles.featureDescription}>
                  Proudly serving Brooklyn for over a decade, we're not just a pizzeria – we're part of the neighborhood family and community tradition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section style={{...styles.section, ...styles.gallerySection}}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Our Delicious Creations</h2>
            <p style={styles.sectionSubtitle}>
              From classic margherita to creative specialty pies, every slice is crafted with passion and attention to detail.
            </p>
            
            <div style={styles.gallery}>
              <div 
                style={{
                  ...styles.galleryItem,
                  ...(hoveredGallery === 'classic' ? {transform: 'translateY(-5px)', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)'} : {})
                }}
                onMouseEnter={() => setHoveredGallery('classic')}
                onMouseLeave={() => setHoveredGallery(null)}
              >
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800" 
                  alt="Classic Pizza"
                  style={{
                    ...styles.galleryImage,
                    ...(hoveredGallery === 'classic' ? {transform: 'scale(1.05)'} : {})
                  }}
                />
                <div style={styles.galleryContent}>
                  <h3 style={styles.galleryTitle}>Classic New York Style</h3>
                  <p style={styles.galleryDescription}>
                    Our signature thin-crust pizza with the perfect balance of crispy and chewy, topped with our house-made sauce and premium mozzarella.
                  </p>
                </div>
              </div>
              
              <div 
                style={{
                  ...styles.galleryItem,
                  ...(hoveredGallery === 'gourmet' ? {transform: 'translateY(-5px)', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)'} : {})
                }}
                onMouseEnter={() => setHoveredGallery('gourmet')}
                onMouseLeave={() => setHoveredGallery(null)}
              >
                <img 
                  src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800" 
                  alt="Gourmet Pizza"
                  style={{
                    ...styles.galleryImage,
                    ...(hoveredGallery === 'gourmet' ? {transform: 'scale(1.05)'} : {})
                  }}
                />
                <div style={styles.galleryContent}>
                  <h3 style={styles.galleryTitle}>Gourmet Specialties</h3>
                  <p style={styles.galleryDescription}>
                    Artisanal creations featuring premium ingredients like prosciutto, arugula, truffle oil, and fresh burrata for the ultimate pizza experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{...styles.section, ...styles.ctaSection}}>
          <div style={styles.container}>
            <h2 style={styles.ctaSectionTitle}>Ready for the Best Slice in Brooklyn?</h2>
            <p style={styles.ctaSectionText}>
              Join thousands of happy customers who have made Brooklyn Slice their go-to pizza destination. Order now or visit us today!
            </p>
            <div style={styles.ctaButtons}>
              <Link 
                to="/online-ordering"
                style={{
                  ...styles.ctaButton,
                  backgroundColor: '#FFD700',
                  color: '#8B0000',
                  border: '2px solid #FFD700',
                  ...(hoveredButton === 'order' ? {backgroundColor: 'white', transform: 'translateY(-2px)'} : {})
                }}
                onMouseEnter={() => setHoveredButton('order')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Order Online
              </Link>
              <Link 
                to="/menu"
                style={{
                  ...styles.secondaryButton,
                  ...(hoveredButton === 'menu' ? styles.secondaryButtonHover : {})
                }}
                onMouseEnter={() => setHoveredButton('menu')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                View Menu
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;