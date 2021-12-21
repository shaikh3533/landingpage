import React, { useEffect, useState } from 'react'
import classes from './Benefits.module.css'
import $ from 'jquery'


export default function Benefits() {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)

    const handleClick1 = () => {
        // alert('2')
        setShow1(true);
        setShow2(false);
    }
    const handleClick2 = () => {
        setShow2(true);
        setShow1(false);
    }

    // const handleClick=() => {
    //     document.getElementById('defaultCheck').click()
    //   };


    return (
        <div>
            <div className={`${classes.margin}`}>
                <b className={`fs-1 mb-5 mb-5 ${classes.heading1} ${classes.textColor}`}>Benefits for our users and traders</b>

            </div>
            <div className='d-inline-flex position-relative my-5'>
                {/* <input className='d-none' type='checkbox' defaultChecked={true} onChange={handleClick} /> */}
                <button id='defaultCheck' className={classes.button1} type='check' defaultChecked={show1} onClick={handleClick1} onFocus={handleClick1}>Why you should start with Copy Trading?</button>
                <button className={classes.button2} onFocus={handleClick2}>Why should you become a trader?</button>
                {show1 ?
                    <ul className={classes.list1}>
                        <li>- Automatically copy top-performing traders</li>
                        <li>- Build a network by interacting with other members</li>
                        <li>- Make the top traders work for you</li>
                        <li>- Learn new trading strategies</li>
                        <button className={`my-5 ${classes.button_11}`}>Trade On Auto-Pilot</button>
                    </ul> : null}
                {show2 ?
                    <ul className={classes.list2}>
                        <li>- Leave a mark in the social trading revolution</li>
                        <li>- Create your brand as a trade</li>
                        <li>- Interact with other professional traders in the space</li>
                        <li>- Provide guidance and knowledge to new players entering the space</li>
                        <li>- Earn a commission from other users that copy your trades</li>
                        <button className={`myb-5 ${classes.button_22}`}>Trade On Auto-Pilot</button>
                    </ul> : null}
            </div>
        </div>
    )
}
