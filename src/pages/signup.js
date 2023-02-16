import React, { useState } from 'react'
import styles from "../styles/Signup.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import axios from 'axios';

const Signup = () => {
  const initialDetails = {
    username: "",
    email: "",
    password: ""
  }
  const router = useRouter();
  const [details, setDetails] = useState(initialDetails);
  const [focusedName, setfocusedName] = useState(false);
  const [focusedEmail, setfocusedEmail] = useState(false);
  const [focusedPassword, setfocusedPassword] = useState(false);


  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/hackathon/signup', details , {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.data.status === "ok") {
      toast.success('Account created successfully', {
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
        router.push("/login");
      }, 1200)
    }
    else {
      toast.error(`${response.data.msg}`, {
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
    setfocusedName(false);
    setfocusedEmail(false);
    setfocusedPassword(false);
  }
  const handleBlur = (setE) => {
    setE(true);
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
          <h1 className={styles.title}>SIGN UP</h1>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <hr className={styles.hrr} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="m-4 d-flex justify-content-center align-items-center ">
            <div>
              <input type="name" name="username" className={`form-control signup_input ${styles.inputl} ${styles.input_border}`} onChange={handleChange} placeholder="Name" value={details.username} required={true} pattern="^[A-Za-z0-9 ]{3,30}$" onBlur={() => { handleBlur(setfocusedName) }} focused={focusedName.toString()} />
              <p className={`text-danger signup_err_message mt-1 px-2 mb-0 ${styles.error_p}`} >Enter a name of 3 to 30 characters</p>
            </div>
          </div>
          <div className="m-4 d-flex justify-content-center align-items-center">
            <div>
              <input type="email" className={`form-control signup_input ${styles.inputl} ${styles.input_border}`} name="email" aria-describedby="emailHelp" onChange={handleChange} placeholder="Email" value={details.email} required={true} pattern="^^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" onBlur={() => { handleBlur(setfocusedEmail) }} focused={focusedEmail.toString()} />
              <p className={`text-danger signup_err_message mt-1 px-2 mb-0 ${styles.error_p}`}>Enter a valid email</p>
            </div>
          </div>
          <div className="m-4 d-flex justify-content-center">
            <div>
              <input type="password" className={`form-control signup_input ${styles.inputl} ${styles.input_border}`} name="password" onChange={handleChange} placeholder="Password" value={details.password} required={true} pattern="^[A-Za-z0-9 ]{6,30}$" onBlur={() => { handleBlur(setfocusedPassword) }} focused={focusedPassword.toString()} />
              <p className={`text-danger signup_err_message mt-1 px-2 mb-0 ${styles.error_p}`}>Enter a password of atleast 6 characters</p>
            </div>
          </div>
          <div className="d-flex justify-content-center m-5 mb-5">
            <button type="submit" className={`btn ${styles.btnl} px-2 `}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup