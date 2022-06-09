import { Button} from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
     backgroundColor:#dcdcdc,
     padding:5px,
     alignSelf:flex-end,
     marginLeft:10px,
     width:150px,
`;


const RouteButton = (props) => {

     return (
               <>
               <StyledButton key="1" 
               onClick={props.onClick} 
               
               style={{         
                backgroundColor:'#dcdcdc',
                padding:'5px',
                alignSelf:'flex-end',
                marginLeft:'10px',
                width:'150px',
                }}
                
                >{props.title}
               </StyledButton>           
               </>
          );
}
      
export default RouteButton;