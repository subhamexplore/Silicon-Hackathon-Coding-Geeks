import React from 'react'
import Link from 'next/link'
import styles from '../styles/Donate.module.css'
import { GiHealthNormal } from "react-icons/gi"
import { ImBooks } from "react-icons/im" 
import { FaEnvira } from "react-icons/fa" 
import { FaDog } from "react-icons/fa" 
import { CgCommunity } from "react-icons/cg" 
import { BsThreeDots } from "react-icons/bs" 


const Donate = () => {
    const sample = [
        {
            _id: 1,
            raiser: "dev ashrit",
            title: "Need help for subham",
            category: "environment",
            slug: "need-help-for-subham",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ullam in? Laborum quas provident libero! Esse illum reiciendis numquam est.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
            amount: 12122,
            validTill: 5,
        },
        {
            _id: 2,
            raiser: "charizard",
            title: "Need help for abhijeet",
            category: "health",
            slug: "need-help-for-abhijeet",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ullam in? Laborum quas provident libero! Esse illum reiciendis numquam est.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
            amount: 434343,
            validTill: 20,
        },
        {
            _id: 3,
            raiser: "bulbasaur",
            title: "Need help for paras",
            category: "wildlife",
            slug: "need-help-for-paras",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ullam in? Laborum quas provident libero! Esse illum reiciendis numquam est.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
            amount: 127772,
            validTill: 50,
        },
        {
            _id: 4,
            raiser: "venasaur",
            title: "Need help for louda",
            category: "education",
            slug: "need-help-for-louda",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ullam in? Laborum quas provident lsasasaro! Esse illum reiciendis numquam est.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
            amount: 12772,
            validTill: 10,
        },
        {
            _id: 5,
            raiser: "pikachu",
            title: "Need help for bc",
            category: "environment",
            slug: "need-help-for-bc",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ullam in? Laborum quas provident libero! Esse illum reiciendis numquam est.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
            amount: 12777,
            validTill: 50,
        }
    ]
    return (
        <>
            <div className={`${styles.boxcatu}container text-center mt-5`}>
                <div className={`row align-items-start ${styles.boxcat}`}>
                    <div className="col m-1">
                        <div className="d-flex justify-content-center">
                            <div className={`${styles.circlecat} d-flex justify-content-center`}>
                                <div className={`${styles.caticon}`}><GiHealthNormal></GiHealthNormal></div>
                            </div>
                        </div>
                        <div>Health</div>
                    </div>
                    <div className="col m-1">
                    <div className="d-flex justify-content-center">
                            <div className={`${styles.circlecat} d-flex justify-content-center`}>
                                <div className={`${styles.caticon}`}><ImBooks></ImBooks></div>
                            </div>
                        </div>
                        <div>Education</div>
                    </div>
                    <div className="col m-1">
                        <div className="d-flex justify-content-center">
                        <div className="d-flex justify-content-center">
                            <div className={`${styles.circlecat} d-flex justify-content-center`}>
                                <div className={`${styles.caticon}`}><FaEnvira></FaEnvira></div>
                            </div>
                        </div>
                        </div>
                        <div>Environment</div>
                    </div>
                    <div className="col m-1">
                        <div className="d-flex justify-content-center">
                        <div className="d-flex justify-content-center">
                            <div className={`${styles.circlecat} d-flex justify-content-center`}>
                                <div className={`${styles.caticon}`}><FaDog></FaDog></div>
                            </div>
                        </div>
                        </div>
                        <div>Wildlife</div>
                    </div>
                    <div className="col m-1">
                        <div className="d-flex justify-content-center">
                        <div className="d-flex justify-content-center">
                            <div className={`${styles.circlecat} d-flex justify-content-center`}>
                                <div className={`${styles.caticon}`}><CgCommunity></CgCommunity></div>
                            </div>
                        </div>
                        </div>
                        <div>Community</div>
                    </div>
                    <div className="col m-1">
                        <div className="d-flex justify-content-center">
                        <div className="d-flex justify-content-center">
                            <div className={`${styles.circlecat} d-flex justify-content-center`}>
                                <div className={`${styles.caticon}`}>< BsThreeDots></ BsThreeDots></div>
                            </div>
                        </div>
                        </div>
                        <div>Others</div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={`${styles.cent}`}>
                            <div className={`${styles.card} card`}>
                                <img src="logo.png" className={`${styles.cardimgtop} rounded card-img-top`} alt="..." />
                                <div className={`${styles.cardbody} card-body m-2 p-2`}>
                                    <h5 className="card-title">Support Underprivileged scholars for education #MakeIndiaEmployable</h5>
                                    <div className={`${styles.acardq} d-flex align-items-start`}>By:Abhijeet</div>
                                    <div className={`${styles.acardq} d-flex align-items-start`}>Last date:Indefinite</div>
                                    <div className="row">
                                        <div className="col col-4">
                                            <div className="skill">
                                                <div className={`${styles.outer} d-flex align-items-center justify-content-center`}>
                                                    <div className={`${styles.inner} d-flex align-items-center justify-content-center`}>
                                                        <div className={`${styles.number}`}>
                                                            65%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-8">'
                                            <div>Raised:</div>
                                            <div><span className="fs-4 fw-bold"><span>&#8377;</span><span>2,00,000</span></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={`${styles.cent}`}>
                            <div className={`${styles.card} card`}>
                                <img src="logo.png" className={`${styles.cardimgtop} rounded card-img-top`} alt="..." />
                                <div className={`${styles.cardbody} card-body m-2 p-2`}>
                                    <h5 className="card-title">Support Underprivileged scholars for education #MakeIndiaEmployable</h5>
                                    <div className={`${styles.acardq} d-flex align-items-start`}>By:Abhijeet</div>
                                    <div className={`${styles.acardq} d-flex align-items-start`}>Last date:Indefinite</div>
                                    <div className="row">
                                        <div className="col col-4">
                                            <div className="skill">
                                                <div className={`${styles.outer} d-flex align-items-center justify-content-center`}>
                                                    <div className={`${styles.inner} d-flex align-items-center justify-content-center`}>
                                                        <div className={`${styles.number}`}>
                                                            65%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-8">'
                                            <div>Raised:</div>
                                            <div><span className="fs-4 fw-bold"><span>&#8377;</span><span>2,00,000</span></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={`${styles.cent}`}>
                            <div className={`${styles.card} card`}>
                                <img src="logo.png" className={`${styles.cardimgtop} rounded card-img-top`} alt="..." />
                                <div className={`${styles.cardbody} card-body m-2 p-2`}>
                                    <h5 className="card-title">Support Underprivileged scholars for education #MakeIndiaEmployable</h5>
                                    <div className={`${styles.acardq} d-flex align-items-start`}>By:Abhijeet</div>
                                    <div className={`${styles.acardq} d-flex align-items-start`}>Last date:Indefinite</div>
                                    <div className="row">
                                        <div className="col col-4">
                                            <div className="skill">
                                                <div className={`${styles.outer} d-flex align-items-center justify-content-center`}>
                                                    <div className={`${styles.inner} d-flex align-items-center justify-content-center`}>
                                                        <div className={`${styles.number}`}>
                                                            65%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-8">'
                                            <div>Raised:</div>
                                            <div><span className="fs-4 fw-bold"><span>&#8377;</span><span>2,00,000</span></span></div>
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

export default Donate