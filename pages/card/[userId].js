import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CardComponent from '../../components/CardComponent';

const CardPage = () => {
  const router = useRouter();
  const { userId } = router.query;

  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        // const fetchAPI = `http://localhost:1337/api/deceaseds/${userId}`;
        const fetchAPI = `https://api-qrcode.forestlake-uat.com/api/deceaseds/${userId}`;
        const response = await fetch(fetchAPI);
        const data = await response.json();
        setPerson(data);
      } catch (error) {
        console.error('Error fetching person data:', error);
      }
    };

    if (userId) {
      fetchPersonData();
    }
  }, [userId]);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.pageContainer}>
      <div style={styles.centeredCard}>
        <CardComponent person={person} />
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  centeredCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '800px',
  },
};

export default CardPage;
