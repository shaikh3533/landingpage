import React from 'react'
import classes from './Footer.module.css'
import Twitter from '../Images/Twitter.png'
import Instagram from '../Images/Instagram.png'
import Facebook from '../Images/Facebook.png'
import Youtube from '../Images/Youtube.png'
import Trading from '../Images/Trading.png'
import Linkdin from '../Images/LinkdIn.png'
import Telegram from '../Images/Telegram.png'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='mt-5 mb-3'>
            <div className='d-flex container'>
                <NavLink to="/support" className={classes.footerLink}>
                    Support
                </NavLink>
                <NavLink to="/termsandconditions" className={classes.footerLink}>
                    Terms &amp; Conditions
                </NavLink>
                <NavLink to="/privacypolicy" className={classes.footerLink}>
                    Privacy Policy
                </NavLink>
                <NavLink to="/riskdisclosure" className={classes.footerLink}>
                    Risk Disclosure
                </NavLink>
                <a href="https://newscrypto.io" className={classes.footerLink}>
                    NewsCrypto.io
                </a>
                <img src={Twitter} className={classes.footerLink} alt="" />
                <img src={Instagram} className={classes.footerLink} alt="" />
                <img src={Facebook} className={classes.footerLink} alt="" />
                <img src={Youtube} className={classes.footerLink} alt="" />
                <img src={Trading} className={classes.footerLink} alt="" />
                <img src={Linkdin} className={classes.footerLink} alt="" />
                <img src={Telegram} className={classes.footerLink} alt="" />
            </div>
        </footer>
    )
}
