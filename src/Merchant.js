import "./fonts/MSignUp.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import LoadingOverlay from 'react-loading-overlay';

function Merchant() {
  const location = useLocation();
  const history = useNavigate();
  const [program, setProgram] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState("");
  function handleClick() {
    setLoading(true)
    axios
      .post("http://localhost:4000/api/merchant/register", {
        email: location.state.email,
        fname: location.state.fname,
        lname: location.state.lname,
        password: location.state.pass,
        address: location.state.addy,
        phoneNumber: location.state.pnum,
        id: nanoid(),
        program: program,
        website: website
      })
      .then((res) => {
        console.log(res)
        
        window.location.href = res.data.accountLink.url;
      })
      .catch(() => {
        alert("error");
      });
  }

  return (
    <div class="background">
      <div class="colorspace">
        <p class="heading">S I G N &nbsp; U P</p>
        <div class="shopimg" />
      </div>
      <div class="whitespace">
        <p class="loginheading">Merchant</p>

        <input
          class="input"
          placeholder="Program"
          onChange={(e) => setProgram(e.target.value)}
        ></input><input
        class="input"
        placeholder="Business Website URL"
        onChange={(e) => setWebsite(e.target.value)}
      ></input>
        <button class="nstep" onClick={handleClick}>
          Next Step
        </button>

  <h6>We do not process nor collect any personal bank account info, tax info, or social security info.</h6>
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
      <LoadingOverlay
  active={loading}
  spinner
  text='Onboarding you to Stripe'
  styles={{
    height: 100,
    width:100
  }}
  >
</LoadingOverlay>
    </div>
  );
}
export default Merchant;
