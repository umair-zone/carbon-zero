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
               onClick={props.onClick} 
               style={{marginLeft:'10px' }}
                >{props.title}
               </StyledButton>           
               </>
          );
}
      
export default RouteButton;