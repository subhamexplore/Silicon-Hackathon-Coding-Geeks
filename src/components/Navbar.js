import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { RiLoginBoxFill } from 'react-icons/ri'

const Navbar = ({ userToken }) => {
    const [b, setB] = useState(false)
    const change = () => {
        setB((prev) => {
            return !prev
        })
    }
    return (
        <>

            <section className="headerrr">
                <div className={styles.header}>
                    <div className={styles.roww}>
                        <div className={`${styles.logo} mt-3`}>
                            <Link className="navbar-brand" href="/"><img className={`${styles.log}`} src="/finalogo.png" alt="logo" /></Link>
                            {b && <div className={`navbarSupportedContent mr-1`}>
                                <ul className="topnav navbar-nav">
                                    <li className={`${styles.li} nav-item`}>
                                        <Link href="/" legacyBehavior={true}><a className="nav-link" aria-current="page" >Home</a></Link>
                                    </li>
                                    <li className={`${styles.li} nav-item`}>
                                        <Link href="/donate" legacyBehavior={true}><a className={`nav-link`}><p className={`${styles.donatee}`}>Donate</p></a></Link>
                                    </li>
                                    <li className={`${styles.li} nav-item`}>
                                        <Link href="/raise" legacyBehavior={true}><a className="nav-link">Raise</a></Link>
                                    </li>
                                </ul>
                                <ul className="navbar-nav mx-auto me-5">
                                    <li className={`${styles.li} nav-item`}>
                                        <Link href="/contactus" className="nav-link">Contact Us <BsFillTelephoneFill
                                            className={`${styles.call}`}></BsFillTelephoneFill></Link>
                                    </li>
                                </ul>
                            </div>}
                        </div>
                        <nav className={`${styles.logoo} navbar navbar-expand-lg`}>
                            <div className="container-fluid">

                                <button id="burger" className={b ? `${styles.burger} navbar-toggler` : ` navbar-toggler`} type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation" onClick={change}>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className={`collapse navbar-collapse ${styles.navbarSupportedContent}`}>
                                    {!b && <>
                                        <ul className="topnav navbar-nav">
                                            <li className={`${styles.li} nav-item`}>
                                                <Link href="/" className={`${styles.li} nav-link`} >Home</Link>
                                            </li>
                                            <li className={`${styles.li} nav-item`}>
                                                <Link href="/donate" className={`${styles.li} ${styles.lii} nav-link`}>Donate</Link>
                                            </li>
                                            <li className={`${styles.li} nav-item`}>
                                                <Link href="/raise" className={`${styles.li} nav-link`}>Raise</Link>
                                            </li>
                                        </ul>
                                        <ul className="navbar-nav mx-auto me-5">
                                            <li className={`${styles.li} nav-item`}>
                                                <Link className={`${styles.li} nav-link`} href="/contactus">Contact Us <BsFillTelephoneFill
                                                    className={`${styles.call} `}></BsFillTelephoneFill></Link>
                                            </li>
                                        </ul></>}
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className={`${styles.profile} `}>{userToken.value ? <Link href="/profile"><FaUserAlt className={`${styles.pro}`}></FaUserAlt></Link> : <Link href="/login"><RiLoginBoxFill className={`${styles.pro}`}></RiLoginBoxFill></Link>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar