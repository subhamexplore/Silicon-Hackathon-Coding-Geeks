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

  const getDetails = async () => {
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
    if (token) {
      setUserToken({ value: token });
    }
    else {
      setUserToken({ value: "" });
    }
    setKey(Math.random());
  }, [router.query])


  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      getDetails();
    }
  }, [router.query]);


  return (
    <>
      <Navbar key={key} userToken={userToken} />
      <Component {...pageProps} setKey={setKey} userDetails = {userDetails}/>
      <Footer />
    </>
  )
}
