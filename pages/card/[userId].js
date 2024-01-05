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
        const response = await fetch(`https://qr-code-generator-oe2i.onrender.com/api/users/${userId}?populate=picture`);
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
      <h1>Card</h1>
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
    minHeight: '100vh', // Ensure the container takes up at least the full height of the viewport
  },
  centeredCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%', // Adjust the width as needed
  },
};

export default CardPage;
