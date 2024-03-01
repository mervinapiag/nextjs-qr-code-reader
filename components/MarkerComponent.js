import React from 'react';
import bg2 from './images/bg_2.png';
import logo from './images/fl_logo.png';
import logo2 from './images/fl_logo_2.png';
import Image from 'next/image'
import { Parisienne,   } from "@next/font/google";
import Link from 'next/link';
// import '@fortawesome/fontawesome-svg-core/styles.css
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faViber } from '@fortawesome/free-brands-svg-icons';
import DeceasedComponent from './DeceasedComponent';
import mediaQueries from '@/styles/MediaQueries.module.css';

const parisienne  = Parisienne ({
  weight: "400",
  display: "swap",
  subsets: ["latin"] 
});

const MarkerComponent = ({ marker }) => {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
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

      <h3 className={`${parisienne.className}, ${mediaQueries.text}`} style={styles.motto}>In loving memory of</h3>

      <div style={styles.details}>
        {/* <h2 className={parisienne.className}  style={styles.name}>{`${person.full_name}`}</h2> */}
        {/* <h3 style={styles.date}>{`${formatDate(person.born)}   -   ${formatDate(person.died)}`}</h3> */}

        
        <div style={styles.buttonsContainer} className={mediaQueries.deceasedContainer}>
            {marker.deceased.map((deceased, index) => (
              <>
                <DeceasedComponent key={index} deceased={deceased} />
                {/* <div className={mediaQueries.divider}></div> */}
              </>
            ))}
            <br />
        </div>
      </div>

      <div className={mediaQueries.divider}></div>
      <Link href='/contactus' passHref>
        <button className={mediaQueries.buttonsContainer} style={styles.buttonContactUs}>
          <FontAwesomeIcon icon={faViber} style={styles.icon} />
          <span style={styles.iconText}>Contact Us</span>
        </button>
      </Link>
    </div>
  );
};

const styles = {
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
    textAlign: 'center',
    marginTop: 20,
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
    whiteSpace: 'pre',
  },
  email: {
    color: '#555',
  },
  motto: {
    textAlign: 'center',
    fontFamily: '__Parisienne_4197db',
    fontSize: '22px',
    fontWeight: 600,
    fontStyle: 'italic',
    color: '#01683A',
    marginTop: 40,
  },
  buttonsContainer: {
    marginBottom: '20px',
  },
  button: {
    margin: '0 auto 10px',
    cursor: 'pointer',
    border: 'none',
    display: 'flex',
    alignItems: 'flex-start',
    width: '200px', 
    maxWidth: '100%',
  },
  icon: {
    color: '#01683A',
    marginRight: '10px',
    fontSize: 20,
  },
  iconText: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#01683A',
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
  },
  buttonContactUs: {
   // backgroundColor: '#01683A',
    backgroundColor: '#fff',
    borderRadius: 8,
    border: 0,
    padding: 10,
    width: 'auto',
    padding: '10px 14px',
    height: 44,
    
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px',
    cursor: 'pointer',

    position: 'absolute',
    left: '50%',
    bottom: 20,
    transform: 'translate(-50%, -50%)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
export default MarkerComponent;
