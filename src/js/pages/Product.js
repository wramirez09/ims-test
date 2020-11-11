import React from 'react';
import { Card, Button } from 'react-bootstrap/';
import image from '../../images/images.jpg';
export default function Product() {
    return (
        <div>
            <Card.Img variant="top" src={image} width="215px" height="215px" />
            <Card className="text-center">
                <Card.Header>Featured Product</Card.Header>
                <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                    <Card.Text>lorem ipsum</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
}
