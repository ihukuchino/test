import '../styles/globals.css'
import Amplify, { Storage } from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
