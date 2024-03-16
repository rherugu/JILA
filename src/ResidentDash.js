import "./fonts/MSignUp.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import CountUp from "react-countup";
import { Col, Row, Statistic } from "antd";

import Modal from "react-modal";

const formatter = function (value) {
  return React.createElement(CountUp, { end: value, separator: "," });
};

const formatter2 = function (value) {
  return React.createElement(CountUp, {
    end: value,
    separator: ",",
    prefix: "$",
  });
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ResidentDash() {
  let subtitle;
  const location = useLocation();
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [block, setBlock] = useState("");
  const [lot, setLot] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [textmsgagree, setTextMsgAgree] = useState(false);
  const [program, setProgram] = useState();
  const [rebateTotal, setRebateTotal] = useState();
  const [numberOfTransactions, setNumberOfTransactions] = useState();
  const [taxReductionTotal, setTaxReductionTotal] = useState();
  const [transactions, setTransactions] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    if (location.state) {
      setFirstName(location.state.fname);
      setLastName(location.state.lname);
      setPhoneNumber(location.state.pnum);
      setEmail(location.state.email);
      setPassword(location.state.pass);
      setAddress(location.state.addy);
      setBlock(location.state.block);
      setLot(location.state.lot);
      setZipCode(location.state.zipcode);
      setTextMsgAgree(location.state.textmsgagree);
      setProgram(location.state.program);
      setRebateTotal(location.state.rebateTotal);
      setNumberOfTransactions(location.state.numberOfTransactions);
      setTaxReductionTotal(location.state.taxReductionTotal);
      setTransactions(location.state.transactions);
      setId(location.state.id);
    } else {
      history("/signin");
    }
  }, [location.state]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/resident/transactions/${id}`,
      );

      setTransactions(response.data.transactions);
      setModalVisible(true);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  function handleClick() {
    axios.get("http://localhost:4000/api/resident/register", {
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
    });
  }
  function openModal() {
    setModalVisible(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.current.style.color = "#f00";
  }

  function closeModal() {
    setModalVisible(false);
  }
  return (
    <div class="backgroundresidentDash">
      <div class="restat">
        <div class="restat1">
          <Row gutter={16}>
            <Col span={12}>
              <Statistic
                title="Transactions"
                value={numberOfTransactions}
                formatter={formatter}
                valueStyle={{
                  width: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Money Saved"
                value={taxReductionTotal}
                precision={2}
                formatter={formatter2}
                valueStyle={{
                  width: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </Col>
          </Row>
        </div>
        <button
          class="nstep"
          onClick={fetchTransactions}
          style={{
            marginTop: 100,
            width: "100%",
            padding: 32,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          See previous Transactions
        </button>
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
          {" "}
          {/* Style the contents inside the modal */}
          {transactions && transactions.length > 0 ? (
            transactions.map((transaction) => (
              <div key={transaction._id}>
                <hr></hr>
                <p style={{ marginBottom: "8px" }}>
                  Shop Name: {transaction.shopname}
                </p>
                <p style={{ marginBottom: "8px" }}>
                  Date: {new Date(transaction.date).toLocaleString()}
                </p>
                <p style={{ marginBottom: "8px" }}>
                  Amount Saved: ${transaction.amountSaved}
                </p>
                <p style={{ marginBottom: "8px" }}>
                  Amount Paid: ${transaction.amountPaid}
                </p>
                <hr></hr>
              </div>
            ))
          ) : (
            <p>No transactions available</p>
          )}
        </div>
      </Modal>
    </div>
  );
}
export default ResidentDash;
