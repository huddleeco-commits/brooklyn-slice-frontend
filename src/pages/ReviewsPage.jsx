import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewsPage = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const reviews = [
    {
      id: 1,
      name: "Maria Rodriguez",
      rating: 5,
      date: "2024-01-15",
      review: "Absolutely incredible pizza! The crust is perfectly crispy and the sauce has that authentic New York flavor. Best pizza I've had outside of Manhattan!",
      verified: true,
      helpful: 23
    },
    {
      id: 2,
      name: "James Chen",
      rating: 5,
      date: "2024-01-12",
      review: "Been coming here for 3 years and the quality never disappoints. The pepperoni slice is perfection - crispy edges, perfectly melted cheese, and just the right amount of grease.",
      verified: true,
      helpful: 18
    },
    {
      id: 3,
      name: "Sarah Williams",
      rating: 4,
      date: "2024-01-10",
      review: "Great atmosphere and friendly staff. The margherita pizza was delicious with fresh basil. Only wish they had more vegan options, but what they do, they do very well!",
      verified: true,
      helpful: 12
    },
    {
      id: 4,
      name: "Anthony Russo",
      rating: 5,
      date: "2024-01-08",
      review: "As a Brooklyn native, I'm very picky about my pizza. Brooklyn Slice nails it every time. The white slice is phenomenal - perfect garlic flavor without being overwhelming.",
      verified: true,
      helpful: 31
    },
    {
      id: 5,
      name: "Emily Johnson",
      rating: 5,
      date: "2024-01-05",
      review: "Ordered for my office lunch meeting and everyone was impressed! The delivery was on time and the pizza was still hot. Definitely our go-to spot now.",
      verified: true,
      helpful: 15
    },
    {
      id: 6,
      name: "Michael Brown",
      rating: 4,
      date: "2024-01-03",
      review: "Solid pizza joint with consistent quality. The Sicilian is my favorite - thick crust done right. Sometimes gets busy during peak hours but worth the wait.",
      verified: false,
      helpful: 9
    },
    {
      id: 7,
      name: "Lisa Park",
      rating: 5,
      date: "2023-12-28",
      review: "Had my birthday party here and the staff was amazing! They accommodated our large group and the pizza was fresh and hot. Highly recommend for events!",
      verified: true,
      helpful: 27
    },
    {
      id: 8,
      name: "David Wilson",
      rating: 4,
      date: "2023-12-25",
      review: "Great late-night option! Open when most places are closed. The Buffalo chicken slice hits different at midnight. Clean place, good service.",
      verified: true,
      helpful: 8
    }
  ];

  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  const ratingCounts = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length
  };

  const filteredReviews = selectedRating === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(selectedRating));

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
    if (sortBy === 'highest') return b.rating - a.rating;
    if (sortBy === 'lowest') return a.rating - b.rating;
    if (sortBy === 'helpful') return b.helpful - a.helpful;
    return 0;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        style={{
          color: index < rating ? '#FFD700' : '#ddd',
          fontSize: '18px'
        }}
      >
        ★
      </span>
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.7), rgba(139, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '120px 20px 80px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            Customer Reviews
          </h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '30px',
            opacity: 0.9
          }}>
            See what our customers are saying about Brooklyn Slice
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ fontSize: '2rem' }}>
              {renderStars(Math.round(averageRating))}
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{averageRating}</div>
              <div style={{ fontSize: '1rem', opacity: 0.8 }}>Based on {totalReviews} reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#8B0000'
          }}>
            Rating Breakdown
          </h2>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            {[5, 4, 3, 2, 1].map(rating => (
              <div key={rating} style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                gap: '15px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: '80px'
                }}>
                  <span style={{ marginRight: '5px' }}>{rating}</span>
                  <span style={{ color: '#FFD700', fontSize: '16px' }}>★</span>
                </div>
                <div style={{
                  flex: 1,
                  height: '10px',
                  backgroundColor: '#e9ecef',
                  borderRadius: '5px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${(ratingCounts[rating] / totalReviews) * 100}%`,
                    backgroundColor: '#FFD700',
                    borderRadius: '5px'
                  }} />
                </div>
                <div style={{
                  minWidth: '40px',
                  textAlign: 'right',
                  fontSize: '14px',
                  color: '#666'
                }}>
                  {ratingCounts[rating]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section style={{
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Filter Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              <label style={{ fontWeight: '600', color: '#333' }}>Filter by rating:</label>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '2px solid #ddd',
                  fontSize: '14px',
                  outline: 'none'
                }}
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              <label style={{ fontWeight: '600', color: '#333' }}>Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '2px solid #ddd',
                  fontSize: '14px',
                  outline: 'none'
                }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
                <option value="helpful">Most Helpful</option>
              </select>
            </div>
          </div>

          {/* Reviews Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '30px'
          }}>
            {sortedReviews.map(review => (
              <div
                key={review.id}
                style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid #e9ecef',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '5px'
                    }}>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: '#333',
                        margin: 0
                      }}>
                        {review.name}
                      </h3>
                      {review.verified && (
                        <span style={{
                          backgroundColor: '#28a745',
                          color: 'white',
                          fontSize: '10px',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontWeight: '500'
                        }}>
                          VERIFIED
                        </span>
                      )}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      {renderStars(review.rating)}
                      <span style={{
                        fontSize: '14px',
                        color: '#666'
                      }}>
                        {formatDate(review.date)}
                      </span>
                    </div>
                  </div>
                </div>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#555',
                  marginBottom: '20px'
                }}>
                  {review.review}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '15px',
                  borderTop: '1px solid #eee'
                }}>
                  <button style={{
                    background: 'none',
                    border: '1px solid #ddd',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    color: '#666',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    👍 Helpful ({review.helpful})
                  </button>
                  <div style={{
                    fontSize: '13px',
                    color: '#999'
                  }}>
                    {review.rating} out of 5 stars
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#8B0000',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            Share Your Experience
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '30px',
            opacity: 0.9
          }}>
            We'd love to hear from you! Leave a review and let others know about your Brooklyn Slice experience.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              backgroundColor: '#FFD700',
              color: '#8B0000',
              padding: '15px 30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 5px 15px rgba(255,215,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              Write a Review
            </button>
            <Link 
              to="/menu"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                border: '2px solid white',
                borderRadius: '50px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#8B0000';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Try Our Pizza
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReviewsPage;