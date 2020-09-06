import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home';
import About from '../About/About';
import Products from '../Products/Products';
import Pricing from '../Pricing/Pricing';
import Support from '../Support/Support';
import Signup from '../Signup/Signup';
import Footer from '../Footer/Footer';
import { Div } from './Div';

export default function Routing(){
    return(<Div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/signup" component={Signup} />
        <Footer />
    </Div>);
}