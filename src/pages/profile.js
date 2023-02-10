import { useRouter } from 'next/router';
import React from 'react'

const profile = ({setKey}) => {
  const router = useRouter();
  const logout = () =>{
    localStorage.removeItem('token');
    router.push('/');
  }
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default profile