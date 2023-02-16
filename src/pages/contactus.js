import React from 'react'
import styles from '../styles/Contact.module.css'
import Card from 'react-bootstrap/Card';
import {IoCall} from 'react-icons/io'
const contactus = () => {
  return (
    <>
    <div>contactus</div>

      <div className={`${styles.back} d-flex justify-content-center`}>
      <div className={`${styles.backcont}`}>
      <p className={`${styles.cont}`}>Contact Us</p>
      <p className={`${styles.us}`}>Already use HeartRaiser? <a className={`${styles.a}`} href="">Sign in </a> so we can tailor your support experience.</p><p className={`${styles.us}`}> If that’s not possible, we’d still like to hear from you.</p>
      </div>
   </div>
    <div className={`${styles.details}`}>
    <Card className={`${styles.cardus} mx-auto`}>
      <Card.Body>
        <Card.Title>What can we help you with?</Card.Title>
        <input className={`${styles.ibox} mb-4`} type="text" placeholder='Enter a topic' />
        <Card.Title>Your Name</Card.Title>
        <input className={`${styles.ibox} mb-4`} type="text" placeholder='Enter your name' />
        <Card.Title>Your email address</Card.Title>
        <input className={`${styles.ibox} mb-4`} type="text" placeholder='You@example.com' />
        <Card.Title>Your contact number</Card.Title>
        <input className={`${styles.ibox} mb-4`} type="text" placeholder='Enter your number' />
        <Card.Title>Details</Card.Title>
        <textarea className={`${styles.det} mb-4`} name="" id="" cols="30" rows="10" placeholder="Please write your question or a description of the problem you're trying to solve here."></textarea><br />
        <div className={`${styles.btnn}`}><input className={`${styles.ibtn} fs-4`} type="submit" /></div>
      </Card.Body>
    </Card>
    </div><br />
    <div className={`${styles.down} row`}>
      <div className={`${styles.ll} col-lg-6 d-flex align-items-center justify-content-center`}>
        <img className={`${styles.loggg} my-5 mx-4`} src="/Vectorcal.png" alt="" />
        <div className='my-5'>
          <p>Call us directly at</p>
          <p>+91-9443875824</p>
          <a className={`${styles.a}`} href="">see all numbers and locations</a>
        </div>
      </div>
      <div className={`${styles.rr} col-lg-6 d-flex align-items-center justify-content-center`}>
        <img className={`${styles.loggg} my-5 mx-4`} src="/Vectorchat.png" alt="" />
        <div className='my-5'>
          <p>Chat with our team</p>
          <button className={`${styles.chats}`}>CHAT WITH US</button>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default contactus