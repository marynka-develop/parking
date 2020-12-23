import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./OrderPopup.css";

class OrderPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0.5,
    };
  }

  handleHoursChange(h) {
    this.setState({ price: 0.5 * h });
  }

  render() {
    return (
      <div className="order-popup">
        <div>
          <h3 className="text-center">Place #{this.props.placeId}</h3>
          <h4 className="text-center">Price: ${this.state.price}</h4>
          <div className="d-flex justify-content-between">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  🕒
                </span>
              </div>
              <input
                type="number"
                class="form-control"
                min="1"
                max="12"
                placeholder="Hours"
                aria-label="Hours"
                onChange={(e) => this.handleHoursChange(e.target.value)}
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  AB1234CE
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Vehicle registration plate"
                aria-label="Vehicle registration plate"
              />
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                123
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Card number"
              aria-label="Card number"
            />
          </div>
          <div className="d-flex justify-content-between">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  🗓️
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="MM/YY"
                aria-label="MM/YY"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  💳
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="CVV2"
                aria-label="CVV2"
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <Link to={`/thank-you`}>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={this.props.handlerBook}
            >
              Book
          </button>
          </Link>

          <button
            className="btn btn-outline-primary btn-sm"
            onClick={this.props.handlerClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default OrderPopup;
