import React, { useState, useEffect ,useContext } from 'react';
import bg from './images/bg.png';
import bg2 from './images/bg_2.png';
import logo from './images/fl_logo.png';
import logo2 from './images/fl_logo_2.png';
import Image from 'next/image'
import { Parisienne,   } from "@next/font/google";
import Link from 'next/link';
// import '@fortawesome/fontawesome-svg-core/styles.css
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome, faFacebook, faInstagram, faInstagramSquare, faSquareFacebook, faSquareYoutube, faTelegram, faViber, faWebflow, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import mediaQueries from '@/styles/MediaQueries.module.css';
import { formatName } from '@/utils/formatName';
import MainStore from '@/store/MainStore';
const parisienne  = Parisienne ({
  weight: "400",
  display: "swap",
  subsets: ["latin"] 
});

const CardComponent = ({ person }) => {
  const [isMoreDetailsOpen, setIsMoreDetailsOpen] = useState(false);
  const ckeditor_tbvContent = person.ckeditor_tbv;
  const store = useContext(MainStore);
  const [messages, setMessages] = useState(null);

  const imageUrl = person.picture?.url;
  // const apiUrl = `https://api-pangasinan-qrcode.forestlake-uat.com${imageUrl}`;
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        store._getTributeMessages({deceasedId: person.id}).then((res) => {
          setMessages(res.data);
        });

      } catch (error) {
        console.error('Error fetching person data:', error);
      }
    };

    if (person.id) {
      fetchPersonData();
      console.log(messages?.length > 0)
    }
  }, [person.id]);

  const urls = (deceasedId) => {
    return `/tribute-wall/${deceasedId}`;
  }
  
  return (
    <div style={{ ...styles.card}} className={mediaQueries.card}>
      {isMoreDetailsOpen ? (
        <div className={mediaQueries.moreDetailsContainer} dangerouslySetInnerHTML={{ __html: ckeditor_tbvContent }} />
      ) : (
        <>
          <div className={mediaQueries.logoContainer} style={styles.logoContainer}>
            <Image
              src={logo2}
              width={200}
              height={200}
              className={mediaQueries.logo}
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
            <h2 className={`${parisienne.className} ${mediaQueries.name}`}  style={styles.name}>{`${formatName(person.full_name)}`}</h2>

            <h3 className={mediaQueries.dateBornDeath} style={styles.date}>{`${formatDate(person.date_born)} - ${formatDate(person.date_died)}`}</h3>

            {person.motto && (
              <h3 className={mediaQueries.motto} style={styles.motto}>{`"${person.motto}"`}</h3>
            )}
            {
              messages?.length > 0 && (
              <div className={mediaQueries.buttonsContainer} style={styles.buttonsContainer}>
                <Link href={urls(person.id)} passHref>
                  <button className={mediaQueries.deceasedButton} style={styles.button}>
                    Tribute Message
                  </button>
                </Link>
              </div>
              )
            }
        
          </div>
        </>
      )}

      {ckeditor_tbvContent && (
        <button  
          className={mediaQueries.viewMoreButton} 
          onClick={() => setIsMoreDetailsOpen(!isMoreDetailsOpen)}
        >
          {isMoreDetailsOpen ? 'Hide' : `View`} more about {`${person.full_name}`}'s life. 
        </button>
      )}
   
          <div className={mediaQueries.iconWrapper}>
          {person.facebook_url && (
              <div style={styles.iconContainer}>
                <Link href={person.facebook_url} passHref>
                  <FontAwesomeIcon icon={faSquareFacebook} style={styles.fbIcon} />
                  <span style={styles.fbIconText}></span>
                </Link>
              </div>
            )}
             {person.instagram_url && (
              <div style={styles.iconContainer}>
                <Link href={person.instagram_url} passHref>
                  <FontAwesomeIcon icon={faInstagramSquare} style={styles.fbIcon} />
                  <span style={styles.igIconText}></span>
                </Link>
              </div>
              )}
            {person.youtube_url && (
              <div style={styles.iconContainer}>
                <Link href={person.youtube_url} passHref>
                  <FontAwesomeIcon icon={faSquareYoutube} style={styles.fbIcon} />
                  <span style={styles.ytIconText}></span>
                </Link>
              </div>
            )}
          </div>
        
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
    marginTop: '5px',
  },
  circularImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid rgb(200, 178, 51)',
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
    fontSize: '3em',
    fontWeight: 600,
    marginBottom: '2px',
    color: '#333',
  },
  email: {
    color: '#555',
  },
  motto: {
    fontSize: '15px',
    fontWeight: 600,
    textAlign: 'center',
    color: '#333',
    marginTop: '30px',
    marginBottom: '50px',
    padding: '15px'
  },
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
  icon: {
    color: '#396482',
    marginRight: '10px',
  },
  iconText: {
    textAlign: 'center'
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  fbIcon: {
    color: '#3b5998',
    fontSize: '35px',
    marginRight: '10px',
  },
  fbIconText: {
    fontSize: '30px',
    color: '#333',
  },
  igIconText: {
    fontSize: '30px',
    color: '#333',
  },
  ytIconText: {
    fontSize: '30px',
    color: '#333',
  }
};

export default CardComponent;
