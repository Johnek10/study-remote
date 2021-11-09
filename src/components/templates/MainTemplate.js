import React, { Children } from 'react';
import Navigation from 'components/organims/Navigation/Navigation';
import {Wrapper} from 'components/templates/MainTemplate.style'
const MainTemplate=({children})=>{
    console.log(children)
    return(
        <Wrapper>
        <Navigation/>
        {children}
    </Wrapper>
       )
}
  
   
export default MainTemplate;