import Head from 'next/head';
import Navbar from '../components/navbar.js';
import Hero from '../components/Hero.js';
import Work from '../components/Work.js';
import Footer from '../components/Footer.js';

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Your Name | Portfolio</title>
        <meta name="description" content="Developer portfolio" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <Work />
      </main>
      <Footer />
    </div>
  );
}
