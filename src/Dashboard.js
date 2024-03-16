import "./fonts/MSignUp.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import StoreBox from "./StoreBox";

import Modal from "react-modal";
import {
  StyledFrame11,
  Rectangle20,
  Group422,
  Givemoneyremovebgpreview,
  Group42,
  Custom1,
  Group412,
  Shopremovebgpreview,
  Group41,
  Custom3,
  Group432,
  Settingremovebgpreview,
  Group43,
  Custom2,
  Group40,
  Image11,
  Rectangle19,
  EmailToYou,
} from "./onestore";
function Dashboard() {
  const location = useLocation();
  const history = useNavigate();
  const [link, setLink] = useState("");
  const [id, setID] = useState("");
  const [stores, setStores] = useState([]);

  useEffect(() => {
    if (location.state) {
      setLink(location.state.link);
      setID(location.state.id);
      axios
        .post("http://localhost:4000/api/merchant/getstores", {
          id: location.state.id,
        })
        .then((res) => {
          setStores(res.data);
          console.log(stores);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("hfudhs");
      history("/signin");
    }
  }, [location.state]);
  console.log(link);

  function handleClick2() {
    window.location.href = link;
  }

  return (
    <StyledFrame11>
      <Rectangle20>
        <Group422 onClick={handleClick2}>
          <Givemoneyremovebgpreview
            backgroundImage={`https://assets.rapidream.com/project/93baa0b4-cfcc-40ab-ad81-37058e369265/assets/96aee349-8a67-4f55-b7f1-afe37ba4dc74.png`}
          />
        </Group422>
        <Group42 onClick={handleClick2}>
          <Custom1>Earnings and Transcations</Custom1>
        </Group42>
        <Group412>
          <Shopremovebgpreview
            backgroundImage={`https://assets.rapidream.com/project/93baa0b4-cfcc-40ab-ad81-37058e369265/assets/7ad09339-f51e-42b4-a3e8-2d7051c3db8d.png`}
          />
        </Group412>
        <Group41>
          <Custom3>Store Manager</Custom3>
        </Group41>
        <Group432>
          <Settingremovebgpreview
            backgroundImage={`https://assets.rapidream.com/project/93baa0b4-cfcc-40ab-ad81-37058e369265/assets/40a8ef2c-ec38-40c4-8677-d0d1f73cabe1.png`}
          />
        </Group432>
        <Group43>
          <Custom2>Settings</Custom2>
        </Group43>
      </Rectangle20>
      <Group40>
        <div style={{
            marginLeft: '-200%',
            marginRight: '200%'
        }}>
          {stores.map((store, index) => (
            <StoreBox key={index} store={store} />
          ))}{" "}
        </div>

        <div>
          <Image11
            backgroundImage={`https://assets.rapidream.com/project/93baa0b4-cfcc-40ab-ad81-37058e369265/assets/f575d0c9-2292-4eec-b08e-fc43576533eb.png`}
          />
          <Rectangle19>
            <EmailToYou>Email to You</EmailToYou>
          </Rectangle19>
        </div>
      </Group40>
    </StyledFrame11>
  );
}
export default Dashboard;
