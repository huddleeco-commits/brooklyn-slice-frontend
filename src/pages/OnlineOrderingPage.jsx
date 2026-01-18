import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OnlineOrderingPage = () => {
  const { addItem, cart, getTotal } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('Pizzas');
  const [showCart, setShowCart] = useState(false);
  const [orderType, setOrderType] = useState('delivery');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    specialInstructions: ''
  });

  const menuCategories = {
    'Pizzas': [
      {
        id: 1,
        name: 'Classic Margherita',
        description: 'Fresh mozzarella, San Marzano tomatoes, fresh basil, extra virgin olive oil',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800'
      },
      {
        id: 2,
        name: 'Brooklyn Supreme',
        description: 'Pepperoni, sausage, mushrooms, bell peppers, onions, mozzarella',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
      },
      {
        id: 3,
        name: 'White Pizza',
        description: 'Ricotta, mozzarella, garlic, fresh herbs, olive oil',
        price: 20.99,
        image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800'
      },
      {
        id: 4,
        name: 'Meat Lovers',
        description: 'Pepperoni, sausage, ham, bacon, mozzarella',
        price: 26.99,
        image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800'
      }
    ],
    'Appetizers': [
      {
        id: 5,
        name: 'Garlic Knots',
        description: 'Fresh baked knots with garlic butter and parmesan',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
      },
      {
        id: 6,
        name: 'Mozzarella Sticks',
        description: 'Crispy breaded mozzarella with marinara sauce',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800'
      },
      {
        id: 7,
        name: 'Buffalo Wings',
        description: '8 pieces with celery and blue cheese dressing',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800'
      }
    ],
    'Salads': [
      {
        id: 8,
        name: 'Caesar Salad',
        description: 'Romaine lettuce, croutons, parmesan, caesar dressing',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
      },
      {
        id: 9,
        name: 'Brooklyn Garden',
        description: 'Mixed greens, tomatoes, cucumbers, onions, balsamic vinaigrette',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800'
      }
    ],
    'Beverages': [
      {
        id: 10,
        name: 'Soft Drinks',
        description: 'Coca-Cola, Pepsi, Sprite, Orange (20oz)',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800'
      },
      {
        id: 11,
        name: 'Italian Soda',
        description: 'San Pellegrino Orange or Lemon',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
      }
    ]
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8f9fa'
    },
    hero: {
      height: '40vh',
      backgroundImage: 'url(https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      marginBottom: '2rem'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    heroContent: {
      textAlign: 'center',
      color: 'white',
      zIndex: 2,
      position: 'relative'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      marginBottom: '2rem'
    },
    orderTypeSelector: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2rem',
      padding: '0 1rem'
    },
    orderTypeButton: {
      padding: '0.75rem 1.5rem',
      border: '2px solid #8B0000',
      backgroundColor: 'white',
      color: '#8B0000',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      fontSize: '1rem'
    },
    orderTypeButtonActive: {
      backgroundColor: '#8B0000',
      color: 'white'
    },
    mainContent: {
      display: 'flex',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 1rem',
      gap: '2rem',
      flexWrap: 'wrap'
    },
    leftPanel: {
      flex: '2',
      minWidth: '300px'
    },
    rightPanel: {
      flex: '1',
      minWidth: '300px',
      position: 'sticky',
      top: '2rem',
      height: 'fit-content'
    },
    categoryNav: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '2rem',
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    categoryButton: {
      padding: '0.5rem 1rem',
      border: '1px solid #ddd',
      backgroundColor: 'white',
      color: '#333',
      borderRadius: '20px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '0.9rem'
    },
    categoryButtonActive: {
      backgroundColor: '#8B0000',
      color: 'white',
      borderColor: '#8B0000'
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    menuItem: {
      backgroundColor: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    menuItemHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
    },
    menuItemImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    menuItemContent: {
      padding: '1.5rem'
    },
    menuItemName: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '0.5rem'
    },
    menuItemDescription: {
      color: '#666',
      marginBottom: '1rem',
      lineHeight: '1.5'
    },
    menuItemFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    menuItemPrice: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: '#8B0000'
    },
    addButton: {
      backgroundColor: '#8B0000',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s ease'
    },
    addButtonHover: {
      backgroundColor: '#a50000',
      transform: 'scale(1.05)'
    },
    cartPanel: {
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '1.5rem',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      marginBottom: '2rem'
    },
    cartHeader: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    cartItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.75rem 0',
      borderBottom: '1px solid #eee'
    },
    cartItemName: {
      fontWeight: '500',
      flex: '1'
    },
    cartItemPrice: {
      color: '#8B0000',
      fontWeight: 'bold'
    },
    cartTotal: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#8B0000',
      textAlign: 'right',
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '2px solid #8B0000'
    },
    checkoutForm: {
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '1.5rem',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    formGroup: {
      marginBottom: '1rem'
    },
    formLabel: {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: '#333'
    },
    formInput: {
      width: '100%',
      padding: '0.75rem',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    formInputFocus: {
      borderColor: '#8B0000',
      outline: 'none'
    },
    checkoutButton: {
      width: '100%',
      backgroundColor: '#FFD700',
      color: '#333',
      border: 'none',
      padding: '1rem',
      borderRadius: '10px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '1rem'
    },
    checkoutButtonHover: {
      backgroundColor: '#f0c800',
      transform: 'scale(1.02)'
    },
    emptyCart: {
      textAlign: 'center',
      color: '#666',
      fontStyle: 'italic',
      padding: '2rem'
    },
    cartToggle: {
      display: 'none'
    }
  };

  const mobileStyles = {
    '@media (max-width: 768px)': {
      heroTitle: {
        fontSize: '2rem'
      },
      mainContent: {
        flexDirection: 'column'
      },
      rightPanel: {
        position: 'static'
      },
      cartToggle: {
        display: 'block',
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: '#8B0000',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        fontSize: '1.5rem',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        zIndex: 1000
      }
    }
  };

  const handleAddToCart = (item) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  };

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('Order placed successfully! You will receive a confirmation email shortly.');
  };

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Order Online</h1>
          <p style={styles.heroSubtitle}>Fresh, authentic Brooklyn pizza delivered to your door</p>
        </div>
      </section>

      <div style={styles.orderTypeSelector}>
        <button 
          style={{
            ...styles.orderTypeButton,
            ...(orderType === 'delivery' ? styles.orderTypeButtonActive : {})
          }}
          onClick={() => setOrderType('delivery')}
        >
          🚚 Delivery
        </button>
        <button 
          style={{
            ...styles.orderTypeButton,
            ...(orderType === 'pickup' ? styles.orderTypeButtonActive : {})
          }}
          onClick={() => setOrderType('pickup')}
        >
          🏪 Pickup
        </button>
      </div>

      <main style={styles.mainContent}>
        <div style={styles.leftPanel}>
          <nav style={styles.categoryNav}>
            {Object.keys(menuCategories).map((category) => (
              <button
                key={category}
                style={{
                  ...styles.categoryButton,
                  ...(selectedCategory === category ? styles.categoryButtonActive : {})
                }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>

          <div style={styles.menuGrid}>
            {menuCategories[selectedCategory].map((item) => (
              <div 
                key={item.id} 
                style={styles.menuItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }}
              >
                <img src={item.image} alt={item.name} style={styles.menuItemImage} />
                <div style={styles.menuItemContent}>
                  <h3 style={styles.menuItemName}>{item.name}</h3>
                  <p style={styles.menuItemDescription}>{item.description}</p>
                  <div style={styles.menuItemFooter}>
                    <span style={styles.menuItemPrice}>${item.price}</span>
                    <button
                      style={styles.addButton}
                      onClick={() => handleAddToCart(item)}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#a50000';
                        e.target.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#8B0000';
                        e.target.style.transform = 'scale(1)';
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.rightPanel}>
          <div style={styles.cartPanel}>
            <div style={styles.cartHeader}>
              <span>Your Order</span>
              <span>({cart.length} items)</span>
            </div>
            
            {cart.length === 0 ? (
              <div style={styles.emptyCart}>
                Your cart is empty.<br />
                Add some delicious items!
              </div>
            ) : (
              <>
                {cart.map((item, index) => (
                  <div key={index} style={styles.cartItem}>
                    <div style={styles.cartItemName}>
                      {item.name} x{item.quantity}
                    </div>
                    <div style={styles.cartItemPrice}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
                <div style={styles.cartTotal}>
                  Total: ${getTotal()}
                </div>
              </>
            )}
          </div>

          {cart.length > 0 && (
            <form style={styles.checkoutForm} onSubmit={handleCheckout}>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>Customer Information</h3>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  style={styles.formInput}
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  style={styles.formInput}
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  style={styles.formInput}
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
              </div>

              {orderType === 'delivery' && (
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Delivery Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    style={styles.formInput}
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>
              )}

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Special Instructions</label>
                <textarea
                  name="specialInstructions"
                  rows="3"
                  style={styles.formInput}
                  value={customerInfo.specialInstructions}
                  onChange={handleInputChange}
                  onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
              </div>

              <button
                type="submit"
                style={styles.checkoutButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f0c800';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#FFD700';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Place Order - ${getTotal()}
              </button>
            </form>
          )}
        </div>
      </main>

      <button 
        style={{
          ...styles.cartToggle,
          display: window.innerWidth <= 768 ? 'block' : 'none'
        }}
        onClick={() => setShowCart(!showCart)}
      >
        🛒 {cart.length}
      </button>

      <style>
        {`
          @media (max-width: 768px) {
            .cart-toggle {
              display: block !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default OnlineOrderingPage;