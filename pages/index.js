import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Footer from '../components/Footer';

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
