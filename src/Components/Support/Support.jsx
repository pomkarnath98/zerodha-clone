import React from "react";
import { Icondiv } from "./Icondiv";
import { Bottomicon } from "./Bottomicon";
import { Desc } from "./Desc";
import { Bottomflex } from "./Bottomflex";
import { Bottom } from "./Bottom";
import { BelowInput } from "./BelowInput";
import { Flexbox } from "./Flexbox";
import { Icon } from "./Icon";
import { Searchdiv } from "./Searchdiv";
import { Input } from "./Input";
import { Inputdiv } from "./Inputdiv";
import { InputBox } from "./InputBox";
import { Kite } from "./Kite";
import { Portal } from "./Portal";
import { Box } from "./Box";
import { Top } from "./Top";

export default function Support() {
  return (
    <div>
      <Top>
        <Box>
          <Portal>Support Portal</Portal>
          <Kite>Login with Kite</Kite>
          <InputBox>
            <Searchdiv>
              Search for an answer or browse help topics to create a ticket
            </Searchdiv>

            <Inputdiv>
              <Input
                type="text"
                placeholder={`Eg: how do i activate F&O, why is my order getting rejected ...`}
              />
              <Icon
                src="https://support.zerodha.com/static/images/search.png"
                alt="search"
              />
            </Inputdiv>

            <Flexbox>
              <BelowInput>Track account opening</BelowInput>
              <BelowInput>Track segment activation</BelowInput>
              <BelowInput>Intraday margins</BelowInput>
            </Flexbox>
          </InputBox>
        </Box>
      </Top>

      <Bottom>
        <Desc>To create a ticket, select a relevant topic</Desc>
        <Bottomflex>
          <Icondiv>
            <Bottomicon src="./plus.svg" alt="plus" />
            <span>Account Opening</span>
            <div>Online Account Opening</div>
            <div>Offline Account Opening</div>
            <div>Company, Partnership and HUF Account Opening</div>
            <div>NRI Account Opening</div>
            <div>Charges at Zerodha</div>
            <div>Zerodha IDFC FIRST Bank 3-in-1 Account</div>
            <div>Getting Started</div>
          </Icondiv>

          <Icondiv>
            <Bottomicon src="./user.svg" alt="user" />
            <span>Your Zerodha Account</span>
            <div>Login Credentials</div>
            <div>Account Modification and Segment Addition</div>
            <div>DP ID and bank details</div>
            <div>Your Profile</div>
            <div>Transfer and conversion of shares</div>
          </Icondiv>

          <Icondiv>
            <Bottomicon src="./trade.png" alt="trade" />
            <span>Trading and Markets</span>
            <div>Margin/leverage, Product and Order types</div>
            <div>Kite Web and Mobile</div>
            <div>Trading FAQs</div>
            <div>Corporate Actions</div>
            <div>Sentinel</div>
            <div>Kite API</div>
            <div>Pi and other platforms</div>
            <div>Stockreports+</div>
            <div>Margin reporting and margin penalty</div>
            <div>GTT</div>
          </Icondiv>

          <Icondiv>
            <Bottomicon src="./funds.png" alt="funds" />
            <span>Funds</span>
            <div>Adding Funds</div>
            <div>Fund Withdrawal</div>
            <div>eMandates</div>
            <div>Adding Bank Accounts</div>
          </Icondiv>

          <Icondiv>
            <Bottomicon src="./console.png" alt="console" />
            <span>Console</span>
            <div>Reports</div>
            <div>Ledger</div>
            <div>Profile</div>
            <div>Portfolio</div>
            <div>60 Day Challenge</div>
            <div>IPO</div>
            <div>Referral Program</div>
          </Icondiv>

          <Icondiv>
            <Bottomicon src="./coin.png" alt="coin" />
            <span>Coin</span>
            <div>Understanding Mutual Funds</div>
            <div>About Coin</div>
            <div>Buying and Selling through Coin</div>
            <div>Starting an SIP</div>
            <div>Managing your Portfolio</div>
            <div>Coin App</div>
            <div>Moving to Coin</div>
            <div>Government Securities</div>
          </Icondiv>
        </Bottomflex>
      </Bottom>
    </div>
  );
}
