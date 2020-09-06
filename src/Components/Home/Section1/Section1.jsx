import React from 'react';
import { Link } from 'react-router-dom';
import { Landing } from "./Landing";
import { Section1Div } from "./Section1Div";
import { Head } from "./Head";
import { Sec1P3 } from "./Sec1P3";
import { Sec1P4 } from "./Sec1P4";
export const Section1 = () => (<Section1Div>
    <Landing src='./landing.png' alt='landing' />
    <Head>Invest in everything</Head>
    <Sec1P3>Online platform to invest in stocks, derivatives, mutual funds, and more</Sec1P3>
    <Link style={{ padding: '20px 0px', textDecoration: 'none', color: 'rgb(133, 133, 133)' }} to='/signup'>
        <Sec1P4>Sign up now</Sec1P4>
    </Link>
</Section1Div>);
