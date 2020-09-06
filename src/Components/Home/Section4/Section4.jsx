import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const FlexBox = styled.div`
    display: flex;
    padding: 0px 150px;
    & > div{
        flex: 1; 
    }
`;

const Price = styled.td`
    text-align:center;
    border: 1px solid rgb(210,210,210);
    border-bottom: none;
    width: 50%;
    padding: 15px 20px;
    vertical-align: center;
    text-align: center;
    font-weight: large;
    font-size: 40px;
`;

const Description = styled.td`
    border: 1px solid rgb(210,210,210);
    border-top: none;
    width: 50%;
    padding: 15px 20px;
    vertical-align: top;
    text-align: center;
`;

const Table = styled.table`
    border: 1px solid rgb(210,210,210);
    border-collapse: collapse;
`;

const Section4 = () => (
    <FlexBox>
        <div>
            <h1>Unbeatable pricing</h1>
            <div>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</div>
            <Link to='/pricing' style={{textDecoration:'none'}}>See pricing <span>&rarr;</span></Link>
        </div>
        
        <div>
            <Table>
                <tbody>
                    <tr>
                        <Price><b>₹0</b></Price>
                        <Price><b>₹20</b></Price>
                    </tr>

                    <tr>
                        <Description>Free equity delivery and direct mutual funds</Description>
                        <Description>{`Intraday and F&O`}</Description>
                    </tr>
                </tbody>
            </Table>
        </div>
    </FlexBox>
)
export default Section4