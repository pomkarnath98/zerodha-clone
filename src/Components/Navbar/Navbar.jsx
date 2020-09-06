import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const SignUp = styled.div`
    padding: 0px 15px;
    color: white;
    border-radius: 3px;
    background: #1762c4;
    width: 60px;
    text-decoration: none;
    text-align: center;
    :hover{
        background: black;
    }
`;

const activeStyle = {
    fontWeight: 'bold',
    color: '#1762c4'
}

const style = {
    textDecoration:'none', 
    color:'rgb(133, 133, 133)',
    flex: 1
}

const Nav = styled.div`
    position:fixed;
    z-index: 1;
    background:white;
    top: 0px;
    left:0;
    height: 70px;
    border-bottom: 1px solid rgb(226, 224, 224);
    width: 100%;
`;

const FlexBox = styled.div`
    display: flex;
    & > *{
        flex: 1;
    }
`;

const InnerContent = styled.div`
    padding: 20px 0px;
    font-size: 15px;
    :hover{
        color: #1762c4;
    }
`;

const Logo = styled.img`
    width: 130px;
`;

const Mask = styled.img`
    width: 27px;
    margin-left:15px;
`;

const Bar = styled.div`
    background: black;
    height: 2px;
    width: 20px;
    margin: 4px;
`;

const SecondFlex = styled.div`
    flex:1;
    display:flex;
    width: 700px;
    margin-right: 145px;
`;

const Menu = styled.div`
    padding: 23px 0px;
    text-decoration:none;
    color: rgb(133, 133, 133);
    margin-left: 25px;
    :hover{
        cursor:pointer;
    }
`;

export default class Navbar extends Component{
    render(){
        return(
            <Nav>
                <FlexBox>
                    <NavLink style={{padding: '22px 0px',textDecoration:'none',color:'rgb(133, 133, 133)',flex:0,marginLeft:'115px'}} activeStyle={activeStyle} exact to='/'>
                        <Logo src='./logo.svg' alt='logo'/>
                    </NavLink>
                    <NavLink style={{padding: '19px 0px',textDecoration:'none',color:'rgb(133, 133, 133)',flex:1,marginLeft:'0px'}} to='#'>
                        <div style={{display:'flex'}}>
                            <Mask src='./world_mask_week.png' alt='logo'/>
                            <div style={{marginLeft:'5px',fontSize:'14px',marginTop:'3px'}}>#WorldMaskWeek</div>
                        </div>
                    </NavLink>

                    <SecondFlex>
                        
                        <NavLink style={style} activeStyle={activeStyle} to='/about'>
                            <InnerContent>About</InnerContent>
                        </NavLink>

                        <NavLink style={style} activeStyle={activeStyle} to='/products'>
                            <InnerContent>Products</InnerContent>
                        </NavLink>
                        
                        <NavLink style={style} activeStyle={activeStyle} to='/pricing'>
                            <InnerContent>Pricing</InnerContent>
                        </NavLink>
                        
                        <NavLink style={style} activeStyle={activeStyle} to='/support'>
                            <InnerContent>Support</InnerContent>
                        </NavLink>

                        <NavLink style={{padding: '20px 0px',textDecoration:'none',color:'rgb(133, 133, 133)'}} activeStyle={activeStyle} to='/signup'>
                            <SignUp>Sign up</SignUp>
                        </NavLink>

                        <Menu>
                            <Bar />
                            <Bar />
                            <Bar />
                        </Menu>

                    </SecondFlex>
                </FlexBox>
            </Nav>
        );
    }
}