import React from 'react'
import classes from './CopyTrading.module.css'
import Img1 from '../../Images/image_1.png'
import Links from './Links'

export default function CopyTrading() {
    return (
        <div>
            <div className='row my-5 '>
                <div className='col-lg-5 col md-5 col-12'>
                    <b className={`${classes.heading1}`}>Copy Trading</b>
                    <br />
                    <b className="mb-4">BY NEWSCRYPTO.IO</b>
                    <br />
                    <br />
                    <p className='mb-0'>A 100% hands-off approach to trading!</p>
                    <br />
                    <p>Become a part of the fastest growing trading community and discuss trading strategies with the pros, while making the same trades &mdash; and profits &mdash; as they do!</p>
                    <button className={`my-1 ${classes.text} ${classes.button}`}>CREATE A USERS ACCOUNT</button>
                    <button className={`my-1 ${classes.text} ${classes.button}`}>CREATE A TRADERS ACCOUNT</button>
                </div>
                <div className='col-lg-7 col md-7 col-12'>
                    <div className={` ${classes.backgroundImage}`}>
                        <img src={Img1} className={`mt-3 ${classes.image}`} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
