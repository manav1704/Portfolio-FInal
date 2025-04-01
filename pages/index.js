import Head from 'next/head';
import { Hero, Work } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Hero />
      <Work />
    </>
  );
}
