import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="logo">
          YourName
        </Link>
        <ul className="nav-links">
          <li><Link href="#work">Work</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
