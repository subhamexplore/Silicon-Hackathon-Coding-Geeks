import React, { useState } from 'react'


const Login = () => {
  const initialDetails = {
    email : "",
    password : ""
  }
  const [details, setDetails] = useState(initialDetails);

  const handleChange = (e) => {
    setDetails({...details,[e.target.name] : e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  }
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input className="form-control" type="email" name="email" id="email" onChange={handleChange} placeholder="Email"/>
        </div>
        <div className="mb-3">
          <input className="form-control" type="password" id="password" name="password" onChange={handleChange} placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login