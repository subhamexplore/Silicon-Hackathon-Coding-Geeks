import Link from 'next/link'
import React from 'react'
import styles from '../styles/Footer.module.css'
import {BsFacebook, BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs'

const Footer = () => {
    return (
    <>
        <section className={styles.footer}>
        <div className="row">
          <div className={` col-lg-6 container-fluid`}>
            <h5 className={`${styles.foothead}`}><strong>Join HeartRaiser</strong></h5><br/>
            <p className={`${styles.dr} fs-6`}>Donate, raise for a noble cause</p>
            <Link href='/signup'><button type="button" className={`btn btn-dark btn-lg ${styles.join}`}>Join us</button></Link>
          </div>
          <div className="footm col-lg-6 container-fluid">
            <div className="row">
              <div className="Zairza col-lg-3 col-md-3 col-sm-3">
                <h5 className={`${styles.foothead}`}><strong>HeartRaiser</strong></h5>
                <ul className={styles.z}>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/login">Login</Link></li>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/signup">Join the Family</Link></li>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/profile">Profile</Link></li>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/donate">Events</Link></li>
                </ul>
              </div>
              <div className="Services col-lg-3 col-md-3 col-sm-3">
                <h5 className={`${styles.foothead}`}><strong>Services</strong></h5>
                <ul className={styles.z}>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/donate">Donate</Link></li>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/raise">Raise</Link></li>
                </ul >
              </div >
              <div className="Help col-lg-3 col-md-3 col-sm-3">
                <h5 className={`${styles.foothead}`}><strong>Help</strong></h5>
                <ul className={styles.z}>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/">How to join</Link></li>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/">Mentors</Link></li>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/">Contact us</Link></li>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/">FAQ's</Link></li>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/">Core Team</Link></li>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/">Feedback</Link></li>
                </ul >
              </div >
              <div className="About Zairza col-lg-3 col-md-3 col-sm-3">
                <h5 className={`${styles.foothead}`}><strong>About Us</strong></h5>
                <ul className={styles.z}>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/">About Us</Link></li>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/">Founders</Link></li>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/">Recognitions</Link></li>
                  <li className={`${styles.flist}${styles.zli}`}><Link className={`${styles.navlink}`} href="/">Location</Link></li>
                </ul >
              </div >
            </div >
          </div >
        </div >
        <div className="logos">
          <Link href="https://www.facebook.com/"><BsFacebook className={`fs-2 mx-3 ${styles.i}`}></BsFacebook></Link>
          <Link href="https://www.instagram.com/"><BsInstagram className={`fs-2 mx-3 ${styles.i}`}></BsInstagram></Link>
          <Link href="https://www.youtube.com/"><BsTwitter className={`fs-2 mx-3 ${styles.i}`}></BsTwitter></Link>
          <Link href="https://www.twitter.com/"><BsYoutube className={`fs-2 mx-3 ${styles.i}`}></BsYoutube></Link>
        </div><br/>
        <hr/>
        <div className={styles.lastt}>
          <div className="row container-fluid6">
            <div className="col-lg-6">
              <p className={`${styles.footfoot}`}><span>@</span><span className={`${styles.hert}`}>Heart</span><span>Raiser 2023</span></p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div id="lasth" className="col-md-3">
                  <p className={`${styles.footfoot}`}>Terms & Conditions</p>
                </div>
                <div id="lasth" className="col-md-3">
                  <p className={`${styles.footfoot}`}>Settings</p>
                </div>
                <div id="lasth" className="col-md-3">
                  <p className={`${styles.footfoot}`}>Cookie Policy</p>
                </div>
                <div id="lasth" className="col-md-3">
                  <p className={`${styles.footfoot}`}>Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer