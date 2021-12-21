import React from 'react'
import classes from './Links.module.css'
import AsSeenIn from '../../Images/AsSeenIn.png'
import Yahoo from '../../Images/Yahoo.png'
import Hackernoon from '../../Images/Hackernoon.png'
import Decrypt from '../../Images/Decrypt.png'
import BlockOnomi from '../../Images/BlockOnomi.png'
import CryptoDaily from '../../Images/CryptoDaily.png'
import FinanceMagnates from '../../Images/FinanceMagnates.png'
import MarketWatch from '../../Images/MarketWatch.png'

export default function Links() {
    return (
        <div className={`d-flex ${classes.linkDiv}`}>
                <img src={AsSeenIn} alt="" />
                <img src={Yahoo} className={` ${classes.links}`} alt="" />
                <img src={Hackernoon} className={` ${classes.links}`} alt="" />
                <img src={Decrypt} className={` ${classes.links}`} alt="" />
                <img src={BlockOnomi} className={` ${classes.links}`} alt="" />
                <img src={CryptoDaily} className={` ${classes.links}`} alt="" />
                <img src={FinanceMagnates} className={` ${classes.links}`} alt="" />
                <img src={MarketWatch} className={` ${classes.links}`} alt="" />
        </div>
    )
}
