import React from 'react'
import styled from 'styled-components'

const NavbarWrapper = styled.div`

padding: 10px;
font-size: 1.5rem;
box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.25);
background-color:#1c1c1c;

`;

const AppName = styled.span`
 margin-left: 30px;
 background: linear-gradient(45deg, #891dfd, #aa0361);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const Bold = styled.span`
    font-weight: 700;
   
`



const Navbar = () => {
    return (
       <NavbarWrapper>
           <AppName> Carbon <Bold > Zero </Bold></AppName>
       </NavbarWrapper>
      
    )
}


export default Navbar