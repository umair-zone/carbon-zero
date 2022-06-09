import {Modal } from 'antd';
import React, { useState } from 'react';
import PopupForm from '../components/PopupForm';
import RouteButton from './RouteButton';

const ProjectButton = (props) => {
     const [isModalVisible, setIsModalVisible] = useState(false);

     const showModal = () => {
       setIsModalVisible(true);
     };
   
     const handleOk = () => {
       setIsModalVisible(false);
     };
   
     const handleCancel = () => {
       setIsModalVisible(false);
     };
     
     return (
               <>
               <RouteButton title={props.title} onClick={showModal} />
               <Modal title={props.modaltitle} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <PopupForm/>
               </Modal>               
               </>
          );
}
      
export default ProjectButton;