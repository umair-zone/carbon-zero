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


