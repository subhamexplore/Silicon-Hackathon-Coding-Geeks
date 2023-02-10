import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const [userToken, setUserToken] = useState({value : ""});
  const [key, setKey] = useState(0);
  const router =useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(key);
    if(token)
    {
      setUserToken({value : token});
    }
    else
    {
      setUserToken({value: ""});
    }
    setKey(Math.random());
  }, [router.query])
  
  return (
    <>
      <Navbar key={key} userToken={userToken}/>
      <Component {...pageProps} setKey={setKey} />
      <Footer/>
    </>
  )
}
