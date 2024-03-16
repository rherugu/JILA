import React from "react";
import "./App.css";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import backgroundImage from './images/download.png'; // Import the image
import {
  StyledFrame10,
  Rectangle16,
  TitlePage3,
  UnderstandingRebatePercentagesFo,
  NTheRebatePercentageIsThePor,
  Arrow1,
  TitlePage4,
  Arrow2,
  Group39,
  ImDone,
  TitlePage,
  TitlePage2,
  SetARebatePercentage,
  NYouCanChangeThisLater,
  Group37,
  EnterStoreName,
  Group33,
  N5minimum,
  Titlepage,
  Group38,
  Address,
  Group34,
  Rectangle175,
  N75,
  Rectangle18,
  N10,
  Screenshot20231109At7281,
  SameAddressEnteredPreviously,
  Group35,
  Rectangle176,
  N125,
  Rectangle182,
  N15,
  Group36,
  Custom,
  Screenshot20240305At6411,
} from "./onestore";
import {Button} from '@stripe/ui-extension-sdk/ui';

function MDash() {
  const location = useLocation();
  const history = useNavigate();
  const [link, setLink] = useState("");
  const [btn1, setbtn1] = useState(false);
  const [btn2, setbtn2] = useState(false);
  const [btn3, setbtn3] = useState(false);
  const [btn4, setbtn4] = useState(false);
  const [btn5, setbtn5] = useState(false);
  const [bname, setbname] = useState("");
  const [btn6, setbtn6] = useState(false);
  const [custom, setCustom] = useState("");
  const [address, setAddress] = useState("");
  const [sa, setsa] = useState(true);
  const [fa, setfa] = useState("");
  const [ID, setID] = useState(location.state.id);
  const [previousaddy, setpreviousaddy] = useState(location.state.address);
  useEffect(() => {
    if (location.state) {
      setLink(location.state.link);
    } else {
      history("/signin");
    }
    setfa(previousaddy);
  }, [location.state]);
  console.log(link);

  const btn1click = () => {
    setbtn1(!btn1);
    setbtn2(false);
    setbtn3(false);
    setbtn4(false);
    setbtn5(false);
    setCustom("");
  };

  const btn2click = () => {
    setbtn2(!btn2);
    setbtn1(false);
    setbtn3(false);
    setbtn4(false);
    setbtn5(false);
    setCustom("");
  };
  
  const btn3click = () => {
    setbtn3(!btn3);
    setbtn2(false);
    setbtn1(false);
    setbtn4(false);
    setbtn5(false);
    setCustom("");
  };
  
  const btn4click = () => {
    setbtn4(!btn4);
    setbtn2(false);
    setbtn3(false);
    setbtn1(false);
    setbtn5(false);
    setCustom("");
  };
  
  const btn5click = () => {
    setbtn5(!btn5);
    setbtn2(false);
    setbtn3(false);
    setbtn4(false);
    setCustom("");
    setbtn1(false);
  };
  const btn6click = () => {
    setbtn6(!btn6);
    if (btn1 == false && btn2 == false && btn3 == false && btn4 == false&& btn5 == false && custom == "") {
        alert("Please choose a rebate percentage");
    } 
    else if (bname == "" || address == "" && sa == false) {

            alert("Please fill in all the specified fields.")
    } else if (address == "" && sa == true) {
        setfa(previousaddy);

    } else if (sa == false) {
        setfa(address);
    } 
   let rebatval;
if (btn1) {
    rebatval = 5;
  } else if (btn2) {
    rebatval = 7.5;
  } else if (btn3) {
    rebatval = 10;
  } else if (btn4) {
    rebatval = 12.5;
  } else if (btn5) {
    rebatval = 15;
  } else {
    
    rebatval = custom;
  }
   console.log(location.state)
    axios.post("http://localhost:4000/api/merchant/addstore", {
      bname: bname,
      grossRebatePercentage: rebatval,
      address: fa,
      ID: ID,

    }).then((res) => {
      console.log(res);
      history("/dbm", {
        state: {
          id: ID,
          link: link
        },
      });
    }).catch((err) => {
      alert(err)
    })
    
  }; 

  return (
    <StyledFrame10>
      <TitlePage>You’re almost done...</TitlePage>
      <TitlePage2>
        <SetARebatePercentage>{`Set a rebate percentage:`}</SetARebatePercentage>
        <br></br> <br></br> 
        <NYouCanChangeThisLater>
          (You can change this later)
        </NYouCanChangeThisLater>
      </TitlePage2>
      <Group37>
        <EnterStoreName>
          <input
            class="input33"
            style={{
              textAlign: "center",
              color: "black",
            }}
            onChange={(e) => {
                setbname(e.target.value);
            }}
            placeholder="Enter Store Name"
          />
        </EnterStoreName>
      </Group37>
      <Group33 clicked={btn1} onClick={btn1click}>
        <N5minimum clicked={btn1}>5% (MINIMUM)</N5minimum>
      </Group33>
      <Titlepage>Create your first store</Titlepage>
      <Group38>
        <Address> <input
            class="input33"
            style={{
              textAlign: "center",
              color: "black",
            }} onChange={(e) => {
                setAddress(e.target.value);
            }}
            disabled={sa}
            placeholder="Address"
          /></Address>
      </Group38>
      <Group34>
        <Rectangle175  clicked={btn2} onClick={btn2click}>
          <N75 clicked={btn2}>7.5%</N75>
        </Rectangle175>
        <Rectangle18  clicked={btn3} onClick={btn3click}>
          <N10 clicked={btn3}>10%</N10>
        </Rectangle18>
      </Group34>
     
      <SameAddressEnteredPreviously>
        <div class="checkbox-wrapper-1">
            <input
              id="example-1"
              class="substituted"
              type="checkbox"
              aria-hidden="true"
              checked={sa}
              onChange={(e) => {
                setsa(e.target.checked);
                setfa()
            }}
            
            />
            <label class="textnoselect" for="example-1">
        Same Address entered previously</label>
          </div>
      </SameAddressEnteredPreviously>
      <Group35>
        <Rectangle176 clicked={btn4} onClick={btn4click}>
          <N125 clicked={btn4}>12.5%</N125>
        </Rectangle176>
        <Rectangle182 clicked={btn5} onClick={btn5click}>
          <N15 clicked={btn5}>15%</N15>
        </Rectangle182>
      </Group35>
      <Group36>
        <Custom><input
            class="input33"
            style={{
              textAlign: "center",
              color: "black",
            }}
            value={custom}
            onChange={(e) => {
                setbtn1(false)
                setbtn2(false)
                setbtn3(false)
                setbtn4(false)
                setbtn5(false)
                setCustom(e.target.value)
            }}
            placeholder="Custom"
          /></Custom>
      </Group36>
      <Screenshot20240305At6411
        backgroundImage={backgroundImage}
      />
      <Rectangle16>
        <TitlePage3>
          <UnderstandingRebatePercentagesFo>
            Understanding Rebate Percentages: For Merchants:
          </UnderstandingRebatePercentagesFo>
          <NTheRebatePercentageIsThePor>
            {" "}
            {"                                     "}The rebate percentage is
            the portion of a sale that is returned to the customer as a rebate
            or cashback. It's the percentage of the total purchase price that
            customers get back after making a purchase. For example, if the
            rebate percentage is 5% and a customer spends $100, they would
            receive $5 back as a rebate. Setting the rebate percentage
            effectively determines how much incentive you're offering customers
            to make purchases from your business.{" "}
          </NTheRebatePercentageIsThePor>
        </TitlePage3>
        <Arrow1 />
        <TitlePage4>
          Here's the gist: Customers scan a QR code displayed by you, enter
          their bill amount (let's say $100), and pay in full. You receive the
          full payment, and with a click, send back 10% ($10) to the customer as
          a rebate, while 2% ($2) goes to us. Customers can track their savings
          and cash out to their bank accounts or apply it to property tax
          rebates. It's a win-win, boosting customer loyalty and streamlining
          the process for everyone involved.
        </TitlePage4>
        <Arrow2 />
        <Group39  clicked={btn6} onClick={btn6click}>
          <ImDone clicked={btn6} >IM DONE!</ImDone>
        </Group39>
      </Rectangle16>
    </StyledFrame10>
  );
}

export default MDash;
