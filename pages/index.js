import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Next.js App</h1>
      <Link href="/card/[userId]" as="/card/1"> {/* Replace '1' with the actual person ID */}
        <a>Go to Card Page</a>
      </Link>
    </div>
  );
};

export default Home;
