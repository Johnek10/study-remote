import React from 'react';
import { Logo, StyledLink, Wrapper } from './Navigation.styles';

const Navigation=()=>{
    console.log('pupa')
    return(
        <Wrapper>
            <Logo>
                <h1>
                    Study
                    <br />
                    Remote
                </h1>
            </Logo>
            <StyledLink to="/">Dashboard</StyledLink>
            <StyledLink to="/add-user">Add user</StyledLink>
            <StyledLink to="/">Logout</StyledLink>
        </Wrapper>
    )
}

export default Navigation;