import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import paisaje from '../assets/img/campo1.jpg'
import mar from '../assets/img/mar1.jpg'
import nubes from '../assets/img/nubes1.jpg'
import atardecer from '../assets/img/sol1.jpg'

const Cards = () => {
  return (
    <CardGroup>
      <Row xs={1} md={3}  >
        <Col>
        <Card  className="bg-dark text-white" >
        <Card.Img variant="top" src= {paisaje} style={{ height: '23rem' }} />
        <Card.Body>
          <Card.Title className="row justify-content-center">Puesta de Sol</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </Col>
      <Col>
      <Card  className="bg-dark text-white">
        <Card.Img variant="top" style={{ height: '23rem' }} src={mar} />
        <Card.Body>
          <Card.Title className="row justify-content-center">Corazón Tropical</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </Col>
      <Col>
      <Card  className="bg-dark text-white">
        <Card.Img variant="top" style={{ height: '23rem' }} src={nubes} />
        <Card.Body>
          <Card.Title className="row justify-content-center">Amanecer del Mar</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </Col>
      <Col>
      <Card className="bg-dark text-white">
        <Card.Img variant="top" style={{ height: '23rem' }} src={atardecer} />
        <Card.Body>
          <Card.Title className="row justify-content-center">Atardecer en la Sabana</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </Col>
      </Row>
    </CardGroup>
  )
}

export default Cards