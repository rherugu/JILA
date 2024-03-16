import "./Signup.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
function SignUpChoice() {
  const location = useLocation();

  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    if (location.state) {
      setFirstName(location.state.fname);
      setLastName(location.state.lname);
      setPhoneNumber(location.state.pnum);
      setEmail(location.state.email);
      setPassword(location.state.pass);
      setAddress(location.state.addy);
    }
  }, [location.state]);
  function handleClick() {
    history("/ressignup", {
      state: {
        fname: firstName,
        lname: lastName,
        pnum: phoneNumber,
        email: email,
        pass: password,
        addy: address,
      },
    });
  }
  function handleClick2() {
    history("/msignup", {
      state: {
        fname: firstName,
        lname: lastName,
        pnum: phoneNumber,
        email: email,
        pass: password,
        addy: address,
      },
    });
  }

  return (
    <div class="background1">
      <div class="background2">
        <p class="heading2">S I G N &nbsp; U P</p>
        <div class="optns">
          <button class="nstep2" onClick={handleClick}>
            <div class="bsimg" />
            Resident
          </button>
          <button class="nstep3" onClick={handleClick2}>
            <div class="shimg" />
            Merchant
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignUpChoice;
