import "./fonts/MSignUp.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function Resident() {
  const location = useLocation();
  const history = useNavigate();
  const [block, setBlock] = useState("");
  const [lot, setLot] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [textmsgagree, setTextMsgAgree] = useState(false);
  function handleClick() {
    axios.post("http://localhost:4000/api/resident/register", {
      email: location.state.email,
      fname: location.state.fname,
      lname: location.state.lname,
      password: location.state.pass,
      address: location.state.addy,
      phoneNumber: location.state.pnum,
      id: nanoid(),
      agreeToRecieveTexts: textmsgagree,
      block: block,
      lot: lot,
      program: "Marlboro",
      zipCode: zipcode,
    }).then(() => {

      history("/signin");
    }).catch(() => {
      alert("error")
    })
  }

  const handleCheckboxChange = (e) => {
    setTextMsgAgree(e.target.checked);
  };

  return (
    <div class="background">
      <div class="colorspace">
        <p class="heading">S I G N &nbsp; U P</p>
        <div class="shopimg" />
      </div>
      <div class="whitespace">
        <p class="loginheading">Resident</p>
        <input
          class="input"
          placeholder="Block"
          value={block}
          onChange={(e) => setBlock(e.target.value)}
        ></input>
        <input
          class="input"
          placeholder="Lot"
          value={lot}
          onChange={(e) => setLot(e.target.value)}
        ></input>
        <input
          class="input"
          placeholder="Zip Code"
          value={zipcode}
          onChange={(e) => setZipCode(e.target.value)}
        ></input>
        <br></br>
        <div class="checkbox-wrapper-1">
            <input
              id="example-1"
              class="substituted"
              type="checkbox"
              aria-hidden="true"
              checked={textmsgagree}
              onChange={handleCheckboxChange}
            />
            <label class="textnoselect" for="example-1">Agree to Receive Text Messages</label>
          </div>
       
        <button class="nstep" onClick={handleClick}>
          Next Step
        </button>
        <div class="btext">
          <p class="btexta">Already have an account?</p>
          <button
            class="btextb"
            onClick={(e) => {
              window.location.href = "/signin";
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Resident;
