import React, { Component } from 'react';
import './ThankYouPage.css';

class ThankYouPage extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="thank-you">
                <h1>Thank you for using our service!</h1>
                <h2>Your order number is: <strong>{sessionStorage.getItem("orderId")}</strong> </h2>
            </div>
        )
    }
}

export default ThankYouPage
