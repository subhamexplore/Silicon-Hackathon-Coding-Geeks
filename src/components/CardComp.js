import React from 'react'
import styles from '../styles/Donate.module.css'

const CardComp = () => {
    return (
        <>
            <div className="col col-sm-12 col-md-6 col-lg-4">
                <div className={`${styles.cent}`}>
                    <div className={`${styles.card} card`}>
                        <img src={item.img} className={`${styles.cardimgtop} rounded card-img-top`} alt="..." />
                        <div className={`${styles.cardbody} card-body m-2 p-2`}>
                            <h5 className="card-title">{item.title}</h5>
                            <div className={`${styles.acardq} d-flex align-items-start`}>By : {item.user}</div>
                            <div className={`${styles.acardq} d-flex align-items-start`} > days left</div>
                            <div className="row">
                                <div className="col col-4">
                                    <div className="skill">
                                        <div className={`${styles.outer} d-flex align-items-center justify-content-center`}>
                                            <div className={`${styles.inner} d-flex align-items-center justify-content-center`}>
                                                <div className={`${styles.number}`}>
                                                    {Math.floor((item.amountRaised / item.amount) * 100)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-8">'
                                    <div>Raised:</div>
                                    <div><span className="fs-4 fw-bold"><span>&#8377;</span><span>{item.amountRaised}</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardComp