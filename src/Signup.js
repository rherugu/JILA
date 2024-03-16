import "./fonts/MSignUp.css";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";




function SignUp() {
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  function handleClick() {
    axios.post("http://localhost:4000/api/resident/register/ce", {
      email: email,
    }).then((res) => {
      console.log(res);
      if (res.data.stat == 0) {
        setModalVisible(true);
      }
      else {
        history("/signupc", {
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
    }).catch((err) => {
      alert(err)
    })
    
  }

  return (
    <div class="background">
      <div class="colorspace">
        <p class="heading">S I G N &nbsp; U P</p>
        <div class="shopimg" />
      </div>
      <div class="whitespace">
        <p class="loginheading">Sign Up</p>
        <input
          className="input"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="input"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="input"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="input"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
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
      <Modal
        isOpen={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        contentLabel="Example Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "50%", // Adjust the width as per your requirement
            maxHeight: "70%", // Adjust the maximum height as per your requirement
            overflowY: "auto", // Add vertical scrollbar if content exceeds maxHeight
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay background color
          },
        }}
      >
        <div style={{ padding: "20px" }}>
         
            <p>Email already exists, use a different email or <a href="/signin">log in.</a></p>

        </div>
      </Modal>
    </div>
  );
}
export default SignUp;
