import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope className="icon" />
          </a>
        </div>

        {/* Credits */}
        <p className="credits">
          Built with Next.js and ❤️ © {new Date().getFullYear()} Your Name
        </p>
      </div>
    </footer>
  );
}
