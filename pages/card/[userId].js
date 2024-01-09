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
        const fetchAPI = `http://localhost:1337/api/users/${userId}?populate=picture`;
        // const fetchAPI = `https://forestlake-markers-production.up.railway.app/api/users/${userId}?populate=picture`;
        const response = await fetch(fetchAPI);
        const data = await response.json();
        console.log(data);
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
    // justifyContent: 'center',
    minHeight: '100vh',
    // height: 'auto'
    // width: '100%', // Set width to 100% to center the container
  },
  centeredCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    // height: 'auto',
    maxWidth: '800px', // Adjust the maximum width as needed
  },
};

export default CardPage;
