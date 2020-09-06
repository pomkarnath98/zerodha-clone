import React from "react";
import { Link } from "react-router-dom";
import { Flexbox } from "./Flexbox";
import { Head } from "./Head";
import { Desc } from "./Desc";
import { Continue } from "./Continue";
import { Secdesc } from "./Secdesc";
import { Thdesc } from "./Thdesc";
import { Number } from "./Number";

export default function Signup() {
  return (
    <div>
      <Head>
        <h1>{`Join 3+ million investors & traders`}</h1>
      </Head>
      <Desc>
        Open a trading and Demat account online and start investing for free
      </Desc>

      <Flexbox>
        <img
          src="https://zerodha.com/static/images/account_open.png"
          alt="account_open"
        />
        <div>
          <h1>Signup now</h1>
          <Secdesc>Or track your existing application</Secdesc>
          <Number>
            <div>+91</div>
            <input type="text" placeholder="Your 10 digit mobile number" />
          </Number>
          <Thdesc>You will receive an OTP on your number</Thdesc>

          <Link
            style={{
              padding: "20px 0px",
              textDecoration: "none",
              color: "rgb(133, 133, 133)",
            }}
            to="/signup"
          >
            <Continue>Continue</Continue>
          </Link>
          <Link style={{ color: "#1762c4", fontSize: "13px" }}>
            Want to open an NRI account?
          </Link>
        </div>
      </Flexbox>
    </div>
  );
}
