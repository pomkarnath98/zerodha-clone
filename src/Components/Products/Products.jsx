import React from 'react';
import styled from 'styled-components';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import Box5 from './Box5';
import Box6 from './Box6';
import Bottom from './Bottom';

const Invest = styled.h1`
    color: #666;
`;

const Head = styled.div`
    display: flex;
    width: 525px;
    margin: auto;
    & > *{
        text-align: center;
        padding-right: 10px;
        font-size: 40px;
    }
    & ~ p{
        text-align: center;
        font-size: 20px;
        & > a{
            text-decoration: none;
            color: #1762c4;
        }
    }
`;

const Desc = styled.div`
    font-size: 20px;
    text-align: center;
`;

const Breakline = styled.hr`
  margin: 100px;
  height: 1px;
  background-color: #eee;
  border: none;
`;

export default function Products(){
    return(
        <div>
            <Head>
                <h1>Technology – </h1> <Invest>Investments</Invest>
            </Head>
            <Desc>Sleek, modern, and intuitive trading platforms</Desc>

            <Breakline />

            <Box1/>
            <Box2/>
            <Box3/>
            <Box4/>
            <Box5/>
            <Box6/>

            <p>Want to know more about our technology stack? Check out the <a href='/products'>Zerodha.tech</a> blog.</p>
            <Bottom/>
        </div>
    );
}