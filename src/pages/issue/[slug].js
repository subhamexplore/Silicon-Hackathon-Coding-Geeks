import React from 'react'
import { useRouter } from 'next/router'

const Issue = () => {
    const router = useRouter();
    const {slug} = router.query;
    return (
        <div>
            <p>The slug is : {slug}</p>
        </div>
    )
}

export default Issue;


