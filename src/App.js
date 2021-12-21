import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Redirect, Router, Switch, Route } from 'react-router-dom';
import PrivacyPolicy from './Components/PrivacyPolicy'
import Home from './Components/LandingHomePg';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Support from './Components/Support'
import TermsAndConditions from './Components/TermsAndConditions'
import RiskDisclosure from './Components/RiskDisclosure'
import NewsCryptoIO from './Components/NewsCryptoIO';

export default function App() {
    const DefaultRoutes = () => {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/support" component={Support} />
                    <Route exact path="/termsandconditions" component={TermsAndConditions} />
                    <Route exact path="/privacypolicy" component={PrivacyPolicy} />
                    <Route exact path="/riskdisclosure" component={RiskDisclosure} />





                    <Redirect to="/" />
                </Switch>

            </>
        )
    }

    return (
        <>
            <Switch>
                <Route component={DefaultRoutes} />
            </Switch>
            <Footer />
        </>
    )
}