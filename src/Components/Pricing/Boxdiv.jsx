import React from "react";
import { Link } from "react-router-dom";
import { Signup } from "./Signup";
import { Box } from "./Box";
export const Boxdiv = () => (
  <Box>
    <h1>Open a Zerodha account</h1>
    <div>{`Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades.`}</div>

    <Link
      style={{
        padding: "20px 0px",
        textDecoration: "none",
        color: "rgb(133, 133, 133)",
      }}
      to="/signup"
    >
      <Signup>Sign up now</Signup>
    </Link>
  </Box>
);
