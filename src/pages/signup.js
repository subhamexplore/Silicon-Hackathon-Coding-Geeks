import React,{useState} from 'react'

const Signup = () => {
    const initialDetails = {
    username : "",
    email : "",
    password : ""
  }
  const [details, setDetails] = useState(initialDetails);
  const [focusedName, setfocusedName] = useState(false);
  const [focusedEmail, setfocusedEmail] = useState(false);
  const [focusedPassword, setfocusedPassword] = useState(false);

  const handleChange = (e) => {
    setDetails({...details,[e.target.name] : e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    setDetails(initialDetails);
    setfocusedName(false);
    setfocusedEmail(false);
    setfocusedPassword(false);
  }
  const handleBlur = (setE) =>{
    setE(true);
  }
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="name" name="username" className="form-control signup_input" onChange={handleChange} placeholder="Name" value={details.username} required={true} pattern="^[A-Za-z0-9 ]{3,30}$"  onBlur={()=>{handleBlur(setfocusedName)}} focused={focusedName.toString()} />
          <p className="text-danger signup_err_message" >Enter a name of 3 to 30 characters</p>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control signup_input" name="email" aria-describedby="emailHelp" onChange={handleChange} placeholder="Email" value={details.email} required={true} pattern="^^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"  onBlur={()=>{handleBlur(setfocusedEmail)}} focused={focusedEmail.toString()}/>
          <p className="text-danger signup_err_message">Enter a valid email</p>
        </div>
        <div className="mb-3">
          <input type="password" className="form-control signup_input" name="password" onChange={handleChange} placeholder="Password" value={details.password} required={true} pattern="^[A-Za-z0-9 ]{6,30}$"  onBlur={()=>{handleBlur(setfocusedPassword)}} focused={focusedPassword.toString()}/>
         <p className="text-danger signup_err_message">Enter a password of atleast 6 characters</p>
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  )
}

export default Signup