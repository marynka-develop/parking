import React, {useState} from 'react'

import attract_people from './assets/attract_people.jpg'
import save_money from './assets/save_money.jpg'
import './PartnershipPage.css'
import PartnershipForm from "./components/PartnershipForm/PartnershipForm";
import {APPLY_FORM, SUCCESS_FORM} from "./components/constants";
import Footer from "../Footer/Footer";

function PartnershipPage() {

    const [formHidden, setFormHidden] = useState(true)
    const [formType, setFormType] = useState(APPLY_FORM)

    function openForm() {
        setFormHidden(false)
    }

    function handleSubmitApplyForm() {
        setFormType(SUCCESS_FORM)
    }

    function closeForm() {
        setFormHidden(true)
    }

    return (
        <div id="partnership-page">
            <div className="container p-0">
                <h1 className="page-title text-center">What are the <span className="text-danger">benefits</span>?</h1>
                <div id="attract-block" className="block-container row justify-content-around">
                    <img src={attract_people} className="block-image" width="400" alt="" />
                    <div className="block-text text-center d-flex flex-column justify-content-center">
                        <h2><span className="text-danger">Attract</span> customers</h2>
                        <p>People with cars will drive to your place more likely</p>
                    </div>
                </div>
                <div id="save-block" className="block-container row justify-content-around">
                    <div className="block-text text-center d-flex flex-column justify-content-center">
                        <h2><span className="text-danger">Save</span> money</h2>
                        <p>No need to hire additional staff to service the parking</p>
                    </div>
                    <img src={save_money} className="block-image" width="400" alt="" />
                </div>
                <div className="row justify-content-center">
                    <button onClick={openForm} className="btn-submit">Attract and save</button>
                </div>
            </div>
            <PartnershipForm type={formType} hidden={formHidden} onSubmit={handleSubmitApplyForm} onClose={closeForm} />
            <Footer />
        </div>
    )
}

export default PartnershipPage
