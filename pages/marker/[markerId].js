import React, { useEffect, useState, useContext  } from 'react';
import { useRouter } from 'next/router';
import MarkerComponent from '../../components/MarkerComponent';
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
  const { markerId } = router.query;
  const store = useContext(MainStore);
  const [marker, setMarker] = useState(null);
  const [announcement, setAnnouncement] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        store._getMarker({markerId: markerId}).then((res) => {
          setMarker(res.data);
        });
      } catch (error) {
        console.error('Error fetching person data:', error);
      }
    };

    if (markerId) {
      fetchPersonData();
    }
  }, [markerId]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (!marker) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.pageContainer}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        className={mediaQueries.announcementModal}
        contentLabel="Announcement Modal"
      >
        <div style={styles.header}>
          <h3>Announcement</h3>
          <button style={modalStyles.closeButton} onClick={closeModal}>
            X
          </button>
        </div>

        <div className={mediaQueries.modalContent} style={styles.modalContent}>
          <p style={styles.garethText}> 
          Discover Forest Lake's Libre Burol Offer
          <br />  <br />
          Receive the following with every interment:
          <br />  <br />
              <strong>a</strong>. Full Funeral Service<br />
              <strong>b</strong>. Body Retrieval and Embalming<br />
              <strong>c</strong>. 4 Days and 3 Nights<br />
              <strong>d</strong>. Funeral Hearse upon actual interment<br /><br />
              For any questions, you may call us at <strong>0917-888-9955</strong> or <strong>0918-824-2735</strong>
          </p>

          <div style={styles.managementText}>
            <p>- ForestLake Management</p>
          </div>
        </div>

        <div style={styles.logoContainer}>
          <Image
            src={logo2}
            width={140}
            height={140}
            alt="Forestlake LOGO"
          />
        </div>
      </Modal>

      <div style={styles.centeredCard} className={mediaQueries.centeredCard}>
        <MarkerComponent marker={marker} />
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

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    borderRadius: 6,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: 'auto',
    maxWidth: '480px',
    maxHeight: '80%',
    fontFamily: 'Archivo Black, sans-serif',
    boxSizing: 'border-box',
    textAlign: 'left',
    padding: 0,
    border: 0,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 15,
    background: 'none',
    border: 'none',
    fontSize: 18,
    cursor: 'pointer',
  },
  '@media (max-width: 600px)': {
    content: {
      width: '90%',
    },
  },
};


export default MarkerPage;
