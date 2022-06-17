// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0
import { Button} from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
     marginLeft:10px,
`;


const RouteButton = (props) => {

     return (
               <>
               <StyledButton key="1" 
               size='large'
               onClick={props.onClick} 
               type={props.btnType}
               style={{marginLeft:'10px' }}
                >{props.title}
               </StyledButton>           
               </>
          );
}
      
export default RouteButton;