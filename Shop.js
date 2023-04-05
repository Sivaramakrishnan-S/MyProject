import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Shop.css';

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          name: 'Car Cover',
          price: 30,
          img: 'https://images.pexels.com/photos/7434597/pexels-photo-7434597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: 2,
          name: 'Steering Wheel Cover',
          price: 15,
          img: 'https://images.pexels.com/photos/14667491/pexels-photo-14667491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: 3,
          name: 'Car Air Freshener',
          price: 5,
          img: 'https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
    };
  }

  render() {
    return (
      <div className="Shop">
        <Container>
          <h1>Shop</h1>
          <div className="cards">
            {this.state.items.map((item) => (
              <Card key={item.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
