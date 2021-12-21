import React from 'react'
import classes from './Success.module.css'
import BoyImg from '../../Images/BoyImg.png'

export default function Success() {
    return (
        <div className={`${classes.margin}`}>
            <div className={classes.bg_1}>
                <div className='row'>
                    <div className={`col-lg-6 col-md-6 col-12 p-5 ${classes.marginDiv}`}>
                        <p>You can do all the work and spend years mastering your trading skill or just copy other traders who have already gained top-tier trading expertise.</p>
                        <b className={classes.heading}>When they trade, you copy.</b>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <img src={BoyImg} className={classes.boyImg} alt="" />
                        <button className={classes.button}>Their success becomes yours too!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
