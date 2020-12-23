import React, { Component, useState } from "react";
import ImageMapper from "react-image-mapper";
import Popup from "reactjs-popup";
import OrderPopup from "./components/OrderPopup";
import { MAP, notAvailable } from "./Map";
import "./BookingPage.css";
import parking_image from "./assets/parking.png"

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
      <div className="booking-page-div">
        <div className="d-flex justify-content-center">
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
      </div>
    );
  }
}

export default BookingPage;
