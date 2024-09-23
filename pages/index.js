import Link from 'next/link';
import Head from 'next/head';
import logo2 from '../components/images/fl_logo_2.png';
import Image from 'next/image';
import mediaQueries from '@/styles/MediaQueries.module.css';

const Home = () => {
  return (
    <>
      <div className={mediaQueries.container}>
        <Image
          src={logo2}
          width={200}
          height={200}
          className={mediaQueries.logo}
          alt="Forest Lake Center Logo"
        />
        <h1>Welcome to Forest Lake Parks</h1>
        <p>This page is from Forest Lake Parks.</p>
      </div>
    </>
  );
};

export default Home;