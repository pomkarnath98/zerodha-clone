import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Box = styled.div`
    & > * {
        text-align: center;
        margin: auto;
    }
`;

const Signup = styled.div`
    padding: 5px 15px;
    color: white;
    margin: 30px auto;
    border-radius: 3px;
    background: #1762c4;
    width: 140px;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    :hover{
        background: black;
    }
`;

const Flexbox = styled.div`
    display: flex;
    margin: 50px auto;
    width: 740px;
    & > *{
        padding-right: 60px;
        width: 140px;
    }
`;

const Bottom = () => {
    return(
        <Box>
            <h1>The Zerodha Universe</h1>
            <div>Extend your trading and investment experience even further with our partner platforms</div>
            <Flexbox>
                <img src='https://zerodha.com/static/images/products/smallcase-logo.png' alt='smallcase'/>
                <img src='https://zerodha.com/static/images/products/streak-logo.png' alt='streak'/>
                <img src='https://zerodha.com/static/images/products/sensibull-logo.svg' alt='sensibull'/>
                <img src='https://zerodha.com/static/images/products/goldenpi-logo.png' alt='goldenpi'/>
            </Flexbox>
            <Link style={{ padding: '20px 0px', textDecoration: 'none', color: 'rgb(133, 133, 133)' }} to='/signup'>
                <Signup>Sign up now</Signup>
            </Link>
        </Box>
    );
}
export default Bottom