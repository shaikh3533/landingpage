import React from 'react'
import classes from './Influencers.module.css'
import Profile from '../../Images/cardImg.png'
import InfluencersCard from './InfluencersCard'

export default function Influencers() {
    return (
        <div className={`${classes.bg_1} ${classes.margin}`}>
            <b className={`fs-1 mb-5 mb-5 ${classes.heading1} ${classes.textColor}`}>Benefits for our users and traders</b>
            <div className='row'>
                <InfluencersCard
                    img={Profile}
                    name="Name Lastname"
                    type="Crypto Advisor"
                    title="Amazing platform!"
                    info="“Get the same results as our expert crypto traders by just copying their trades. 100% Hands-off!” "
                />
                <InfluencersCard
                    img={Profile}
                    name="Name Lastname"
                    type="Crypto Advisor"
                    title="Amazing platform!"
                    info="“Get the same results as our expert crypto traders by just copying their trades. 100% Hands-off!” "
                />
                <InfluencersCard
                    img={Profile}
                    name="Name Lastname"
                    type="Crypto Advisor"
                    title="Amazing platform!"
                    info="“Get the same results as our expert crypto traders by just copying their trades. 100% Hands-off!” "
                />
            </div>
            <div className='text-center'>
                <button className={`${classes.button}`}>JOIN OTHER USERS NOW!</button>
            </div>
        </div>
    )
}