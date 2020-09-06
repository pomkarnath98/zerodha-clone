import React from 'react'
import styled from 'styled-components'

const Flexbox = styled.div`
    display: flex;
    margin: 180px 130px;
    & > div{
        margin-left: 145px;
    }
`;

const UlBox = styled.div`
    display: flex;
    &>*{
        flex: 1;
    }
`;

const UL = styled.ul`
    margin-left: -20px;
`;

const PressLogo = styled.img`
    width: 550px;
`;

const Section2 = () => (
    <Flexbox>
        <img src="./largest-broker.svg" alt='largestbroker'/>
        <div>
            <h1>Largest stock broker in India</h1>
            <div>3+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</div>
            <UlBox>
                <UL>
                    <li>Futures and Options</li>
                    <li>Commodity derivatives</li>
                    <li>Currency derivatives</li>
                </UL>
                <UL>
                    <li>{`Stocks & IPOs`}</li>
                    <li>Direct mutual funds</li>
                    <li>Bonds and Govt. Securities</li>
                </UL>
            </UlBox>
            <PressLogo src='./press-logos.png' alt='press-logos'/>
        </div>
    </Flexbox>
)

export default Section2;