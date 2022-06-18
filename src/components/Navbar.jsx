// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0

import { Button, Col, Row } from 'antd';
import React from 'react'
import styled from 'styled-components'

const NavbarWrapper = styled(Row)`

padding: 10px;
font-size: 1.5rem;
box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.25);
background-color:#1c1c1c;

`;

const AppName = styled(Col)`
 margin-left: 30px;
 background: linear-gradient(45deg, #891dfd, #aa0361);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const Bold = styled.span`
    font-weight: 700;
   
`
const User = styled.div`
    display: flex;
    justify-content: right;
    color: white;
    font-size : 1rem;
    padding: 5px;
`


const Navbar = ({user , logout}) => {
    return (
       <NavbarWrapper>
           <AppName> Carbon <Bold > Zero </Bold></AppName>
            <Col offset={16} span={4}> <User>Hi , {user}  </User> </Col>
            <Button onClick={logout} ghost style={{margin:"5px"}} size="small">Logout</Button>    
       </NavbarWrapper>
      
    )
}


export default Navbar