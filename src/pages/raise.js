import React from 'react'
import styles from "../styles/Raise.module.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Raise = () => {
  return (
    <><br /><br />
      <Card className={`${styles.per}`} style={{ width: '21rem' }}>
        <Card.Body>
          <Card.Title className='fs-3 mx-4 mt-3'>Contact Information</Card.Title> <br />
          <form action="">
            <div className='ms-3'>
              <label className={`${styles.textt} mb-1`} htmlFor=""><span>Name<span className={`${styles.mand}`}>*</span></span></label><br />
              <input className={`${styles.labelL}`} type="text" placeholder='Name' /><br /><br />
              <label className={`${styles.textt} mb-1`} htmlFor=""><span>Email<span className={`${styles.mand}`}>*</span></span></label><br />
              <input className={`${styles.labelL}`} type="email" placeholder='Email' /><br /><br />
              <label className={`${styles.textt} mb-1`} htmlFor=""><span>Mobile<span className={`${styles.mand}`}>*</span></span></label><br />
              <input className={`${styles.labelL}`} type="number" placeholder='Mobile' />
            </div>
          </form><br /><br />
          <div className={`${styles.startbtn} mb-3`}><Button variant="success">Start a Fundraiser</Button>{' '}</div>
        </Card.Body>
      </Card><br />
      <div className={`${styles.form}`}>
        <div className="row">
          <div className={`${styles.leftt} col-lg-6`}>
            <Card.Body>
              <Card.Title className='fs-3 mb-3'>Beneficiary Information</Card.Title>
              <form action="">
                <label className={`${styles.textt}`} htmlFor="">I am raising funds for</label><br />
                <select className={`${styles.drop}`} name="" id="">
                  <option value="" disabled>Cause</option>
                  <option value="">Medical Cause</option>
                  <option value="">Personal Cause</option>
                  <option value="">Other Cause</option>
                </select><br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="">Whom are you raising funds for? (Relation)</label><br />
                <select className={`${styles.drop}`} name="" id="place">
                  <option value="" disabled>Select</option>
                  <option value="">Self</option>
                  <option value="" disabled className={`${styles.grey}`}>Parent</option>
                  <option value="">Father</option>
                  <option value="">Mother</option>
                  <option value="">Grandfather</option>
                  <option value="">Grandmother</option>
                  <option value="" disabled className={`${styles.grey}`}>Spouce</option>
                  <option value="">Husband</option>
                  <option value="">Wife</option>
                  <option value="" disabled className={`${styles.grey}`}>Child</option>
                  <option value="">Son</option>
                  <option value="">Daughter</option>
                  <option value="">Twins</option>
                  <option value="">Grandson</option>
                  <option value="">Granddaughter</option>
                  <option value="" disabled className={`${styles.grey}`}>Sibling</option>
                  <option value="">Brother</option>
                  <option value="">Sister</option>
                  <option value="" disabled className={`${styles.grey}`}>Other</option>
                  <option value="">Friend</option>
                  <option value="">Friend's Family</option>
                  <option value="">Cousin</option>
                  <option value="">Uncle</option>
                  <option value="">Aunt</option>
                  <option value="">Nephew</option>
                  <option value="">Niece</option>
                  <option value="">Colleague</option>
                  <option value="">Relative</option>
                  <option value="">Legal ward</option>
                  <option value="">Other</option>
                </select><br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="">What is the issue?</label><br />
                <input className={`${styles.drop}`} type="text" placeholder='Enter the Issue' />
                <br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="">Patient's Name</label><br />
                <input className={`${styles.drop}`} type="text" placeholder='Enter the Name' />
                <br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="">Hospital Name</label><br />
                <input className={`${styles.drop}`} type="text" placeholder='Which Hospital' />
                <br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="">Location</label><br />
                <input className={`${styles.drop}`} type="text" placeholder='City' />
              </form>

            </Card.Body>
          </div>
          <div className={`${styles.rightt} col-lg-6`}>
            <Card.Body>
              <Card.Title className='fs-3 mb-3'>Fundraiser Details</Card.Title>
              <form action="">
                <label className={`${styles.textt} mb-2`} htmlFor="">How much do you want to raise?</label><br />
                <input className={`${styles.drop}`} type="number" placeholder='Amount' /><br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="">Due date</label><br />
                <input className={`${styles.drop}`} type="date" placeholder='' /><br /><br />
                <label className={`${styles.textt} mb-2`} htmlFor="">Enter the medical documents</label><br />
                <div className={`${styles.file}`}><input type="file" /></div>
              </form><br />
              <Card.Title className={`fs-3`}>Tell Us Why</Card.Title>
              <input type="text" className={`${styles.dropp} mt-2`} placeholder='Fundraiser Name' /><br /><br />
              <textarea className={`${styles.comment}`} name="" id="comment" placeholder="Tell us why are you running this Fundraiser..."
              ></textarea><br />
              <label className={`${styles.textt} mb-2`} htmlFor="">Upload Photos/Videos</label><br />
              <div className={`${styles.file}`}><input type="file" /></div>
            </Card.Body>
          </div>
        </div>
        <div className="d-grid gap-2">
          <Button variant="success mt-5" size="lg">
            SUBMIT
          </Button>
        </div>
      </div><br /><br />

    </>
  )
}

export default Raise