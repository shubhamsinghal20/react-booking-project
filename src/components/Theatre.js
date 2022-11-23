import React from "react";
import { Link } from "react-router-dom";

function Theatre() {
  
  return (
    <div style={{ backgroundColor: "black", height: "100vh", color: "white" }}>
      <h1 className="my-5">Movie Available In Theatres</h1>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col">Ayou Cinemas, Rajendra Nagar</div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              9:00am - 12.00pm
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              12:00pm - 3.00pm
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              3.00pm - 6.00pm
            </button>
          </div>
        </div>
      </div>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col">INOX Sapna Sangeeta, Sneha Nagar</div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              9:00am - 12.00pm
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              12:00pm - 3.00pm
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              3.00pm - 6.00pm
            </button>
          </div>
        </div>
      </div>

      <div className="container text-center my-5">
        <div className="row">
          <div className="col">Fortune Cinema Trinity Mall, MHOW</div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              9:00am - 12.00pm
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              12:00pm - 3.00pm
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              3.00pm - 6.00pm
            </button>
          </div>
        </div>
      </div>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col">INOX C21 Mall,Sheetal Nagar</div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              9:00am - 12.00pm
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              12:00pm - 3.00pm
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              3.00pm - 6.00pm
            </button>
          </div>
        </div>
      </div>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col">Carnival Mangal City, Indore</div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              9:00am - 12.00pm
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              12:00pm - 3.00pm
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              3.00pm - 6.00pm
            </button>
          </div>
        </div>
      </div>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col">PVR Treasure Island Mall,South Tukoganj</div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              9:00am - 12.00pm
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              12:00pm - 3.00pm
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              3.00pm - 6.00pm
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{ backgroundColor: "black" }}
              >
                <h1 className="modal-title fs-5 " id="exampleModalLabel">
                  <div>
                    <h2 style={{ textAlign: "center" }}>How Many Seats ?</h2>
                  </div>
                </h1>
                <button
                  type="button"
                  className="btn-close btn-light"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" style={{ backgroundColor: "black" }}>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlfor="inlineCheckbox1">
                      1
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlfor="inlineCheckbox2">
                      2
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlfor="inlineCheckbox1">
                      3
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlfor="inlineCheckbox2">
                      4
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlfor="inlineCheckbox1">
                      5
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlfor="inlineCheckbox2">
                      6
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlfor="inlineCheckbox1">
                      7
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlfor="inlineCheckbox2">
                      8
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlfor="inlineCheckbox1">
                      9
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlfor="inlineCheckbox2">
                      10
                    </label>
                  </div>

                  <div>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          CLUB <br />
                          Rs.120.00
                          <br />
                          Available
                        </div>
                        <div className="col">
                          SILVER <br />
                          Rs.150.00
                          <br />
                          Available
                        </div>
                        <div className="col">
                          GOLD
                          <br />
                          170.00
                          <br />
                          Available
                        </div>
                        <div className="col">
                          PLATINUM
                          <br />
                          200.00
                          <br />
                          Available
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div
                className="modal-footer"
                style={{ backgroundColor: "black" }}
              >
                <div className="d-grid gap-2 col-6 mx-auto">
                  <Link
                    to="/seats"
                    onClick={() => {
                      window.location.href = "/seats";
                    }}
                  >
                    <button className="btn btn-primary" type="button">
                      Select Seats
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theatre;
