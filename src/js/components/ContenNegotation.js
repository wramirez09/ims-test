import React from 'react'
import {Jumbotron, Button, Container, Row,  Col} from 'react-bootstrap/';
import Axios from "axios"
export default function ContenNegotation() {
    const MESSAGE_BOX_SELECTOR = ".message-holder";
    const messageContainer = document.querySelector(MESSAGE_BOX_SELECTOR);
    const endpoint = "http://localhost:8000/";



    const printMessage = (div, message)=>{

        if(messageContainer){
            console.log(messageContainer, message)
            messageContainer.innerHTML = message.data
        }
        
    }

    const getMessage = async (header)=>{

     
        await Axios({
            method: 'get',
            url: endpoint,
            headers:header
         
        })
            .then((response) => {
                console.log("response", response)
                printMessage(messageContainer, response)
                
            })
            .catch((e) => {
                
            })
        
    }

    return (
        <Jumbotron>
        <h1>Welcome to the home page</h1>
        <hr/>

        <h2>Content Negotation Section</h2>
        <Container>
        <Row>
            <Col xs={12} md={4}>
                <Button onClick={()=>{getMessage({"Content-Type": "text/plain",
                "accept": "text/plain"})}}>Get plain text message</Button>
            </Col>
            <Col xs={12} md={4}>
                <Button onClick={()=>{getMessage({"Content-Type": "text/html",
                "accept": "text/html"})}}>Get HTML message</Button>
                
            </Col>
            <Col xs={12} md={4}>
                <Button onClick={()=>{getMessage({"Content-Type": "application/json",
                "accept": "application/json"})}}>Get JSON message</Button>
            </Col>    
        </Row>

        <div className="message-holder">
            <p>Message</p>
        </div>
        </Container>
    </Jumbotron>
    )
}
