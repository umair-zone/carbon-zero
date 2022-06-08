import { Button} from 'antd';
import React from 'react';



const RouteButton = (props) => {

     return (
               <>
               <Button key="1" 
               onClick={props.onClick} 
               style={{         
                backgroundColor:'#dcdcdc',
                padding:'5px',
                alignSelf:'flex-end',
                marginLeft:'10px',
                width:'120px',
                }}>{props.title}
               </Button>           
               </>
          );
}
      
export default RouteButton;