import React, { useState } from 'react'
import styles from "../styles/Raise.module.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Raise = ({ userDetails }) => {
  const initialDetails = {
    user: "",
    email: "",
    phone: "",
    title: "",
    slug: "",
    description: "",
    amount: 0,
    day: 0,
    img: "",
    amountRaised: 0,
    category: "general",
    AccountName: "",
    AccountNumber: "",
    IFSCcode: "",
    vname: "",
    title: "",
  }
  const [details, setDetails] = useState(initialDetails);
  const [toogle, setToggle] = useState(false);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  const makeSlug = (e) => {
    let str = e.target.value;
    const madeSlug = str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
      console.log(madeSlug);
      setDetails({...details, slug : madeSlug});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    const token = localStorage.getItem('token');
    const response = await axios.post('http://localhost:5000/hackathon/card', details, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const fetched = response.data;
    if (fetched.status === "ok") {
      toast.success('Account Details Updated', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    else {
      toast.error(`Updation Unsuccessful`, {
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
    setDetails(initialDetails);
  }

  return (
    <>
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
      <br /><br />
      <form onSubmit={handleSubmit}>
        <Card className={`${styles.per}`} style={{ width: '21rem' }}>
          <Card.Body>
            <Card.Title className={`${styles.rng} fs-3 mx-4 mt-3 text-center`}>{toogle ? "Raise as an NGO" : "Raise for Personal Help"}</Card.Title> <br />
            {!toogle && <div className='ms-3'>
              <label className={`${styles.textt} mb-1`} htmlFor=""><span>Name<span className={`${styles.mand}`}>*</span></span></label><br />
              <input className={`${styles.labelL}`} type="text" placeholder='Name' name='user' onChange={handleChange} onBlur={(e) => {
                if (e.target.value != userDetails.username) {
                  toast.error(`Not your Name`, {
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
              }} /><br /><br />
              <label className={`${styles.textt} mb-1`} htmlFor=""><span>Email<span className={`${styles.mand}`}>*</span></span></label><br />
              <input className={`${styles.labelL}`} type="email" placeholder='Email' name='email' onChange={handleChange} onBlur={(e) => {
                if (e.target.value != userDetails.email) {
                  toast.error(`Not your Email`, {
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
              }} /><br /><br />
              <label className={`${styles.textt} mb-1`} htmlFor=""><span>Mobile<span className={`${styles.mand}`}>*</span></span></label><br />
              <input className={`${styles.labelL}`} type="number" placeholder='Mobile' name='phone' onChange={handleChange} />
            </div>}
            {toogle && <div className='ms-3'>
              <label className={`${styles.textt} mb-1`} htmlFor=""><span>Name<span className={`${styles.mand}`}>*</span></span></label><br />
              <input className={`${styles.labelL}`} type="text" placeholder='Name' name='user' onChange={handleChange} onBlur={(e) => {
                if (e.target.value != userDetails.NGOname) {
                  toast.error(`Not your NGO Name`, {
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
              }} /><br /><br />
              <label className={`${styles.textt} mb-1`} htmlFor=""><span>Email<span className={`${styles.mand}`}>*</span></span></label><br />
              <input className={`${styles.labelL}`} type="email" placeholder='Email' name='email' onChange={handleChange} onBlur={(e) => {
                if (e.target.value != userDetails.email) {
                  toast.error(`Enter your email`, {
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
              }} /><br /><br />
              <label className={`${styles.textt} mb-1`} htmlFor=""><span>Mobile<span className={`${styles.mand}`}>*</span></span></label><br />
              <input className={`${styles.labelL}`} type="number" placeholder='Mobile' name='phone' onChange={handleChange} value={details.phone} />
            </div>}
            <br /><br />
            <div className={`${styles.startbtn} mb-3`}><Button variant="success" onClick={() => {
              if (userDetails.NGOname) {
                setToggle((prev) => { return !prev })
              }
              else {
                toast.error(`You are not a NGO`, {
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
            }}>Toogle Identity</Button>{' '}</div>
          </Card.Body>
        </Card><br />
        <div className={`${styles.form}`}>
          <div className="row">
            <div className={`${styles.leftt} col-lg-6`}>
              <Card.Body>
                <Card.Title className='fs-3 mb-3 fw-bold'>Beneficiary Information</Card.Title>
                <label className={`${styles.textt}`} htmlFor="">{toogle ? "We" : "I"} am raising funds for</label><br />
                <select className={`${styles.drop}`} name="category" value={details.value} onChange={handleChange} >
                  <option>general</option>
                  <option>education</option>
                  <option>health</option>
                  <option>wildlife</option>
                  <option>community</option>
                  <option>environment</option>
                </select><br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="">Account Details for the Victim?</label><br />
                <input className={`${styles.drop}`} required type="text" placeholder='Enter Account Name' value={details.AccountName} name="AccountName" onChange={handleChange} /><br></br>
                <input className={`${styles.drop}`} required type="number" placeholder='Enter Account Number' value={details.AccountNumber} name="AccountNumber" onChange={handleChange} /><br></br>
                <input className={`${styles.drop}`} required type="text" placeholder='Enter IFSC' value={details.IFSCcode} name="IFSCcode" onChange={handleChange} />
                <br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="">What is the issue?</label><br />
                <input className={`${styles.drop}`} required type="text" placeholder='Enter the Issue' name='title' onChange={handleChange} onBlur={makeSlug} value={details.title} />
                <br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="">Victim's Name</label><br />
                <input className={`${styles.drop}`} required type="text" placeholder='Enter the Name' name='vname' onChange={handleChange} value={details.vname} />
                <br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="">Location</label><br />
                <input className={`${styles.drop}`} required type="text" placeholder='City' name='location' onChange={handleChange} value={details.location} />

              </Card.Body>
            </div>
            <div className={`${styles.rightt} col-lg-6`}>
              <Card.Body>
                <Card.Title className='fs-3 mb-3 fw-bold'>Fundraiser Details</Card.Title>
                <label className={`${styles.textt} mb-2`} htmlFor="">How much do you want to raise?</label><br />
                <input className={`${styles.drop}`} required type="number" placeholder='Amount' name='amount' onChange={handleChange} value={details.amount} /><br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="" >{`Due date (in days)`}</label><br />
                <input className={`${styles.drop}`} required type="number" placeholder='' name='day' onChange={handleChange} value={details.day} /><br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="">Enter the medical documents</label><br />
                <div className={`${styles.file}`}><input required type="file" /></div>
                <br />
                <Card.Title className={`fs-3 fw-bold`}>Tell Us Why</Card.Title>
                <input required type="text" className={`${styles.dropp} mt-2`} placeholder='Fundraiser Name' /><br /><br />
                <textarea className={`${styles.comment} p-2`} id="comment" placeholder="Tell us why are you running this Fundraiser..."
                  name='description' onChange={handleChange} value={details.description} ></textarea><br></br>
                <label className={`${styles.textt} mt-3`} htmlFor="">Upload Photos/Videos (Link)</label><br></br>
                <input className={`${styles.drop} ml-4`} required type="text" name='img' onChange={handleChange} value={details.img} />
              </Card.Body>
            </div>
          </div>
          <div className="d-grid gap-2">
            <Button variant="success mt-5" size="lg" type='submit'>
              SUBMIT
            </Button>
          </div>
        </div>
      </form><br /><br />

    </>
  )
}

export default Raise