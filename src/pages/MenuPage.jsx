import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const MenuPage = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuCategories = [
    { id: 'all', name: 'All Items' },
    { id: 'pizzas', name: 'Pizzas' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'salads', name: 'Salads' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Classic Margherita',
      category: 'pizzas',
      description: 'Fresh mozzarella, san marzano tomatoes, basil, olive oil',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
    },
    {
      id: 2,
      name: 'Brooklyn Supreme',
      category: 'pizzas',
      description: 'Pepperoni, sausage, mushrooms, peppers, onions, mozzarella',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800'
    },
    {
      id: 3,
      name: 'White Pie Special',
      category: 'pizzas',
      description: 'Ricotta, mozzarella, garlic, spinach, olive oil',
      price: 21.99,
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800'
    },
    {
      id: 4,
      name: 'Pepperoni Classic',
      category: 'pizzas',
      description: 'Premium pepperoni, mozzarella, san marzano sauce',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
    },
    {
      id: 5,
      name: 'Garlic Knots',
      category: 'appetizers',
      description: 'Fresh baked knots with garlic, herbs, and marinara sauce',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800'
    },
    {
      id: 6,
      name: 'Mozzarella Sticks',
      category: 'appetizers',
      description: 'Hand-breaded mozzarella with marinara dipping sauce',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800'
    },
    {
      id: 7,
      name: 'Caesar Salad',
      category: 'salads',
      description: 'Crisp romaine, parmesan, croutons, classic caesar dressing',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
    },
    {
      id: 8,
      name: 'Italian Garden Salad',
      category: 'salads',
      description: 'Mixed greens, tomatoes, olives, peppers, Italian dressing',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800'
    },
    {
      id: 9,
      name: 'Cannoli',
      category: 'desserts',
      description: 'Traditional Sicilian cannoli with sweet ricotta filling',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800'
    },
    {
      id: 10,
      name: 'Tiramisu',
      category: 'desserts',
      description: 'Classic Italian dessert with espresso and mascarpone',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
    },
    {
      id: 11,
      name: 'Italian Soda',
      category: 'beverages',
      description: 'Refreshing sparkling water with Italian flavors',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800'
    },
    {
      id: 12,
      name: 'Fresh Lemonade',
      category: 'beverages',
      description: 'House-made fresh squeezed lemonade',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  };

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#ffffff'
    },
    hero: {
      height: '60vh',
      backgroundImage: 'url(https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      color: 'white'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1
    },
    heroContent: {
      textAlign: 'center',
      zIndex: 2,
      padding: '0 20px',
      maxWidth: '800px'
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      '@media (max-width: 768px)': {
        fontSize: '2.5rem'
      }
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
      '@media (max-width: 768px)': {
        fontSize: '1.2rem'
      }
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    menuSection: {
      padding: '80px 0',
      backgroundColor: '#f8f9fa'
    },
    sectionTitle: {
      fontSize: '3rem',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#8B0000',
      fontWeight: 'bold'
    },
    categoryFilter: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '4rem'
    },
    categoryButton: {
      padding: '12px 24px',
      border: '2px solid #8B0000',
      backgroundColor: 'transparent',
      color: '#8B0000',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#8B0000',
        color: 'white',
        transform: 'translateY(-2px)'
      }
    },
    categoryButtonActive: {
      backgroundColor: '#8B0000',
      color: 'white'
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr'
      }
    },
    menuItem: {
      backgroundColor: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      ':hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
      }
    },
    menuItemImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    menuItemContent: {
      padding: '25px'
    },
    menuItemHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '15px'
    },
    menuItemName: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#333',
      margin: 0,
      flex: 1
    },
    menuItemPrice: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#8B0000',
      marginLeft: '15px'
    },
    menuItemDescription: {
      color: '#666',
      fontSize: '1rem',
      lineHeight: '1.5',
      marginBottom: '20px'
    },
    addButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#8B0000',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#a50000',
        transform: 'translateY(-2px)'
      }
    },
    ctaSection: {
      padding: '80px 0',
      backgroundColor: '#8B0000',
      color: 'white',
      textAlign: 'center'
    },
    ctaTitle: {
      fontSize: '2.5rem',
      marginBottom: '2rem',
      fontWeight: 'bold'
    },
    ctaButton: {
      display: 'inline-block',
      padding: '15px 40px',
      backgroundColor: '#FFD700',
      color: '#8B0000',
      textDecoration: 'none',
      borderRadius: '30px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#ffed4a',
        transform: 'translateY(-3px)',
        boxShadow: '0 8px 20px rgba(255, 215, 0, 0.3)'
      }
    }
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Our Menu</h1>
          <p style={styles.heroSubtitle}>Authentic New York Style Pizza & More</p>
        </div>
      </section>

      <main>
        <section style={styles.menuSection}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Delicious Options</h2>
            
            <div style={styles.categoryFilter}>
              {menuCategories.map(category => (
                <button
                  key={category.id}
                  style={{
                    ...styles.categoryButton,
                    ...(selectedCategory === category.id ? styles.categoryButtonActive : {})
                  }}
                  onClick={() => setSelectedCategory(category.id)}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category.id) {
                      e.target.style.backgroundColor = '#8B0000';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category.id) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#8B0000';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div style={styles.menuGrid}>
              {filteredItems.map(item => (
                <div 
                  key={item.id} 
                  style={styles.menuItem}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={styles.menuItemImage}
                  />
                  <div style={styles.menuItemContent}>
                    <div style={styles.menuItemHeader}>
                      <h3 style={styles.menuItemName}>{item.name}</h3>
                      <span style={styles.menuItemPrice}>${item.price}</span>
                    </div>
                    <p style={styles.menuItemDescription}>{item.description}</p>
                    <button 
                      style={styles.addButton}
                      onClick={() => handleAddToCart(item)}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#a50000';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#8B0000';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.ctaSection}>
          <div style={styles.container}>
            <h2 style={styles.ctaTitle}>Ready to Order?</h2>
            <Link 
              to="/online-ordering" 
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ffed4a';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 20px rgba(255, 215, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FFD700';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Order Online Now
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MenuPage;