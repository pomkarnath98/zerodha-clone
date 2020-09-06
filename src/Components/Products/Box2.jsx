import React from 'react'
import { Box } from './Box';

const Box2 = () => {
    return(
        <Box>
            <div>
                <h1>Console</h1>
                <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                <a href='/products'>Learn more <span>&#8594;</span></a>
            </div>
            <img src='https://zerodha.com/static/images/products-console.png' alt='console'/>
        </Box>
    );
}
export default Box2