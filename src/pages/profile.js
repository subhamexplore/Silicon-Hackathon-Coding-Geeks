import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from "../styles/Profile.module.css"
import { AiFillHeart } from "react-icons/ai"
import Accountdetails from '@/components/accountdetails';
import Ngodetails from '@/components/ngodetails';

const profile = () => {
    const router = useRouter();
    const [sidenav, setSidenav] = useState(0);
    const [hasUserDetails, sethasUserDetails] = useState(false);
    const [hasNGODetails, sethasNGODetails] = useState(false);
    const handleSidenav = (no) => {
        setSidenav(no);
    }
    const logout = () => {
        localStorage.removeItem('token');
        router.push('/');
    }
    const changeBackground = () => {
        const crypto = require('crypto').randomBytes(4).toString('hex');
        console.log(crypto)
        document.documentElement.style.setProperty('--backColor', `#${crypto}`);
    }
    const userdetails = 
        {
            username : "Subham Parida",
            email : "subham@gmail.com",
            occupation : "Student",
            age : "12",
            city : "asasasa",
            state : "Odisha",
            pincode : "1212121",
            about : "sasasasa2121212asasas",
            AccountHolder : "subham parida",
            AccountNumber : "12",
            IFSCcode : "sdaasdasda",
            NGOname : "",
            NGOregd  : "",
            NGOvision : "",
            NGOachiv : "",
            NGOsector : ""
        }
    const loggedIn = {
        username : "Subham Parida",
        email : "subham@gmail.com"
    }
    useEffect(
        ()=>{
            changeBackground();
        },[]
    )
    return (
        <>
            <div className={`row  ${styles.boddy} py-5`}>
                <div className={`col-lg-3 col-md-4 `}>
                    <div className={`${styles.acclsidecont} p-2 mx-auto`}>
                        <div className="mx-3 my-5 d-flex justify-content-center">
                            <img src="/pexels-lukas-628241.jpg" className={`${styles.accig} img-thumbnail`} alt="..." />
                        </div>
                        <div className={`${styles.acclside} mb-2`}>
                            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => { handleSidenav(0) }}>Dashboard</div>
                        </div>
                        <div className={`${styles.acclside}  mb-2`}>
                            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => { handleSidenav(1) }}>Account Details</div>
                        </div>
                        <div className={`${styles.acclside} mb-2`}>
                            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => { handleSidenav(2) }}>N.G.O Details</div>
                        </div>
                        <div className={`fixed-bottom mb-5`}>
                            <div className="d-flex align-items-center justify-content-center p-2" onClick={logout}><button type="submit" className={`btn ${styles.btnl} px-2 `}>Logout</button></div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.leftborder} col-lg-9 col-md-8`}>
                    {sidenav == 0 && <>
                        <div className={`${styles.profilespace}`}></div>
                        <div className={`${styles.picborder}`}></div>
                        <div className={` d-flex flex-column align-items-left justify-content-left`}>
                            <img src="/pexels-lukas-628241.jpg" className={`img-thumbnail ${styles.accig1}`} alt="..." />
                        </div>
                        <div className="row">
                            <div className={`${styles.data} col-7`}>
                                <div className={`${styles.title} fs-1`}>
                                    {hasUserDetails? userdetails.username : loggedIn.username}
                                </div>
                                <div className="fs-4">
                                    <span>{hasUserDetails? "" : userdetails.occupation}</span><span className="mx-3">{hasUserDetails? "" :userdetails.age}</span>
                                </div>
                                <div className="fs-5">
                                    <span>{hasUserDetails? "" : userdetails.about}</span>
                                </div>
                            </div>
                            <div className={`${styles.ngobox} col-5`}>
                                {hasNGODetails ? <>
                                <div className="d-flex">
                                    <div className={`m-3 ${styles.ngoimg} d-flex justify-content-center align-items-center`}>
                                        <img className={` img-thumbnail card-img-top`} src="/logo.png" alt="Card image cap" />
                                    </div>
                                    <div className="fs-3 d-flex justify-content-center align-items-center">
                                        Foundation of Global Odia Diasporia
                                    </div>
                                </div>
                                </>
                                :
                                <><div className={'d-flex justify-content-end m-0 p-0'}>
                                    <div className={`${styles.plusbutton}`}>
                                        <button type="submit" className={`${styles.plus} h-100 w-100 btn fs-2`}>+</button>
                                    </div>
                                </div>
                                <div className={` d-flex justify-content-center align-items-center`}>
                                    <div className=" fs-2"> Add Your N.G.O.</div>
                                </div>
                            </>}


                            </div>
                            <div className={`${styles.donatebox} col-lg-6 `}>
                                <div className={`${styles.cornerheart}`}><AiFillHeart></AiFillHeart></div>
                                <div className='fs-1 text-black mb-5  d-flex justify-content-center align-items-center'>Your Donations</div>
                                <div className='row'>
                                    <div className='col-12 d-flex justify-content-center align-items-end'>
                                        <div className={`${styles.donatecard} card m-3 mb-5`} >
                                            <img className="card-img-top" src="/logo.png" alt="Card image cap" />
                                            <div className={`${styles.donatecardbody} card-body`}>
                                                <div className="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                                                <div className="fs-4">Amount donated: <span className=''><span>&#8377;</span><span>2,000</span></span></div>
                                            </div>
                                        </div>
                                        <div className={`${styles.donatecard} card m-3 mb-5`} >
                                            <img className="card-img-top" src="/logo.png" alt="Card image cap" />
                                            <div className={`${styles.donatecardbody} card-body`}>
                                                <div className="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                                                <div className="fs-4">Amount donated: <span className=''><span>&#8377;</span><span>2,000</span></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.issuebox} col-lg-6 `}>
                                <div className='fs-1 text-black mb-5  d-flex justify-content-center align-items-center'>Your Raises</div>
                                <div className='row'>
                                    <div className='col-lg-12 d-flex justify-content-center align-items-end'>
                                        <div className={`${styles.issuecard} card m-3 mb-5`} >
                                            <img className="card-img-top" src="/logo.png" alt="Card image cap" />
                                            <div className={`${styles.issuecardbody} card-body`}>
                                                <div className="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                                                <div className="fs-4">Amount donated: <span className=''><span>&#8377;</span><span>2,000</span></span></div>
                                            </div>
                                        </div>
                                        <div className={`${styles.issuecard} card m-3 mb-5`} >
                                            <img className="card-img-top" src="/logo.png" alt="Card image cap" />
                                            <div className={`${styles.issuecardbody} card-body`}>
                                                <div className="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                                                <div className="fs-4">Amount donated: <span className=''><span>&#8377;</span><span>2,000</span></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
                    {sidenav == 1 && <Accountdetails />}
                    {sidenav == 2 && <Ngodetails />}
                </div>
            </div>
        </>
    )
}

export default profile