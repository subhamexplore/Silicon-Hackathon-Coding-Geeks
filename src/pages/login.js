import React, { useState } from 'react'
import styles from "../styles/Signup.module.css"
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Login = () => {
  const initialDetails = {
    email: "",
    password: ""
  }
  const router = useRouter();
  const [details, setDetails] = useState(initialDetails);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/hackathon/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    })
    const fetched = await response.json();
    if (fetched.status === "ok") {
      console.log(fetched.data);
      localStorage.setItem('token', fetched.data);
      toast.success('Logged in successfully', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      setTimeout(() => {
        setDetails(initialDetails);
        router.push("/");
      }, 1200)
    }
    else {
      console.log(fetched);
      toast.error(`${fetched.error}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
    <div className={`d-flex align-items-center justify-content-center ${styles.boddy}`}>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <div className={styles.sin}>
        <div className="d-flex justify-content-center mt-5">
          <div className='fs-1 fw-bold'>LOGIN</div>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <hr className={styles.hrr} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="m-4 d-flex justify-content-center align-items-center">
            <div>
              <input type="email" className={`form-control signup_input ${styles.inputl} ${styles.input_border}`} name="email" aria-describedby="emailHelp" onChange={handleChange} placeholder="Email" required={true} value={details.email} />
            </div>
          </div>
          <div className="m-4 d-flex justify-content-center">
            <div>
              <input type="password" className={`form-control signup_input ${styles.inputl} ${styles.input_border}`} name="password" onChange={handleChange} placeholder="Password" required={true} value={details.password} />
            </div>
          </div>
          <div className="d-flex justify-content-center m-5 mb-3">
            <button type="submit" className={`btn ${styles.btnl} px-2 `}>Login</button>
          </div>
        </form>
        <div className="d-flex justify-content-center">
          <p >Don't have an account? <Link className={`${styles.register_link}`} href="/signup">Register here</Link></p>
        </div>
        <div className="d-flex justify-content-end "><Link className={`${styles.register_link} ${styles.forgot}`} href="/signup">Forgot password</Link></div>
      </div>
    </div>
  )
}

export default Login