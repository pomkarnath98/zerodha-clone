import React from "react";
import { Flexbox } from "./Flexbox";
export const FlexDiv = () => (
  <Flexbox>
    <div>
      <img
        src="https://zerodha.com/static/images/pricing-eq.svg"
        alt="pricing-eq"
      />
      <h2>Free equity delivery</h2>
      <p>
        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0
        brokerage.
      </p>
    </div>

    <div>
      <img
        src="https://zerodha.com/static/images/other-trades.svg"
        alt="other-trades"
      />
      <h2>{`Intraday and F&O trades`}</h2>
      <p>
        Flat Rs.20 or 0.03% (whichever is lower) per executed order on intraday
        trades across equity, currency, and commodity trades.
      </p>
    </div>

    <div>
      <img
        src="https://zerodha.com/static/images/pricing-eq.svg"
        alt="pricing-eq"
      />
      <h2>Free direct MF</h2>
      <p>{`All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.`}</p>
    </div>
  </Flexbox>
);
