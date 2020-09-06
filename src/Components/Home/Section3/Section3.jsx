import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Head = styled.div`
    width: 480px;
    /* text-align: center; */
    margin: auto;
`;

const Box = styled.div`
    text-align: center;
    margin-bottom: 150px;
    & > * {
        margin-bottom: 20px;
    }
`;

const Description = styled.div`
    font-size: 20px;
    margin-top: 0px;
`;

const Section3 = () => (
    <Box>
        <Head>
            <h1>The Zerodha Universe</h1>
            <Description>A whole ecosystem of modern investment apps tailored to specific needs, built from the ground up</Description>
        </Head>
        <img width='1000px' src='ecosystem.png' alt='ecosystem'/>
        <div>
            <Link to='/products' style={{textDecoration: 'none'}}>Explore our products <span>&rarr;</span></Link>
        </div>
    </Box>
)

export default Section3