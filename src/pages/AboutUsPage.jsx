import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  const styles = {
    hero: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      color: 'white',
      textAlign: 'center'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      padding: '0 20px'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
      '@media (max-width: 768px)': {
        fontSize: '2.5rem'
      }
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '30px',
      color: '#FFD700',
      '@media (max-width: 768px)': {
        fontSize: '1.2rem'
      }
    },
    section: {
      padding: '80px 0',
      '@media (max-width: 768px)': {
        padding: '60px 0'
      }
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#8B0000',
      textAlign: 'center',
      marginBottom: '60px',
      '@media (max-width: 768px)': {
        fontSize: '2.2rem',
        marginBottom: '40px'
      }
    },
    storySection: {
      backgroundColor: '#f9f9f9'
    },
    storyContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '40px'
      }
    },
    storyText: {
      fontSize: '1.2rem',
      lineHeight: '1.8',
      color: '#333',
      '@media (max-width: 768px)': {
        fontSize: '1.1rem'
      }
    },
    storyImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '10px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      '@media (max-width: 768px)': {
        height: '300px'
      }
    },
    valuesSection: {
      backgroundColor: 'white'
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginTop: '60px'
    },
    valueCard: {
      padding: '40px',
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      border: '3px solid transparent'
    },
    valueCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(139, 0, 0, 0.15)',
      borderColor: '#FFD700'
    },
    valueIcon: {
      fontSize: '3rem',
      color: '#8B0000',
      marginBottom: '20px'
    },
    valueTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#8B0000',
      marginBottom: '15px'
    },
    valueText: {
      fontSize: '1.1rem',
      color: '#666',
      lineHeight: '1.6'
    },
    teamSection: {
      backgroundColor: '#f9f9f9'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      marginTop: '60px'
    },
    teamMember: {
      textAlign: 'center',
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease'
    },
    memberImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      margin: '0 auto 20px',
      border: '4px solid #FFD700'
    },
    memberName: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#8B0000',
      marginBottom: '10px'
    },
    memberRole: {
      fontSize: '1.1rem',
      color: '#FFD700',
      marginBottom: '15px',
      fontWeight: '600'
    },
    memberBio: {
      fontSize: '1rem',
      color: '#666',
      lineHeight: '1.6'
    },
    ctaSection: {
      backgroundColor: '#8B0000',
      color: 'white',
      textAlign: 'center',
      padding: '80px 20px'
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      '@media (max-width: 768px)': {
        fontSize: '2rem'
      }
    },
    ctaText: {
      fontSize: '1.3rem',
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px'
    },
    ctaButton: {
      backgroundColor: '#FFD700',
      color: '#8B0000',
      padding: '18px 40px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '50px',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(255, 215, 0, 0.3)'
    },
    ctaButtonHover: {
      backgroundColor: 'white',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 25px rgba(255, 215, 0, 0.5)'
    }
  };

  const [hoveredValue, setHoveredValue] = React.useState(null);
  const [hoveredCta, setHoveredCta] = React.useState(false);

  return (
    <main>
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={{...styles.heroTitle, fontSize: window.innerWidth <= 768 ? '2.5rem' : '3.5rem'}}>
            About Brooklyn Slice
          </h1>
          <p style={{...styles.heroSubtitle, fontSize: window.innerWidth <= 768 ? '1.2rem' : '1.5rem'}}>
            Authentic New York Style Pizza in the Heart of Brooklyn
          </p>
        </div>
      </section>

      <section style={{...styles.section, ...styles.storySection}}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, fontSize: window.innerWidth <= 768 ? '2.2rem' : '3rem'}}>Our Story</h2>
          <div style={{
            ...styles.storyContent,
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
            gap: window.innerWidth <= 768 ? '40px' : '60px'
          }}>
            <div>
              <p style={{...styles.storyText, fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.2rem'}}>
                Founded in 1995 by the Torrino family, Brooklyn Slice began as a small neighborhood pizzeria with a simple mission: 
                to bring authentic New York-style pizza to our community using traditional recipes passed down through generations.
              </p>
              <br />
              <p style={{...styles.storyText, fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.2rem'}}>
                What started as a humble family business has grown into a beloved Brooklyn institution, but our commitment to quality, 
                authenticity, and community remains unchanged. Every pizza is still hand-tossed with the same care and attention 
                that made us famous over 25 years ago.
              </p>
              <br />
              <p style={{...styles.storyText, fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.2rem'}}>
                We source the finest ingredients, from our signature San Marzano tomatoes to our fresh mozzarella made daily, 
                ensuring every bite delivers the authentic taste of Brooklyn that keeps our customers coming back for more.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800" 
              alt="Brooklyn Slice kitchen" 
              style={{...styles.storyImage, height: window.innerWidth <= 768 ? '300px' : '400px'}}
            />
          </div>
        </div>
      </section>

      <section style={{...styles.section, ...styles.valuesSection}}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, fontSize: window.innerWidth <= 768 ? '2.2rem' : '3rem'}}>Our Values</h2>
          <div style={styles.valuesGrid}>
            {[
              {
                icon: "🍕",
                title: "Authenticity",
                text: "Traditional recipes and techniques passed down through generations, ensuring every pizza tastes like genuine New York style."
              },
              {
                icon: "🌟",
                title: "Quality",
                text: "Only the finest ingredients make it into our kitchen. Fresh, premium products sourced from trusted suppliers."
              },
              {
                icon: "❤️",
                title: "Community",
                text: "We're more than a pizzeria - we're part of the Brooklyn family, committed to serving our neighbors with pride."
              },
              {
                icon: "🎨",
                title: "Craftsmanship",
                text: "Every pizza is hand-crafted with care, attention to detail, and the passion that makes each slice special."
              }
            ].map((value, index) => (
              <div
                key={index}
                style={{
                  ...styles.valueCard,
                  ...(hoveredValue === index ? styles.valueCardHover : {})
                }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div style={styles.valueIcon}>{value.icon}</div>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueText}>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{...styles.section, ...styles.teamSection}}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, fontSize: window.innerWidth <= 768 ? '2.2rem' : '3rem'}}>Meet Our Team</h2>
          <div style={styles.teamGrid}>
            {[
              {
                name: "Tony Torrino",
                role: "Founder & Head Chef",
                bio: "Third-generation pizzaiolo with over 30 years of experience crafting authentic New York-style pizza.",
                image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800"
              },
              {
                name: "Maria Torrino",
                role: "Co-Owner & Manager",
                bio: "Ensures every customer feels like family while maintaining the highest standards of service and quality.",
                image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800"
              },
              {
                name: "Giuseppe Romano",
                role: "Master Pizza Chef",
                bio: "Trained in Naples, Giuseppe brings traditional Italian techniques to our Brooklyn kitchen every day.",
                image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800"
              }
            ].map((member, index) => (
              <div
                key={index}
                style={styles.teamMember}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img src={member.image} alt={member.name} style={styles.memberImage} />
                <h3 style={styles.memberName}>{member.name}</h3>
                <p style={styles.memberRole}>{member.role}</p>
                <p style={styles.memberBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={{...styles.ctaTitle, fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem'}}>
          Ready to Taste the Tradition?
        </h2>
        <p style={styles.ctaText}>
          Experience the authentic flavors that have made Brooklyn Slice a neighborhood favorite for over 25 years.
        </p>
        <Link 
          to="/online-ordering" 
          style={{
            ...styles.ctaButton,
            ...(hoveredCta ? styles.ctaButtonHover : {})
          }}
          onMouseEnter={() => setHoveredCta(true)}
          onMouseLeave={() => setHoveredCta(false)}
        >
          Order Online Now
        </Link>
      </section>
    </main>
  );
};

export default AboutUsPage;