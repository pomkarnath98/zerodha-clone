import React from 'react'
import { App } from './App';
import { Box } from './Box';

const Box5 = () => {
    return(
        <Box>
            <img src='https://zerodha.com/static/images/varsity-products.png' alt='varsity'/>
            <div>
                <h1>Varsity mobile</h1>
                <p>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
                <App>
                    <img src='https://zerodha.com/static/images/google-play-badge.svg' alt='google'/>
                    <img src='https://zerodha.com/static/images/appstore-badge.svg' alt='apple'/>
                </App>
            </div>
        </Box>
    );
}
export default Box5