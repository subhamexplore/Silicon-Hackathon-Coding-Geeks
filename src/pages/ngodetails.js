import React, { useState, useEffect } from 'react'
import styles from "../styles/Profile.module.css"
import styles2 from "../styles/Accountdetails.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

const Ngodetails = () => {
    const router = useRouter();
    const [hasNGO, setHasNGO] = useState(false);
    const [details, setDetails] = useState({
        NGOname: "",
        NGOregd: "",
        NGOvision: "",
        NGOachiv: "",
        NGOsector: "",
        NGOcity: "",
        NGOstate: "",
        NGOpin: "",
        NGOaddress: ""
    });

    const logout = () => {
        localStorage.removeItem('token');
        router.push('/');
    }

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        if (!hasNGO) {
            const response = await axios.patch('http://localhost:5000/hackathon/user', details , {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization' : `Bearer ${token}`
                }
              })
              const response2 = await axios.patch('http://localhost:5000/hackathon/login', details , {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization' : `Bearer ${token}`
                }
              })
            const fetched2 = response2.data;
            localStorage.removeItem('token');
            localStorage.setItem('token', fetched2.info);
            if (response.data.status === "ok") {
                toast.success('NGO Details added', {
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
                    router.push("/profile");
                }, 1200)
            }
            else {
                toast.error(`Submission Unsuccessful`, {
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
        else {
            const response = await axios.patch('http://localhost:5000/hackathon/user', details , {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization' : `Bearer ${token}`
                }
              })
            if (response.data.status === "ok") {
                toast.success('NGO Details Updated', {
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
        }
    }

    const checkNGO = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/hackathon/home', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const fetched = response.data;
        setHasNGO(fetched.data.hasNGO);
    }

    useEffect(() => {
        checkNGO();
    })

    return (
        <>
            <div className={`row  ${styles.boddy} py-5`}>
                <div className={`col-lg-3 col-md-4 col-12 mb-3`}>
                    <div className={`${styles.acclsidecont} p-2 mx-auto`}>
                        <div className="mx-3 my-5 d-flex justify-content-center">
                            <img src="/pexels-lukas-628241.jpg" className={`${styles.accig} img-thumbnail`} alt="..." />
                        </div>
                        <div className={`${styles.acclside} mb-2`}>
                            <div className="text-center d-flex align-items-center justify-content-center p-2"><Link className={styles.profilelink} href="/profile">Dashboard</Link></div>
                        </div>
                        <div className={`${styles.acclside}  mb-2`}>
                            <div className="text-center d-flex align-items-center justify-content-center p-2"><Link className={styles.profilelink} href="/accountdetails">Account Details</Link></div>
                        </div>
                        <div className={`${styles.acclside} mb-2`}>
                            <div className="text-center d-flex align-items-center justify-content-center p-2" ><Link className={styles.profilelink} href="/ngodetails">N.G.O Details</Link></div>
                        </div>
                        <div className={`fixed-bottom mb-5`}>
                            <div className="text-center d-flex align-items-center justify-content-center p-2" onClick={logout}><button type="submit" className={`btn ${styles.btnl} px-2 `}>Logout</button></div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.leftborder} col-lg-9 col-md-8`}>
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
                    <div className="col-12 col-lg-8 col-md-8 col-sm-12 mx-auto">
                        <div className=" mx-5 d-flex justify-content-center">
                            <div className={`${styles2.accheader}  px-3`}>N.G.O Details</div>
                        </div>
                        <div className={`${styles2.accform} h-90 p-4 m-2 `}>
                            <form className="row g-3 d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>

                                <div className="col-6">
                                    <label htmlFor="inputName" className="form-label fs-4 ">Name of V.O./N.G.O.</label>
                                    <input type="text" className={`form-control ${styles2.inputac}`} id="inputName" placeholder="N.G.O. Name" name="NGOname" value={details.NGOname} onChange={handleChange} />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputRegistration" className="form-label fs-4 text-">Registration No.</label>
                                    <input type="text" className={`form-control ${styles2.inputac}`} id="inputRegistration" placeholder='Registration' name="NGOregd" value={details.NGOregd} onChange={handleChange} />
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="inputOccupation" className="form-label fs-4">Sectors working in</label>
                                            <input type="text" className={`form-control ${styles2.inputac}`} id="inputOccupation" name="NGOsector" value={details.NGOsector} onChange={handleChange} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="inputCity" className="form-label fs-4">City</label>
                                            <input type="text" className={`form-control ${styles2.inputac}`} id="inputCity" name="NGOcity" value={details.NGOcity} onChange={handleChange} />
                                        </div>

                                        <div className="col-6 mt-3">
                                            <label htmlFor="inputState" className="form-label fs-4">State</label>
                                            <select id="inputState" className={`form-select ${styles2.inputac}`} name="NGOstate" value={details.NGOstate} onChange={handleChange}>
                                                <option></option>
                                                <option>Odisha</option>
                                                <option>West Bengal</option>
                                                <option>Maharashtra</option>
                                                <option>Madhya Prades</option>
                                                <option>Andhra Pradesh</option>
                                                <option>Chhattisgarh</option>
                                                <option>Gujurat</option>
                                                <option>Punjab</option>
                                                <option>Kerala</option>
                                                <option>Jammu and Kashmir</option>
                                                <option>Himachal Pradesh</option>
                                                <option>Meghalaya</option>
                                                <option>Mizoram</option>
                                                <option>Tripura</option>
                                                <option>Assam</option>
                                                <option>Arunachal Pradesh</option>
                                                <option>Sikkim</option>
                                                <option>Nagaland</option>
                                                <option>Karnataka</option>
                                                <option>Telangana</option>
                                                <option>Tamil Nadu</option>
                                                <option>Uttar Pradesh</option>
                                                <option>Uttarakhand</option>
                                                <option>Bihar</option>
                                                <option>Jharkhand</option>
                                                <option>Manipur</option>
                                                <option>Goa</option>
                                                <option>Rajasthan</option>
                                                <option>Haryana</option>
                                                <option>Delhi</option>
                                                <option>Puducherry</option>
                                                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                                <option>Andaman and Nicobar Islands</option>
                                                <option>Lakshadweep</option>
                                                <option>Ladakh</option>
                                            </select>
                                        </div>

                                        <div className="col-6 mt-3">
                                            <label htmlFor="inputZip" className="form-label fs-4 ">Pin Code</label>
                                            <input type="text" className={`form-control ${styles2.inputac}`} maxLength="6" id="inputZip" name="NGOpin" value={details.NGOpin} onChange={handleChange} />
                                        </div>

                                    </div>

                                </div>
                                <div className="col-6">
                                    <div><label htmlFor="inputAddress" className="form-label fs-4">Address</label>
                                        <textarea type="text" className={`form-control ${styles2.inputac} h-100`} id="inputAddress"
                                            placeholder="1234 Main St.." name="NGOaddress" value={details.NGOaddress} onChange={handleChange}></textarea>
                                    </div>

                                </div>
                                <div className="col-6">
                                    <div>
                                        <label htmlFor="inputAbout" className="form-label fs-4">About</label>
                                        <textarea type="text" className={`form-control ${styles2.inputac} h-100`} id="inputAddress"
                                            placeholder="I am interested in helping.." name="NGOvision" value={details.NGOvision} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div><label htmlFor="inputAchievements" className="form-label fs-4">Achievements</label>
                                        <textarea type="text" className={`form-control ${styles2.inputac} h-100`} id="inputAchievements"
                                            placeholder="We have been felicitated.." name="NGOachiv" value={details.NGOachiv} onChange={handleChange}></textarea>
                                    </div>

                                </div>
                                <div className="mt-5 m-4 mb-3 ">
                                    <div className="col-12 d-flex align-items-center justify-content-center">
                                        <button type="submit" className={`btn btn-primary ${styles2.btna} `}>{hasNGO?"Update":"Submit"}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ngodetails