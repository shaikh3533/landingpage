import React from 'react'
import classes from './WhatIs.module.css'
import Pc2 from '../../Images/Pc_2.png'
import Pc1Hover from '../../Images/Pc_1InsideImg.png'
import Pc1 from '../../Images/Pc_1.png'
import Notepad from '../../Images/Notepad.png'
import Mobile from '../../Images/Mobile.png'

export default function WhatIsCopyTrading() {
    return (
        <div className='position-relative' id='WhatIsCopyTrading'>
            <div className='row mt-5'>
                <div className='col-lg-5 col md-5 col-12'>
                    <b className={`fs-1 ${classes.heading1} ${classes.textColor}`}>What is CopyTrading?</b>
                    <br />
                    <br />
                    <br />
                    <p>Copy Trading lets you automatically copy all of the trades of your favorite professional traders. With just a few clicks, you can follow their strategies and make the same profits as the pros, without having to do any work of your own. While the professional traders execute trades on your behalf, you can also learn from the best by observing their trading system. It’s the perfect tool whether you’re a beginner in the space or you simply don’t have time to constantly monitor the markets. </p>
                    <button className={`${classes.button}`}>CREATE A USERS ACCOUNT</button>
                </div>
                <div className='col-lg-7 col md-7 col-12 mb-5'>
                    <div className={`pb-3`}>
                        <div className={classes.backgroundImage}></div>
                            <img src={Pc1} className={classes.pc1}  alt="" />
                            <img src={Pc2} className={classes.pc2} alt="" />
                            <img src={Notepad} className={classes.notepad} alt="" />
                            <img src={Mobile} className={classes.mobile} alt="" />
                            <img src={Pc1Hover} className={classes.hoverImg}  alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}