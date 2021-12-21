import React from 'react'
import classes from './Influencers.module.css'

export default function InfluencersCard(props) {
    return (
        <div className='col-lg-4 col-md-6 col-12 g-3'>
            <div className={classes.cardContainer}>
                <div className='d-inline-flex'>
                    <img src={props.img} className={classes.cardImg} alt="" />
                    <div className='ms-3 mt-2'>
                        <h3 className={classes.cardName}>{props.name}</h3>
                        <h5 className={classes.cardType}>{props.type}</h5>
                    </div>
                </div>
                <h5 className={`my-4 ${classes.cardTitle}`}>{props.title}</h5>
                <p>{props.info}</p>
            </div>
        </div>
    )
}
