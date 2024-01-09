import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MarkerComponent from '../../components/MarkerComponent';

const MarkerPage = () => {
  const router = useRouter();
  const { markerId } = router.query;

  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        // const fetchAPI = `http://localhost:1337/api/markers/${markerId}`;
        const fetchAPI = `https://forestlake-markers-production.up.railway.app/api/markers/${markerId}`;
        const response = await fetch(fetchAPI);
        const data = await response.json();
        console.log(data);
        setMarker(data);
      } catch (error) {
        console.error('Error fetching person data:', error);
      }
    };

    if (markerId) {
      fetchPersonData();
    }
  }, [markerId]);

  if (!marker) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.pageContainer}>
      <div style={styles.centeredCard}>
        <MarkerComponent marker={marker} />
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
    // width: '100%', // Set width to 100% to center the container
  },
  centeredCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    maxWidth: '800px', // Adjust the maximum width as needed
  },
};

export default MarkerPage;
