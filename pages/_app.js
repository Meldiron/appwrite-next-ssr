import { useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {        
      document.body.classList.add("dark");
      document.body.classList.add("bg-gray-900");
  });

  return <Component {...pageProps} />
}

export default MyApp
