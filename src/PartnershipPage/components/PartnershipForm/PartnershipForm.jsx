import React from 'react'

import './PartnershipForm.css'
import {APPLY_FORM, SUCCESS_FORM} from "../constants";

function PartnershipForm(props) {
    const form = (
        <div>
            <form onSubmit={props.onSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="organization">Organization:</label>
                    <input className="form-control" type="text" name="organization" placeholder="Your organization" required="true"/>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input className="form-control" type="email" name="email" placeholder="Your email" required="true"/>
                </div>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-success">Become a partner</button>
                    <a onClick={props.onClose} className="btn btn-outline-secondary">Cancel</a>
                </div>

            </form>
        </div>
    )

    const success = (
        <div>
            <h1>Success</h1>
            <p>We will contact you soon to обкашляти details.</p>
            <button onClick={props.onClose} className="btn btn-success">Close</button>
        </div>
    )

    return (
        <div id="partnership-form" className={props.hidden ? 'hidden' : ''}>
            {props.type === APPLY_FORM ? form : props.type === SUCCESS_FORM ? success : null}
        </div>
    )
}

export default PartnershipForm
