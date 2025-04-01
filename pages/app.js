import '../styles/globals.css';  // Applies to all pages

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;  // Renders the current page
}

export default MyApp;
