import React from 'react';
import bg from './images/bg.png';
import logo from './images/fl_logo.png';
import Image from 'next/image'
import { Parisienne,   } from "@next/font/google";
import Link from 'next/link';
// import '@fortawesome/fontawesome-svg-core/styles.css
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome, faFacebook, faTelegram, faViber, faWebflow } from '@fortawesome/free-brands-svg-icons';

const parisienne  = Parisienne ({
  weight: "400",
  display: "swap",
  subsets: ["latin"] 
});

const CardComponent = ({ person }) => {
  const imageUrl = person.picture?.url;
   const apiUrl = `https://strapi-qr-code-generator-production.up.railway.app${imageUrl}`;
  // const apiUrl = `http://localhost:1337${imageUrl}`;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  
  return (
    <div style={{ ...styles.card}}>
      <div style={styles.logoContainer}>
        <Image
        src={logo}
        width={120}
        height={120}
        alt="Picture of the author"
      />
      </div>

      <div style={styles.circularImageContainer}>
        <Image
          src={apiUrl}
          width={100}
          height={100}
          alt="Picture of the author"
          style={styles.circularImage}
        />
      </div>
    
      <div style={styles.details}>
        <h2 className={parisienne.className}  style={styles.name}>{`${person.full_name}`}</h2>
        <h3 style={styles.date}>{`${formatDate(person.born)}   -   ${formatDate(person.died)}`}</h3>
        <h3 style={styles.motto}>{`"${person.motto}"`}</h3>
        
        <div style={styles.buttonsContainer}>

           <Link href={person.facebook_url} passHref>
            <button style={styles.button}>
              <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
              <span style={styles.iconText}>Facebook</span>
            </button>
          </Link>

          <Link href={person.orbituary_page} passHref>
            <button style={styles.button}>
              <FontAwesomeIcon icon={faChrome} style={styles.icon} />
              <span>Orbituary Page</span>
            </button>
          </Link>

          <Link href={person.contact_us} passHref>
            <button style={styles.button}>
              <FontAwesomeIcon icon={faViber} style={styles.icon} />
              <span>Contact Us</span>
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #4CAF50',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: 'white',
    width: '100%',
    margin: '20px auto',
    // fontFamily: 'Baskerville',
    // fontFamily: 'Baskerville, serif',
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
    backgroundImage: `url(${bg.src})`,
    backgroundSize: 'cover', // Adjust to 'contain' if needed
    backgroundSize: '100% 100%',
    backgroundPosition: 'center', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
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
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderBottom: '1px solid #e2e2e2',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  details: {
    padding: '20px',
    textAlign: 'left',
    textAlign: 'center', // Center content horizontally
  },
  name: {
    fontSize: '2em',
    marginBottom: '2px',
    color: '#333',
  },
  date: {
    fontSize: '0.8em',
    marginBottom: '8px',
    color: '#333',
    // padding: '0 5px',
    whiteSpace: 'pre',
  },
  email: {
    color: '#555',
  },
  motto: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '0.5em',
    fontStyle: 'italic',
    color: '#555',
    margin: '10px 0',
  },
  buttonsContainer: {
    // textAlign: 'center',
    marginTop: '30px', // Adjust as needed
    marginBottom: '50px'
  },
  button: {
    backgroundColor: 'white',
    padding: '10px 20px',
    margin: '0 auto 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    display: 'flex',
    alignItems: 'flex-start',
    width: '50%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    color: '#396482',
    marginRight: '10px',
  },
  iconText: {
    textAlign: 'center'
  }
};

export default CardComponent;
