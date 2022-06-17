// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0

import React from 'react';
import {Row} from 'antd';

const ProjectCardFooter = (props) => {
    return (
          <Row direction="row" style={{display: 'flex'}}>  
          <p>Created At: {props.createdAt} </p>
          <p style={{marginLeft:"50px"}}>Created by : {props.createdBy}</p>
          </Row>
    )
}
export default ProjectCardFooter