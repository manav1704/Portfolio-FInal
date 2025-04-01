import Head from 'next/head';
import Navbar from '../component/navbar.js';
import Hero from '../component/Hero.js';
import Work from '../component/Work.js';
import Footer from '../component/Footer.js';

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
