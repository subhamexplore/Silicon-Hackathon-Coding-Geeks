import React from 'react'
import styles from "../styles/Profile.module.css"
import {AiFillHeart} from "react-icons/ai"

const profile = () => {
    return (
        <>
            <div className={`row  ${styles.boddy} py-5`}>
                <div className={`col-lg-3 col-md-4 `}>
                    <div className={`${styles.acclsidecont} sticky p-2`}>
                        <div className="m-3 d-flex justify-content-center">
                            <img src="./pexels-lukas-628241.jpg" className={`${styles.accig} img-thumbnail`} alt="..." />
                        </div>
                        <div className={`${styles.acclside} my-3 `}>
                            <div className="d-flex align-items-center justify-content-center p-2">Dashboard</div>
                        </div>
                        <div className={`${styles.acclside} my-3 `}>
                            <div className="d-flex align-items-center justify-content-center p-2">Account Details</div>
                        </div>
                        <div className={`${styles.acclside} my-3`}>
                            <div className="d-flex align-items-center justify-content-center p-2">Bank Details</div>
                        </div>
                        <div className={`${styles.acclside} my-3 `}>
                            <div className="d-flex align-items-center justify-content-center p-2">N.G.O Details</div>
                        </div>
                        <div className={`${styles.acclside} my-3`}>
                            <div className="d-flex align-items-center justify-content-center p-2">LOG OUT</div>
                        </div>
                    </div>
                </div>
                
                <div className={`${styles.leftborder} col-lg-9 col-md-8`}>
                    <div className={`${styles.profilespace}`}></div>
                    <div className={`${styles.picborder}`}></div>
                    <div className={` d-flex flex-column align-items-left justify-content-left`}>
                        <img src="./pexels-lukas-628241.jpg" className={`img-thumbnail ${styles.accig1}`} alt="..." />
                    </div>
                    <div className="row">
                        <div className={`${styles.data} col-7`}>

                            <div className="fs-1">
                                ABHIJEET SAHU
                            </div>
                            <div className="fs-4">
                                <span>Student</span><span className="mx-3">20 years</span>
                            </div>
                        </div>
                        <div className={`${styles.ngobox} col-5`}>
                            {/* <div className={'d-flex justify-content-end m-0 p-0'}>
                                <div className={`${styles.plusbutton}`}>
                                    <button type="submit" className={`${styles.plus} h-100 w-100 btn fs-2`}>+</button>
                                </div>
                            </div>
                            <div className={` d-flex justify-content-center align-items-center`}>
                                <div className=" fs-2"> Add Your N.G.O.</div>
                            </div> */}
                            <div className="d-flex">
                                    <div className={`m-3 ${styles.ngoimg} d-flex justify-content-center align-items-center`}>
                                    <img className={` img-thumbnail card-img-top`} src="logo.png" alt="Card image cap"/>
                                    </div>
                                    <div  className="fs-3 d-flex justify-content-center align-items-center">
                                Foundation of Global Odia Diasporia
                            </div>
                            </div>


                        </div>
                        <div className={`${styles.donatebox} col-lg-6 `}>
                        <div className={`${styles.cornerheart}`}><AiFillHeart></AiFillHeart></div>
                            <div className='fs-1 text-black mb-5  d-flex justify-content-center align-items-center'>Your Donations</div>
                            <div className='row'>
                                <div className='col-12 d-flex justify-content-center align-items-end'>
                                    <div className={`${styles.donatecard} card m-3 mb-5`} >
                                        <img className="card-img-top" src="logo.png" alt="Card image cap"/>
                                            <div className={`${styles.donatecardbody} card-body`}>
                                                <div className="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                                                <div className="fs-4">Amount donated: <span className=''><span>&#8377;</span><span>2,000</span></span></div>
                                            </div>
                                    </div>
                                    <div className={`${styles.donatecard} card m-3 mb-5`} >
                                        <img className="card-img-top" src="logo.png" alt="Card image cap"/>
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
                                        <img className="card-img-top" src="logo.png" alt="Card image cap"/>
                                            <div className={`${styles.issuecardbody} card-body`}>
                                                <div className="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                                                <div className="fs-4">Amount donated: <span className=''><span>&#8377;</span><span>2,000</span></span></div>
                                            </div>
                                    </div>
                                    <div className={`${styles.issuecard} card m-3 mb-5`} >
                                        <img className="card-img-top" src="logo.png" alt="Card image cap"/>
                                            <div className={`${styles.issuecardbody} card-body`}>
                                                <div className="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                                                <div className="fs-4">Amount donated: <span className=''><span>&#8377;</span><span>2,000</span></span></div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default profile