import React from 'react'
import classes from './Portfolio.module.css'

export default function Portfolio() {
    return (
        <div className={`${classes.margin} ${classes.backgroundImage}`}>
            <div className='row'>
                <div className='col-lg-8 col-md-8 col-12 position-relative'>
                    <div className={classes.bgDiv}><span>You are <bold className={classes.bold}>up 10.87% </bold>today</span></div>
                    <div className={`${classes.portfolio1}`}>
                        <b>
                            Total Portfolio
                            <br />
                            <span className={classes.bold24}>$ 43,098.32</span>
                        </b>
                    </div>
                    <div className={classes.portfolio2}>
                        <b>
                            Total Profit
                            <br />
                            <span className={classes.bold24}>$ 6,843.12</span>
                        </b>
                    </div>

                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                    <b>
                        NewsCrypto&#39;s Copy Trading platform will do everything for you and it doesn&#39;t require any previous skill or crypto trading knowledge whatsoever.
                    </b>
                    <br />
                    <br />
                    <b>
                        With NewsCrypto&#39;s Copy Trading platform, you will be able to achieve the same results as the world&#39;s top tier traders!
                    </b>
                    <br />
                    <br />
                    <b>
                        The platform will have a collection of many famous traders that you probably already know and whom you will be able to follow on various tier 1 exchanges.
                    </b>                </div>
            </div>
        </div>
    )
}
