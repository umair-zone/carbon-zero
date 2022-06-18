import { Button , Row , Col , Typography} from "antd"

const {Title} = Typography

const Welcome = ({login})=> {


    return (<>
    <Row align="middle" style={{height:"100vh"}}>
       <Col offset={6} span={12}>
            <Title style={{textAlign:"center"}}>Achive carbon neurality with <div> Carbon Zero </div></Title>
            <Button block  type="primary" size="large" onClick={()=>login()}> Login with Microsoft</Button>
       </Col> 
    </Row>
    </>)
}

export default Welcome