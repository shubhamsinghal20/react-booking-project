import React, { useState } from "react";
import { Link } from "react-router-dom";

function Seats() {
  const seatType = {
    typeA: "Platinum",
    typeB: "Gold",
    typeC: "Silver",
    typeD: "Club",
  };
  const seatPricing = {
    platinum: 200.0,
    gold: 170.0,
    silver: 150.0,
    club: 120.0,
  };
  const [p, setP] = useState(0);
  const [g, setG] = useState(0);
  const [s, setS] = useState(0);
  const [c, setC] = useState(0);

  const [details, setDetails] = useState([[], []]);
  const handleChange = (e) => {
    return  e.target.checked === true ? ( setP( p+1) ,   details[1].push('A')): ( setP( p-1),   details[1].splice(  details[1].indexOf('A'), 1) )
  };
  const handleChangeA = (e) => {
    return e.target.checked === true ? ( setG( g+1) ,   details[1].push('B')): ( setG( g-1),   details[1].splice(  details[1].indexOf('B'), 1) )
  };
  const handleChangeB = (e) => {
    return e.target.checked === true ? ( setS( s+1) ,   details[1].push('G')): ( setS( s-1),   details[1].splice(  details[1].indexOf('G'), 1) )
  };
  const handleChangeC = (e) => {
    return  e.target.checked === true ? (setC(c+1) ,   details[0].push('L')): (setC(c-1),   details[0].splice(  details[0].indexOf('L'), 1) )  }
  ;
  return (
    <>
      <div style={{ backgroundColor: "black", color: "white", height: "100%" }}>
        <div className="my-5">
          <h3>
            {seatType.typeA} Rs.{seatPricing.platinum}
          </h3>
          <h3>total count : {p}</h3>
        </div>
        <span className="mx-3">A</span>
        <div className="mx-5"></div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1S"
            value="option1"
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>

        <div className="my-5">
          <h3>
            {seatType.typeB} Rs.{seatPricing.gold}
          </h3>
          <h3>total Count : {g}</h3>
        </div>
        <span className="mx-3">B</span>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            17
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            18
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            19
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            20
          </label>
        </div>
        <br />
        <span className="mx-3">C</span>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            17
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            18
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            19
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            20
          </label>
        </div>
        <br />
        <span className="mx-3">D</span>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            onChange={handleChangeA}
            value="option1"
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            17
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            18
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            19
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            20
          </label>
        </div>
        <br />
        <span className="mx-3">E</span>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
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
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            onChange={handleChangeA}
            value="option2"
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            17
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            18
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            19
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeA}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            20
          </label>
        </div>
        <br />

        <div className="my-5">
          <h3>
            {seatType.typeC} Rs.{seatPricing.silver}
          </h3>
          <h3>total Count : {s}</h3>
        </div>
        <span className="mx-3">G</span>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            17
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            18
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            19
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            20
          </label>
        </div>
        <br />
        <span className="mx-3">H</span>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            17
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            18
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            19
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            onChange={handleChangeB}
            value="option2"
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            20
          </label>
        </div>
        <br />
        <span className="mx-3">I</span>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            onChange={handleChangeB}
            value="option1"
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            17
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            18
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            19
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            20
          </label>
        </div>
        <br />
        <span className="mx-3">J</span>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
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
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            17
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            18
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            19
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeB}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            20
          </label>
        </div>
        <br />

        <div className="my-5">
          <h3>
            {seatType.typeD} Rs.{seatPricing.club}
          </h3>
          <h3>total Count : {c}</h3>
        </div>
        <span className="mx-3">L</span>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
            value="option2"
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            onChange={handleChangeC}
            value="option1"
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            onChange={handleChangeC}
            value="option2"
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={handleChangeC}
            id="inlineCheckbox1"
            value="option1"
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            onChange={handleChangeC}
            value="option2"
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            onChange={handleChangeC}
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            17
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            18
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            19
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            20
          </label>
        </div>
        <br />
        <span className="mx-3">M</span>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={handleChangeC}
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
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            2
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            17
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            18
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            19
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            20
          </label>
        </div>
        <br />
        <span className="mx-3">N</span>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            17
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            18
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            19
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            20
          </label>
        </div>
        <br />
        <span className="mx-3">O</span>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
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
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            14
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            15
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={handleChangeC}
            id="inlineCheckbox2"
            value="option2"
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            16
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            17
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            18
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox1">
            19
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            onChange={handleChangeC}
          />
          <label className="form-check-label" htmlfor="inlineCheckbox2">
            20
          </label>
        </div>
        <br />

        <div className="my-5">
          <h1>Screen This Way</h1>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto ">
          <Link
            style={{ textDecoration: "none" }}
            to={
              200 * p + 170 * g + 150 * s + 120 * c === 0
                ? ""
                : "/bookingSummary"
            }
            state={{ g, c, p, s,details }}
          >
            <button
              disabled={
                200 * p + 170 * g + 150 * s + 120 * c === 0 ? true : false
              }
              className="d-grid gap-2 col-6 mx-auto btn btn-primary my-5"
              type="button"
              on
            >
              Pay Rs.{200 * p + 170 * g + 150 * s + 120 * c}
            </button>
          </Link>
        </div>
      </div>
      
    </>
  );
}

export default Seats;
