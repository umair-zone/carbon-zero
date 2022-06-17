// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0
import React from 'react'
import { Typography ,  } from 'antd'
import styled from 'styled-components'

const {Title} = Typography

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    margin-bottom:10px;
`


const ProjectHeader = ({projectName , projectType , projectDescription}) => {
    return (
    <Wrapper>
        <Title level={2} > {projectName}- {projectType}</Title>
            <p> {projectDescription}</p>  
    </Wrapper>
    
    )

}

export default ProjectHeader


