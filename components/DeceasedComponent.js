import React from 'react';
import bg from './images/bg.png';
import { Parisienne,   } from "@next/font/google";
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mediaQueries from '@/styles/MediaQueries.module.css'

const parisienne  = Parisienne ({
  weight: "400",
  display: "swap",
  subsets: ["latin"] 
});

const MarkerComponent = ({ deceased }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  const fullName = deceased.full_name;

  const urls = (deceasedId) => {
    return `/card/${deceased.id}`;
    // switch(deceasedId) {
    //     case 1:
    //         return deceased.facebook_url
    //     case 2:
    //         return `/card/${deceased.id}`
    //     case 3: 
    //         return deceased.orbituary_page
    //     default:
    //         return null
    // }
  }
  
  return (
    <div style={styles.details}>
      <div className={mediaQueries.buttonsContainer} style={styles.buttonsContainer}>
          <Link href={urls(deceased.id)} passHref>
          <button style={styles.button}>
            {/* <FontAwesomeIcon icon={faFacebook} style={styles.icon} /> */}
            {/* <span className={parisienne.className} style={styles.iconText}>{deceased.full_name}</span> */}
            <span className={mediaQueries.deceasedButtonText} style={styles.iconText}>{fullName.toUpperCase()}</span>
          </button>
        </Link>

        <Link href={urls(deceased.id)} passHref>
          <button style={styles.button}>
            <span className={mediaQueries.deceasedButtonText} style={styles.iconText}>{fullName.toUpperCase()}</span>
          </button>
        </Link>
        <Link href={urls(deceased.id)} passHref>
          <button style={styles.button}>
            <span className={mediaQueries.deceasedButtonText} style={styles.iconText}>{fullName.toUpperCase()}</span>
          </button>
        </Link>
        <Link href={urls(deceased.id)} passHref>
          <button style={styles.button}>
            <span className={mediaQueries.deceasedButtonText} style={styles.iconText}>{fullName.toUpperCase()}</span>
          </button>
        </Link>
        <Link href={urls(deceased.id)} passHref>
          <button style={styles.button}>
            <span className={mediaQueries.deceasedButtonText} style={styles.iconText}>{fullName.toUpperCase()}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,

    textAlign: 'center',
    padding: 0,
    width: '100%',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: '8px 16px',
    cursor: 'pointer',
    border: 'none',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',

    fontFamily:'Times New Roman, sans-serif',
    textTransform: 'uppercase',
    // color: '#c8b12f',
    color: '#333',
    textAlign: 'center',
    width: '100%',
  },
  iconText: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 600,
  }
};

export default MarkerComponent;
