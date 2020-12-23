import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapPage from "./MapPage/MapPage";
import BookingPage from "./BookingPage/BookingPage";
import ThankYouPage from "./ThankYouPage/ThankYouPage";
import PartnershipPage from "./PartnershipPage/PartnershipPage";
import HomePage from "./HomePage/HomePage.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

import './App.css';


function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <div>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path="/map" component={MapPage} />
                        <Route path="/partnership" component={PartnershipPage} />
                        <Route path="/booking/:parkingId" component={BookingPage} />
                        <Route path="/thank-you" component={ThankYouPage} />
                        {/* render={({ match }) => (<ThankYouPage id={match.params.id} */}
                    </Switch>
                </div>

            </Router>
        </div>
    );
}

export default App;
