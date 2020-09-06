import React from 'react'
import { App } from './App';
import { Box } from './Box';

const Box3 = () => {
    return(
        <Box>
            <img src='https://zerodha.com/static/images/products-coin.png' alt='coin'/>
            <div>
                <h1>Coin</h1>
                <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                <a href='/products'>Coin <span>&#8594;</span></a>
                <App>
                    <img src='https://zerodha.com/static/images/google-play-badge.svg' alt='google'/>
                    <img src='https://zerodha.com/static/images/appstore-badge.svg' alt='apple'/>
                </App>
            </div>
        </Box>
    );
}
export default Box3