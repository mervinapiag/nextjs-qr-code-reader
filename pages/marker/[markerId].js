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
        // const fetchAPI = `http://localhost:1337/api/markers/${markerId}`;
      store._getMarker({markerId: markerId}).then((res) => {
        setMarker(res.data);
      });

      // store._getAnnouncment().then((res) => {
      //   setAnnouncement(res.data)
      // });
        // const fetchAPI = `https://forestlake-markers-production.up.railway.app/api/markers/${markerId}`;
        // const response = await fetch(fetchAPI);
        // const data = await response.json();
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
        contentLabel="Announcement Modal"
      >
        <div style={styles.modalHeader}>
          <button style={modalStyles.closeButton} onClick={closeModal}>
            X
          </button>
        </div>
        <div style={styles.header}>
          <h3>Announcement</h3>
        </div>

        <div style={styles.modalContent}>
          <p style={styles.garethText}> 
          Our Libre Burol Offering Just Got Better.
          <br />  <br />
          Receive the following with every interment:
          <br />  <br />
              <strong>a</strong>. Full Funeral Service<br />
              <strong>b</strong>. Body Retrieval and Embalming<br />
              <strong>c</strong>. 4 Days and 3 Nights (Airconditioned Standard Viewing Chapel)<br />
              <strong>d</strong>. Funeral Hearse upon actual interment<br /><br />
              For any questions, you may call us at <strong>0917-888-9955</strong> or <strong>0918-824-2735</strong>
          </p>

          <div style={styles.managementText}>
            <strong><h4>- Management</h4></strong>
          </div>
          
         

        </div>
        <div style={styles.logoContainer}>
            <Image
            src={logo2}
            width={100}
            height={100}
            alt="Forestlake LOGO"
          />
          </div>
      </Modal>

      <div style={styles.centeredCard}>
        <MarkerComponent marker={marker} />
      </div>
    </div>
  );
});

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
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
    marginBottom: '10px',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    padding: '5px',
  },
  modalContent: {
    padding: '20px',
    position: 'relative',
  },
  header: {
    position: 'relative',
    backgroundColor: '#01683F',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    marginLeft: '-20px', 
    marginRight: '-20px',
    marginTop: '20px',
    fontSize: '25px',
  },
  garethText: {
    fontFamily: 'Gareth, sans-serif',
    marginBottom: '20px',
    lineHeight: '1.5',
  },
  logoContainer: {
    position: 'relative',
    top: '-20%',
    left: '-20%',
    float: 'right',
    width: '10%',
    height: 'auto',
    transform: 'translate(60%, 50%)',
    maxWidth: '50px',
  },
  managementText: {
    textAlign: 'right',
    marginRight: '20px',
    fontSize: '18px',
    marginTop: '10px',
    color: '#01683F'
  },
};

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '64%',
    maxWidth: '600px',
    maxHeight: '80%',
    fontFamily: 'Archivo Black, sans-serif',
    boxSizing: 'border-box',
    textAlign: 'left',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  '@media (max-width: 600px)': {
    content: {
      width: '90%',
    },
  },
};


export default MarkerPage;
