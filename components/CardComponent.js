import React from 'react';

const CardComponent = ({ person }) => {
  const imageUrl = person.picture?.url;

  return (
    <div style={styles.card}>
      <img src={`https://strapi-qr-code-generator-production.up.railway.app${imageUrl}`} alt={person.username} style={styles.image} />
      <div style={styles.details}>
        <h2 style={styles.name}>{`Name: ${person.username}`}</h2>
        <p style={styles.email}>{`Email: ${person.email}`}</p>
        {/* Add other details as needed */}
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex', // Use flexbox for layout
    border: '1px solid #4CAF50',
    borderRadius: '0',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: 'white',
    width: '50%',
    margin: '20px',
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
  },
  image: {
    width: '50%',
    height: '100%',
    objectFit: 'cover',
    borderBottom: '1px solid #e2e2e2',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  details: {
    flex: 1,
    padding: '20px',
    textAlign: 'left',
  },
  name: {
    fontSize: '1.8em',
    marginBottom: '8px',
    color: '#333',
  },
  email: {
    color: '#555',
  },
};

export default CardComponent;
