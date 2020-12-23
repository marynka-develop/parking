import React from "react";
import CountUp from 'react-countup';
import {Link} from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
// Icons imports
import {
    MdAccessTime,
    MdPhoneIphone,
    MdDone,
    MdAttachMoney,
    MdLocalParking,
    MdGroup,
    MdComment,
    MdMap
} from "react-icons/md";


import './HomePage.css';

//Image imports
import first from './assets/Screenshot4.png'
import second from './assets/Screenshot3.png'
import phone from './assets/mockup.png'
import Footer from "../Footer/Footer";




function HomePage() {
    return (
        <div className='main'>


            {/*style={ { backgroundImage: "url('./public/image2.jpg')" } }*/}
            <div className="container-fluid top-block  d-flex  justify-content-center">
                <div className="blur">
                    <div className="row intro ">
                        <div className="col-md-12 text-center">
                            <ScrollAnimation animateIn="fadeIn" duration={2}>
                                <h2 className='text-white slogan'>Welcome to the new world of parking</h2>
                            </ScrollAnimation>

                            <p className='pre-slogan mt-3'>We will make your life easier, be a part of our community</p>
                            <Link to='/map' className='text-light brand'><button className="button mt-4">Choose Parking</button></Link>

                        </div>
                    </div>


                    <img className="image img1" src={first}/>
                    <img className="image img2" src={second}/>

                </div>

            </div>


            <div className="overflow ">
                <div className="container-fluid product-features">
                    <div className="row product-features-row ">
                        <div className="col-md-5 phone  text-center">
                            <img className="pt-5" width={300} src={phone}/>
                        </div>

                        <div className="col-md-7 text-center">
                            <h2 className="pt-5 ">Product Features</h2>
                            <span className="section devider"></span>

                            <div className="row product-features-row d-flex align-items-center">

                                <div className="col-md-6  mt-4">
                                    <ScrollAnimation className="pt-3 scroll " animateIn="fadeInLeft" duration={1}>
                                    <MdAccessTime size={85} className='icon'/>
                                    <h3 className="pt-3">Saving time</h3>
                                    <p>You spend less time finding parking site</p>
                                    </ScrollAnimation>
                                </div>
                                <div className="col-md-6  mt-4">
                                    <ScrollAnimation className="pt-3 scroll " animateIn="fadeInRight" duration={1}>
                                    <MdPhoneIphone size={85} className='icon'/>
                                    <h3 className="pt-3">Mobile version</h3>
                                    <p>To make using our app more comfortable we are developing mobile version.</p>
                                        </ScrollAnimation>
                                </div>

                                <div className="col-md-12 ">
                                    <ScrollAnimation className="pt-3 scroll " animateIn="fadeInUp" duration={1}>
                                    <MdDone size={85} className='icon'/>
                                    <h3 className="pt-3">Easy in use</h3>
                                    <p>User Friendly design and simple in use</p>
                                    </ScrollAnimation>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>


            </div>

            <div className="container-fluid find-and-book">
                <div className="row">

                </div>

            </div>

            <div className="container-fluid achievements pb-5" style={{backgroundImage: "url('./public/image2.jpg')"}}>
                <div className="row pt-5">
                    <div className="col-md-4 text-center pt-3 achivments-col">

                        <div className="col-md-12">
                            <MdAttachMoney size={75} className="counter-icons"/>

                        </div>
                        <div className="col-md-12 counter">
                            <CountUp end={700} id="ct"/>
                            <p>Tickets</p></div>
                    </div>
                    <div className="col-md-4 text-center pt-3 achivments-col">

                           <div className="col-md-12"><MdLocalParking size={75} className="counter-icons"/></div>
                           <div className="col-md-12 counter">
                               <CountUp end={125} id="ct"/>
                               <p>Parking</p>
                           </div>



                    </div>
                    <div className="col-md-4 text-center pt-3 achivments-col">
                        <div className="col-md-12"><MdGroup size={75} className="counter-icons"/></div>
                        <div className="col-md-12 counter">
                            <CountUp end={750} id="ct"/>
                            <p>Clients</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container-fluid usage d-flex justify-content-center">
                <div className="row text-center usage-row">
                    <div className="col-md-12 text-center title">
                        <span><b>Find</b> and <b>Book</b> Parking</span>
                        <p>Choose from millions of available spaces, or reserve your space in advance</p>
                    </div>
                    <div className="col-md-4 mt-2 box-container">
                        <div className="box text-center" id="icon1">

                            <span></span>
                            <h3>Anywhere, Anytime</h3>
                            <p>With thousands of spaces at your fingertips, you're bound to find a suitable parking
                                within the UA.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2 box-container">
                        <div className="box text-center" id="icon2">

                            <span></span>
                            <h3>CLEAR APPROACH</h3>
                            <p>Information of all spaces are displayed coherently, so that you may settle for the best
                                option.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2 box-container">
                        <div className="box text-center" id="icon3">
                            <h3>SMOOTH TRANSACTIONS</h3>
                            <p>Hassle-free and secure payment methods are available through both the Mobile app and
                                website.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overview">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center">
                        <div className="space-top"></div>
                        <h2 className="title">Want more details?</h2>
                    </div>
                    <div className="container">
                        <div className="space-top"></div>
                        <div className="row mb-5">
                            <div className="col-sm-3">
                                <ScrollAnimation className="pt-3 scroll " animateIn="fadeInDown" duration={1}>

                                <div className="card card1" data-background="color" data-color="green">
                                    <div className="card-body text-center">
                                        <div className="card-icon">
                                            <MdAttachMoney className="bottom-icons"/>
                                        </div>
                                        <h4 className="card-title">Instant Payment</h4>
                                        <p className="card-description">COnce bookings are made, payments are
                                            immediately transferred into your account.</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-sm-3">
                                <ScrollAnimation className="pt-3 scroll " animateIn="fadeInUp" duration={1}>
                                <div className="card card2" data-background="color" data-color="blue">
                                    <div className="card-body text-center">
                                        <div className="card-icon">
                                            <MdAccessTime className="bottom-icons"/>
                                        </div>
                                        <h4 className="card-title">Save Time</h4>
                                        <p className="card-description">Car parking management system to
                                            simplify the parking processes.</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-sm-3">
                                <ScrollAnimation className="pt-3 scroll " animateIn="fadeInDown" duration={1}>
                                <div className="card card3" data-background="color" data-color="purple">
                                    <div className="card-body text-center">
                                        <div className="card-icon">
                                            <MdComment className="bottom-icons"/>
                                        </div>
                                        <h4 className="card-title">Managers Support</h4>
                                        <p className="card-description">You can set the rental times as hourly or all
                                            day, as well as who can rent your space.</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-sm-3">
                                <ScrollAnimation className="pt-3 scroll " animateIn="fadeInUp" duration={1}>
                                <div className="card card4" data-background="color" data-color="brown">
                                    <div className="card-body text-center">
                                        <div className="card-icon">
                                            <MdMap className="bottom-icons"/>
                                        </div>
                                        <h4 className="card-title">List Any Space</h4>
                                        <p className="card-description">Is it a Commercial space or even a residence
                                            building? There's no limit, we list it! </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default HomePage;

