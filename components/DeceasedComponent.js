import React from 'react';
import bg from './images/bg.png';
import { Parisienne,   } from "@next/font/google";
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const parisienne  = Parisienne ({
  weight: "400",
  display: "swap",
  subsets: ["latin"] 
});

const MarkerComponent = ({ deceased }) => {
    // const apiUrl = `https://strapi-qr-code-generator-production.up.railway.app${imageUrl}`;
//   const apiUrl = `http://localhost:1337/api/card`;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  const fullName = deceased.full_name;

  const urls = (deceasedId) => {
    switch(deceasedId) {
        case 1:
            return deceased.facebook_url
        case 2:
            return `/card/${deceased.id}`
        case 3: 
            return deceased.orbituary_page
        default:
            return null
    }
  }
  
  return (
      <div style={styles.details}>
        
        <div style={styles.buttonsContainer}>

           <Link href={urls(deceased.id)} passHref>
            <button style={styles.button}>
              {/* <FontAwesomeIcon icon={faFacebook} style={styles.icon} /> */}
              {/* <span className={parisienne.className} style={styles.iconText}>{deceased.full_name}</span> */}
              <span style={styles.iconText}>{fullName.toUpperCase()}</span>
            </button>
          </Link>
        </div>
      </div>
  );
};

const styles = {
  buttonsContainer: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: '10px 20px',
    margin: '20px auto 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    display: 'flex',
    alignItems: 'flex-start',
    width: '200px',
    maxWidth: '100%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
    justifyContent: 'center',
  },

  iconText: {
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: '600',
    textTransform: 'capitalize'
  }
};

export default MarkerComponent;
