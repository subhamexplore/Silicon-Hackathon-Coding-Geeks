import React from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/IndividualIssue.module.css"
import { AiFillAlert } from "react-icons/ai"
import { SiWhatsapp } from "react-icons/si"
import { RiFacebookFill } from "react-icons/ri"
import { BiDonateHeart } from "react-icons/bi"
import { AiFillHeart } from "react-icons/ai"
import { HiDocumentText } from "react-icons/hi"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Issue = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      {/* <h1>Om<AiFillAlert className="fs-5"></AiFillAlert></h1> */}

      <div className="row">
        <div className="left col-lg-3 me-5">
          <Carousel className={`${styles.pics} mt-5`}>
            <Carousel.Item interval={1000}>
              <img
                className={`${styles.pic} d-block w-100`}
                src="/crr.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className={`${styles.pic} d-block w-100`}
                src="/crr.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className={`${styles.pic} d-block w-100`}
                src="/crr.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className={`${styles.rise}`}>
            <div>
              <div className={`${styles.progress} my-4`}>
                <div className={`${styles.outer}`}>
                  <div className={`${styles.inner}`}>21%</div>
                </div>

                <div className={`${styles.raised} my-3 mx-2`}>
                  <h5>Raised</h5>
                  <span><span><span className={`${styles.value}`}>Rs.3,60,09,880</span> of Rs.17,50,00,000</span></span>
                </div>
              </div>
              <Button className="ms-5" variant="success"><SiWhatsapp></SiWhatsapp> Success</Button>{' '}
              <Button className="ms-3" variant="primary"><RiFacebookFill></RiFacebookFill> Primary</Button>{' '}
            </div>
          </div>
        </div>

        <div className="col-lg-8 mt-5 ms-3">
          <div className="row">
            <div className={`${styles.desc} col-lg-8`}>
              <div className={`${styles.h} mt-5`}>
                <h3>Help My Son Recover From SMA Type 2</h3>
                <Button className='mt-2 mb-3' variant="danger"><HiDocumentText className='fs-4 mb-1'></HiDocumentText>View Documents</Button>{' '}
              </div>
              <p>Help save Baby Nirvaan

                I am writing to you with folded hands, asking for your help in supporting our special little boy Nirvaan, born on October 2021. Nirvaan was born with a birth defect - Congenital scoliosis which is a spinal deformity in which babies are born with a sideways curvature of the spine. While this news broke our hearts but our regular interactions with doctors and experts gave us confidence that we can get this treated and ensure Nirvaan leads a normal life through surgical treatment by implanting growing rods and spinal fusion.
                Unfortunately, during one of the tests - Electromyography (EMG) which is a diagnostic procedure to assess the health of muscles and the nerve cells that control them (motor neurons), we realized there is some serious issue with Nirvaan’s lower body. At 14th months, Nirvaan got diagnosed with a rare genetic disorder - spinal muscular atrophy (SMA) type 2. Our world was shattered and turned upside down, as this is a life-alternating disorder that takes away the ability to walk, eat or breathe and significantly shortens the lifespan</p>
              <p>
                This condition is progressive, meaning that it will continue to get worse over time. But there is a treatment for this condition, a new drug called Zolgensma by Novartis which has shown great promise in helping children with SMA. The only problem is that it is also the most expensive drug in the world, costing a staggering $2.1 million dollars, or nearly ₹17.3 crores rupees.

                For Novartis to approve Zolgensma therapy, a child must not reach 2 years – as this would negatively affect the effectiveness and the safety of the treatment. Nirvaan is currently 15 months old (as of January 2023), thus we have a fight against the clock. This is the reason we have set up this page. We do not have the means to make up anywhere near the required amount ($2.1 million dollars/17.3 crores rupees) in this time frame and need your help.

                We are running out of time and we are urging our community, family, friends and everyone willing to help donate or simply share our page as every effort and donation makes a difference and will get our son Nirvaan that much closer to this life-saving medication we so desperately need. To help get the word out, please share this Milaap page on Instagram, Twitter, Facebook and get your friends and family to do the same! My family and I will forever be grateful for it.
              </p>
            </div>


            <div className={`${styles.doq} col-lg-4`}>
              <Card className={`${styles.donate}`} style={{ width: '22rem' }}>
                <Card.Body>
                  <div className={`${styles.fline} mt-2`}>
                    <Card.Title><BiDonateHeart className={`${styles.donLogo} mb-1`}></BiDonateHeart> Donate</Card.Title>
                    <Card.Link className='ms-auto fs-6' href="#">998 Supporters</Card.Link>
                  </div><br />
                  <Card.Title className='fs-2'>₹ 3,60,09,880</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><span> raised of </span><span className={`${styles.raised} fs-5`}>17,50,00,000</span></Card.Subtitle>
                  <ProgressBar striped variant="success" label={`${21}%`} animated now={21} />
                  <div className={`${styles.days} mt-2`}>
                    <Card.Title className='fs-4 ms-auto'>18</Card.Title>
                    <Card.Subtitle className="text-muted mt-2 mx-1">days left</Card.Subtitle>
                  </div>
                  <div className={`${styles.dnow}`}>
                    <Button variant="outline-danger" size="lg" className="fs-6"><AiFillHeart className={`${styles.her} fs-5`}></AiFillHeart> DONATE NOW
                    </Button>
                  </div>
                  <Card.Subtitle className={`${styles.pay} text-muted mt-3 mx-4`}>Card, Netbanking, Cheque pickups</Card.Subtitle>
                  <div className={`${styles.align}`}>
                    <div className={`${styles.line} mt-3`}></div>
                    <Card.Subtitle className={`${styles.pay} text-muted mt-2 mx-auto`}><span>Or,</span> <span className={`${styles.du}`}>Donate using</span></Card.Subtitle>
                    <div className={`${styles.line} mt-3 ms-auto`}></div>
                  </div>
                  <div className={`${styles.qrc} mt-3`}><Card.Img className={`${styles.qr}`} variant="top" src="/qr.jpg" /></div>
                  <div className={`${styles.scana} mt-2`}>
                    <Card.Subtitle className='text-muted'>
                      Scan & donate with any app
                    </Card.Subtitle>
                  </div>
                  <div className='ms-3 mt-3 mb-3'>
                    <img className={`${styles.pee0} mx-2`} src="/Group 3bhim (1).png" alt="" />
                    <img className={`${styles.pee1} mx-2`} src="/Group 7gpay.png" alt="" />
                    <img className={`${styles.pee1} mx-2`} src="/Group 5phonepe.png" alt="" />
                    <img className={`${styles.pee2} mx-2`} src="/Group 8paytm.png" alt="" />
                    <img className={`${styles.pee3} mx-2`} src="/Group 9pay.png" alt="" />
                  </div>
                </Card.Body>
              </Card>
            </div>


          </div>
        </div>
      </div>

      <br /><br />
    </>
  )
}

export default Issue;