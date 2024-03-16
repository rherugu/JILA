import "./fonts/MSignUp.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Modal from "react-modal";

function Signin() {
  const location = useLocation();
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [errModal, setErrModal] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();
  

  function handleClick() {
    axios.post("http://localhost:4000/api/resident/", {
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      if (res.data.type == 0){
      history("/resdash", {
        state: {
          ...res.data
        }
      })}
      else if (res.data.type == 1) {
        if (searchParams.get("reg")) {
          var link2 = res.data.loginLink.url;
          history("/md", {
            state: {
              ...res.data,
              link: link2,
            }
          })
        } else {

          var link3 = res.data.loginLink.url;
          history("/dbm", {
            state: {
              ...res.data,
              link: link3,
            }
          })
        }
      } else {
        setModalVisible(true)
      }
    }).catch((err) => {
      setModalVisible(true)
    })
  }

  return (
    <div class="background">
      <div class="colorspace">
        <p class="heading">S I G N &nbsp; I N</p>
        <div class="shopimg" />
      </div>
      <div class="whitespace">
        <p class="loginheading">Log In&nbsp;&nbsp;&nbsp;</p>
        <input
          class="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          class="input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button class="nstep" onClick={handleClick}>Next Step</button>
        <div class="btext">
          <p class="btexta">Don't have an account?</p>
          <button
            class="btextb"
            onClick={(e) => {
              window.location.href = "/signup";
            }}
          >
            Sign Up
          </button>
        </div>
      </div><Modal
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
         
            <p>Incorrect email or password. <a href="/signup">Sign up</a> if you do not have an account.</p>

        </div>
      </Modal>
    </div>
  );
}
export default Signin;
