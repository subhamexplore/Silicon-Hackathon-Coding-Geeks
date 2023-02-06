import React, { useState } from 'react'
import styles from "../styles/Signup.module.css"
import Link from 'next/link'

const Login = () => {
  const initialDetails = {
    email: "",
    password: ""
  }
  const [details, setDetails] = useState(initialDetails);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    setDetails(initialDetails);
  }
  return (
    <div className={`d-flex align-items-center justify-content-center ${styles.boddy}`}>
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
              <input type="email" className={`form-control signup_input ${styles.inputl} ${styles.input_border}`} name="email" aria-describedby="emailHelp" onChange={handleChange} placeholder="Email" required={true} value={details.email}/>
            </div>
          </div>
          <div className="m-4 d-flex justify-content-center">
            <div>
              <input type="password" className={`form-control signup_input ${styles.inputl} ${styles.input_border}`} name="password" onChange={handleChange} placeholder="Password" required={true} value={details.password}/>
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