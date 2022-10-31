import '../styles/globals.css'
import {AnimatePresence} from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      {/* add key to tell AnimatePresence which page your transitioning too */}
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp
