import React from 'react'
import Pros from './HomePg/Pros';
import CopyTrading from './HomePg/CopyTrading';
import Exchange from './HomePg/Exchange';
import FAQ from './HomePg/FAQ';
import FavTrader from './HomePg/FavTrader';
import Influencers from './HomePg/Influencers';
import Links from './HomePg/Links';
import HowItWorks from './HomePg/HowItWorks';
import Portfolio from './HomePg/Portfolio';
import Success from './HomePg/Success';
import WhatIsCopyTrading from './HomePg/WhatIsCopyTrading';
import WhyCopyTrading from './HomePg/WhyCopyTrading';
import ScrollButton from './HomePg/ScrollButton';

export default function Home() {
    return (
        <>
            <div className='container'>
                <CopyTrading />
                <Links />
                <WhatIsCopyTrading />
                <WhyCopyTrading />
                <Exchange />
                <FavTrader />
                <Pros />
                <Portfolio />
                <HowItWorks />
                <Influencers />
                <Success />
                <FAQ />
                <ScrollButton />
            </div>
        </>
    )
}
