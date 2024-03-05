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
          <button className={mediaQueries.deceasedButton} style={styles.button}>
            {fullName}
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
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
  },
};

export default MarkerComponent;
