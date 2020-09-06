import React from "react";
import { Breakline } from "./Breakline";
import { Desc } from "./Desc";
import { Head } from "./Head";
import { FlexDiv } from "./FlexDiv";
import { Boxdiv } from "./Boxdiv";
import { Bottom } from "./Bottom";
import { DownHead } from "./DownHead";

export default function Pricing() {
  return (
    <div>
      <Head>
        <h1>Pricing</h1>
      </Head>
      <Desc>{`Free equity investments and flat ₹20 intraday and F&O trades`}</Desc>
      <Breakline />
      <FlexDiv/>
      <Breakline />
      <Boxdiv/>
      <Bottom>
          <DownHead>
            <div>Brokerage calculator</div>
            <div>List of charges</div>
          </DownHead>
          <ul>
              <li>{`Call & Trade and RMS auto-squareoff: Additional charges of ₹50 per order.`}</li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
              <li>For NRI's: ₹200 or 0.1% (whichever lower) per executed order</li>
              <li>A brokerage charge of 0.25% will be applied on all trades done in any cash-settled commodity contract in the last two days of trading in any expiry.</li>
          </ul>
      </Bottom>
    </div>
  );
}
