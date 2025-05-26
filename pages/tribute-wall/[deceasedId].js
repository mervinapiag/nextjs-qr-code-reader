import React, { useEffect, useState, useContext  } from 'react';
import { useRouter } from 'next/router';
import TributeWallComponent from '../../components/TributeWallComponent';
import Modal from 'react-modal';
import Image from 'next/image';
import logo2 from '../../components/images/fl_logo_2.png';
import MainStore from "../../store/MainStore";
import { Markup } from 'react-render-markup';
import { observer } from "mobx-react";
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome, faFacebook, faTelegram, faViber, faWebflow, faPhone  } from '@fortawesome/free-brands-svg-icons';
import mediaQueries from '@/styles/MediaQueries.module.css'

const MarkerPage = observer(() => {
  const router = useRouter();
  const { deceasedId } = router.query;
  const store = useContext(MainStore);
  const [messages, setMessages] = useState(null);
  
  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        store._getTributeMessages({deceasedId: deceasedId}).then((res) => {
          setMessages(res.data);
        });

      } catch (error) {
        console.error('Error fetching person data:', error);
      }
    };

    if (deceasedId) {
      fetchPersonData();
    }
  }, [deceasedId]);

  if (!messages) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.pageContainer}>
  
      <div style={styles.centeredCard} className={mediaQueries.centeredCard}>
        <TributeWallComponent messages={messages} />
      </div>
    </div>
  );
});

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  centeredCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    maxWidth: '800px',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    padding: '5px',
  },
  modalContent: {
    padding: 15,
    position: 'relative',
    backgroundColor: '#fafafa',
    margin: 20,
    borderRadius: 6,
    height: 'auto',
  },
  header: {
    position: 'relative',
    backgroundColor: '#01683F',
    color: 'white',
    padding: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '20px',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  garethText: {
    fontFamily: 'Gareth, sans-serif',
    lineHeight: '1.5',
    fontSize: 14,
    fontWeight: '300',
    color: '#333',
  },
  logoContainer: {
    // position: 'relative',
    // top: '-20%',
    // left: '-20%',
    // float: 'right',
    // width: '10%',
    // height: 'auto',
    // transform: 'translate(60%, 50%)',
    // maxWidth: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  managementText: {
    marginRight: '20px',
    fontSize: '11px',
    fontWeight: '900',
    textTransform: 'uppercase',
    marginTop: 20,
    //color: '#333',
    color: '#01683F'
  },
  buttonContactUs: {
    backgroundColor: 'transparent',
    border: 0,
    boxShadow: 0,
    color: '#01683F',
    cursor: 'pointer',
    fontSize: 11,
  },
  iconText: {
    backgroundColor: 'transparent',
    fontWeight: '300',
    fontFamily: '__Parisienne_4197db',
    fontSize: 13,
  },
};

export default MarkerPage;