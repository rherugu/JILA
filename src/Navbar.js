import logo from "./images/logo.png";
import homeicon from "./images/homeicon.png";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

export default function Navbar() {
  return (
    <div class="group-2zz">
      <div class="rectangle-1"></div>
      <img class="logor-2-1" src={logo} />
      <div
        class="n-a-m-e"
        onMouseEnter={(e) => {
          e.target.style.color = "#000000";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#5e4300";
        }}
        onClick={(e) => {
          window.location.href = "/";
        }}
      >
        <span>
          <span
            class="n-a-m-e-span"
            onMouseEnter={(e) => {
              e.target.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#5e4300";
            }}
          >
            J
          </span>
          <span
            class="n-a-m-e-span2"
            onMouseEnter={(e) => {
              e.target.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#5e4300";
            }}
          >
            {" "}
          </span>
          <span
            class="n-a-m-e-span3"
            onMouseEnter={(e) => {
              e.target.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#5e4300";
            }}
          >
            I
          </span>
          <span
            class="n-a-m-e-span4"
            onMouseEnter={(e) => {
              e.target.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#5e4300";
            }}
          >
            {" "}
          </span>
          <span
            class="n-a-m-e-span5"
            onMouseEnter={(e) => {
              e.target.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#5e4300";
            }}
          >
            L
          </span>
          <span
            class="n-a-m-e-span6"
            onMouseEnter={(e) => {
              e.target.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#5e4300";
            }}
          >
            {" "}
          </span>
          <span
            class="n-a-m-e-span7"
            onMouseEnter={(e) => {
              e.target.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#5e4300";
            }}
          >
            A
          </span>
        </span>
      </div>
      <a
        class="home"
        onMouseEnter={(e) => {
          e.target.style.color = "#000000";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#5e4300";
        }}
        href="/"
      >
        <img className="homeicon" src={homeicon} />
      </a>
      <a
        onMouseEnter={(e) => {
          e.target.style.color = "#000000";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#5e4300";
        }}
        class="resident"

        onClick={(e) => {
          window.location.href = "/signin";
        }}
        href="/signin"
      >
        sign in
      </a>
      <div
        onMouseEnter={(e) => {
          e.target.style.color = "#000000";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#5e4300";
        }}
        class="about-us"

        onClick={(e) => {
          window.location.href = "/about";
        }}
      >
        about us
      </div>
      <div
        onMouseEnter={(e) => {
          e.target.style.color = "#000000";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#5e4300";
        }}

        onClick={(e) => {
          window.location.href = "/signup";
        }}
        class="sign-in"
        href="/signup"
      >
        sign up
      </div>
    </div>
  );
}
