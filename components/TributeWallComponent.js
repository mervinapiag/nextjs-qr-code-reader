import React, { useState, useEffect } from 'react';
import bg2 from './images/bg_2.png';
import logo from './images/fl_logo.png';
import logo2 from './images/fl_logo_2.png';
import Image from 'next/image'
import { Parisienne,   } from "@next/font/google";
import Link from 'next/link';
// import '@fortawesome/fontawesome-svg-core/styles.css
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faViber } from '@fortawesome/free-brands-svg-icons';
import DeceasedComponent from './DeceasedComponent';
import mediaQueries from '@/styles/MediaQueries.module.css';

const parisienne  = Parisienne ({
  weight: "400",
  display: "swap",
  subsets: ["latin"] 
});

const TributeWallComponent = ({ messages = [], interval = 5000 }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (messages.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [messages, interval]);

  if (messages.length === 0) {
    return <p style={styles.noMessages}>No tribute messages available.</p>;
  }

  const { message, full_name, createdAt } = messages[currentIndex];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? messages.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <div style={{...styles.card}} className={mediaQueries.card}>
      <div className={mediaQueries.logoContainer} style={styles.logoContainer}>
        <Image
        src={logo2}
        width={200}
        height={200}
        className={mediaQueries.logo}
        alt="Forestlake LOGO"
      />
      </div>

      <div style={styles.container}>
      <p style={styles.message}>“{message}”</p>
      <p style={styles.meta}>— {full_name}</p>
      <div style={styles.navButtons}>
        <button onClick={handlePrev} style={styles.navButton}>‹ Prev</button>
        <button onClick={handleNext} style={styles.navButton}>Next ›</button>
      </div>
      <div style={styles.pagination}>
        {messages.map((_, i) => (
          <span
            key={i}
            style={{
              ...styles.dot,
              backgroundColor: currentIndex === i ? '#01683A' : '#ccc',
            }}
          />
        ))}
      </div>
    </div>

      <div style={styles.details}>
  
        <div style={styles.buttonsContainer} className={mediaQueries.deceasedContainer}>
          {messages.map((_, i) => (
            <span
              key={i}
              style={{
                ...styles.dot,
                backgroundColor: currentIndex === i ? '#01683A' : '#ccc',
              }}
            />
          ))}
            <br />
        </div>
      </div>

      <div className={mediaQueries.divider}>
        <div></div>
        <div></div>
        <div></div>
      </div>
  
    </div>
  );
};

const styles = {
  container: {
    width: '86%',
    maxWidth: '600px',
    margin: '30px auto',
    textAlign: 'center',
    padding: '20px',
    // backgroundColor: 'rgb(222 223 226)',
    borderRadius: '10px',
    // boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'opacity 0.5s ease-in-out',
    fontStyle: 'italic',
  },
  card: {
    width: '75%',
    minHeight: '85vh',
    height: 'auto',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: 'white',
    margin: '20px auto',
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
    backgroundImage: `url(${bg2.src})`,
    backgroundSize: 'cover',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  circularImageContainer: {
    textAlign: 'center',
    marginTop: '5px', // Adjust as needed
  },
  circularImage: {
    width: '150px', // Adjust the width as needed
    height: '150px', // Maintain the aspect ratio
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgb(200, 178, 51)',
    padding: '10px',
  },
  logoContainer: {
    textAlign: 'center',
    paddingTop: '15px',
    maxWidth: '100%',
    marginTop: '20px'
  },
  logo: {
    width: '70px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  message: {
    fontSize: '25px',
    color: '#333',
    minHeight: '60px',
  },
  meta: {
    fontSize: '14px',
    color: '#666',
    fontStyle: 'normal',
    marginBottom: '30px',
    marginTop: '25px'
  },
  navButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    margin: '15px 0',
  },
  
  navButton: {
    padding: '8px 16px',
    backgroundColor: '#01683A',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};
export default TributeWallComponent;
