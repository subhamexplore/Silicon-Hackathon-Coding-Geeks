import React from 'react'
import Link from 'next/link'

const Donate = () => {
    const sample = [
        {
            _id: 1,
            raiser: "dev ashrit",
            title: "Need help for subham",
            category : "environment",
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
            category : "health",
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
            category : "wildlife",
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
            category : "education",
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
            category : "environment",
            slug: "need-help-for-bc",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ullam in? Laborum quas provident libero! Esse illum reiciendis numquam est.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
            amount: 12777,
            validTill: 50,
        }
    ]
    return (
        <div className='container'>
            <form className="d-flex mt-5" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className='row row-cols-md-4'>
                {sample.map((item) => {
                    return (
                        <div key={item._id} className="card mt-4 col mx-2" style={{width: "19rem"}}>
                            <img src={item.img} className="card-img-top " alt={item.slug} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.desc}</p>
                                <Link href={`/issue/${item.slug}`} className="btn btn-primary">Donate</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Donate