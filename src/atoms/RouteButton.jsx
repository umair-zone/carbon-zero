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