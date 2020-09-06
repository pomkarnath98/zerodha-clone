import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
    margin-left: -5px;
    margin-top: 90px;
    background-color: rgb(245,245,245);
    color: rgb(50,50,50);
`;

const Box = styled.div`
    margin: auto;
    padding: 50px 0px 10px 100px;
`;

const FlexBox = styled.div`
    display: flex;
    & > * {
        flex: 1;
    }
`;

const Description = styled.div`
    font-size: 10px;
    padding-top: 40px;
    padding-right: 190px;
`;

const Number = styled.span`
    font-size:20px;
`;

const NormalFont = styled.div`
    font-size: 13px;
`;

const SocialMedia = styled.img`
    padding-right: 20px;
    padding-top: 20px;
`;

const Para = styled.p`
    padding-bottom: 10px;
`;

const Bottom = styled.div`
    display: flex;
    font-size:12px;
    margin-left: 25%;
    padding: 0px 10px;
    & > * {
        padding-right: 20px;
    }
`;

const Footer = () => (
    <Background>
        <Box>
            <FlexBox>
                <div>
                    <div>
                        <img width='150px' src='/logo.svg' alt='logo'/>
                    </div>
                    <div>
                        <img width='15px' src='./phone.svg' alt='tel'/><Number>{` +91 80 4718 1888`}</Number>
                    </div>
                    <NormalFont>
                        © 2010 - 2020, Zerodha Broking Ltd.
                    </NormalFont>
                    <NormalFont>
                        All rights reserved.
                    </NormalFont>
                    <div>
                        <SocialMedia width='15px' src='twitter.svg' alt='twitter'/>
                        <SocialMedia width='15px' src='facebook.svg' alt='facebook'/>
                        <SocialMedia width='15px' src='instagram.svg' alt='instagram'/>
                        <SocialMedia width='15px' src='linkedin.svg' alt='linkedin'/>
                        <SocialMedia width='15px' src='telegram.svg' alt='telegram'/>
                    </div>
                </div>

                <div>
                    <b>Company</b>
                    <div>About</div>
                    <div>Products</div>
                    <div>Pricing</div>
                    <div>Referral programme</div>
                    <div>Careers</div>
                    <div>Zerodha.tech</div>
                    <div>{`Press & media`}</div>
                    <div>Zerodha Cares (CSR)</div>
                </div>
                
                <div>
                    <b>Support</b>
                    <div>Contact</div>
                    <div>Support Portal</div>
                    <div>Z-Connect blog</div>
                    <div>List of charges</div>
                    <div>{`Downloads & resources`}</div>
                </div>
                
                <div>
                    <b>Account</b>
                    <div>Open an account</div>
                    <div>Fund transfer</div>
                    <div>60 day challenge</div>
                </div>

            </FlexBox>

            <Description>
                <Para>{`Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF`}</Para>
                <Para>{`Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances`}</Para>
                <Para>{`Investments in securities market are subject to market risks; read all the related documents carefully before investing.`}</Para>
                <Para>{`"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.`}</Para>
            </Description>

            <Bottom>
                <div>NSE</div>
                <div>BSE</div>
                <div>MCX</div>
                <div>{`Terms & conditions`}</div>
                <div>{`Policies & procedures`}</div>
                <div>Privacy policy</div>
                <div>Disclosure</div>
            </Bottom>
        </Box>
    </Background>
)
export default Footer