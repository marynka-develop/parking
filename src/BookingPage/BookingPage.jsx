import React, { Component, useState } from "react";
import ImageMapper from "react-image-mapper";
import Popup from "reactjs-popup";
import OrderPopup from "./components/OrderPopup";
import { MAP, notAvailable } from "./Map";
import "./BookingPage.css";
import parking_image from "./assets/parking.png"
import Footer from "../Footer/Footer";
import {FaDribbble, FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa";

class BookingPage extends Component {
  constructor(props) {
    super(props);

    this.handlerBook = this.handlerBook.bind(this);
    this.handlerClose = this.handlerClose.bind(this);

    this.state = {
      open: false,
      available: 15,
    };
  }

  componentWillMount() {
    this.load();
  }

  handlerBook() {
    // this.props.orderId = Date.now();
    // console.log(this.props.orderId);

    sessionStorage.setItem("orderId", Date.now());
    //console.table(sessionStorage.getItem("orderId"));

    this.setState({ open: false });
  }

  handlerClose() {
    this.setState({ open: false });
  }

  load() {
    const randomCount = Math.floor(0 + Math.random() * (15 - 0));
    console.log(randomCount);

    var randomIds = [];
    while (randomIds.length < randomCount) {

      const randId = Math.floor(0 + Math.random() * (14 - 0));
      if (randomIds.indexOf(randId) === -1) {
        randomIds.push(randId);
        MAP.areas[randId].preFillColor = notAvailable;
        MAP.areas[randId].fillColor = notAvailable;
      }
    }
    this.setState({ available: 15 - randomCount });

    return MAP;
  }

  clicked(area) {
    if (area.fillColor !== notAvailable) {
      //console.log("Free");
      this.props.placeId = area.name;
      this.setState({ open: true });
    }
  }

  render() {
    return (
      <div className="booking-page-div ">
        <div className="d-flex justify-content-center content h-150">
          <div className="parking-map-img">
            <div className="d-flex" id="available-places"><div id="available-places-number">{this.state.available}</div><div id="available-places-text">available places</div></div>
            <ImageMapper
              src={parking_image}
              map={MAP}
              onClick={(area) => this.clicked(area)}
            />
          </div>
        </div>
        <Popup
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        >
          <OrderPopup
            className="book-popup"
            placeId={this.props.placeId}
            handlerBook={this.handlerBook}
            handlerClose={this.handlerClose}
          />
        </Popup>
        {/*<div className="row zahlushka"></div>*/}


        <div className="site-footer kostul">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">SmartParking.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                  to help the upcoming drivers with the Parking. Scanfcode focuses on providing the most
                  efficient way to find it or app provied the most simle way to do it. We will help
                  programmers
                  build up concepts in different programming languages that include HTML,
                  CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li><a href="#">Map</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Select Place</a></li>
                  <li><a href="#">Become a partner</a></li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Contribute</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>
              </div>
            </div>
            <hr/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                  <a href="#">SmartParking</a>.
                </p>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><FaFacebookF size={25}/></a></li>
                  <li><a className="twitter" href="#"><FaTwitter size={25}/></a></li>
                  <li><a className="dribbble" href="#"><FaDribbble size={25}/></a></li>
                  <li><a className="linkedin" href="#"><FaLinkedinIn size={25}/></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingPage;
