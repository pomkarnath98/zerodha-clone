import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const FlexBox = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex:1;
    padding-top: 100px;
    padding-left: 80px;
`;

const Right = styled.div`
    flex: 1;
    padding-top: 130px;
    & > * {
        padding-top: 30px;
        width: 520px;
    }
    & > :nth-child(1) {
        font-size: 24px;
    }
`;

const Section5 = () => (
    <FlexBox>
        <Left>
            <img src='./index-education.svg' alt='indexEducation'/>
        </Left>
        
        <Right>
            <div>Free and open market education</div>
            <div>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</div>
            <Link to='#' style={{textDecoration:'none'}}>Varsity <span>&rarr;</span></Link>
            <div>{`TradingQ&A, the most active trading and investment community in India for all your market related queries.`}</div>
            <Link to='#' style={{textDecoration:'none'}}>{`TradingQ&A`} <span>&rarr;</span></Link>
        </Right>
    </FlexBox>
)
export default Section5