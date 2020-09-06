import React from 'react'
import { App } from './App';
import { Box } from './Box';

const Box1 = () => {
    return(
        <Box>
            <img src='https://zerodha.com/static/images/products-kite.png' alt='kite'/>
            <div>
                <h1>Kite</h1>
                <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                <a href='/products'>Learn more <span>&#8594;</span></a>
                <App>
                    <img src='https://zerodha.com/static/images/google-play-badge.svg' alt='google'/>
                    <img src='https://zerodha.com/static/images/appstore-badge.svg' alt='apple'/>
                </App>
            </div>
        </Box>
    );
}
export default Box1