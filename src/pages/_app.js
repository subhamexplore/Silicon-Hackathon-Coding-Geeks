import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function App({ Component, pageProps }) {
  const [userDetails,setUserDetails] = useState();
  const [userToken, setUserToken] = useState({ value: "" });
  const [key, setKey] = useState(0);
  const router = useRouter();
  const token = localStorage.getItem('token');

  const getDetails = async () => {
    const response = await axios.get('http://localhost:5000/hackathon/user', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const obj1 = response.data.uzzer;
    setUserDetails(obj1);
  }


  useEffect(() => {
    if (token) {
      setUserToken({ value: token });
    }
    else {
      setUserToken({ value: "" });
    }
    setKey(Math.random());
  }, [router.query])


  useEffect(() => {
    if(token)
    {
      getDetails();
    }
  }, []);


  return (
    <>
      <Navbar key={key} userToken={userToken} />
      <Component {...pageProps} setKey={setKey} userDetails = {userDetails}/>
      <Footer />
    </>
  )
}
