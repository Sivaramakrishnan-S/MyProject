import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Mainproject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'KingSRK CarDOC',
      message1: '',
    };
  }

  render() {
    return (
      <center>
        <div className='Cartop'>
          <h1 className='logo'>{this.state.message}</h1>
          <h6>“---|Online Car Services|---”</h6>
          <div>
            <Navbar bg='dark' variant='dark'>
              <Container>
                <Link to='/Mainproject' className='navbar-brand'>
                  Home
                </Link>
                <Nav className='me-auto'>
                  <Link to='/Service' className='nav-link'>
                    Services
                  </Link>
                  <Link to='/Shop' className='nav-link'>
                    Shop
                  </Link>
                  <Link to='/About' className='nav-link'>
                    About
                  </Link>
                  <Link to='/Contact' className='nav-link'>
                    Contact
                  </Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
        </div>
        <div className='navigation-bg'>
          <Card className='bg-dark text-white border-0'>
            <Card.Img
              src='https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              className='card-img'
              alt='Background'
              height='550px'
            />
            <Card.ImgOverlay>
              <div className='container'></div>
              <Card.Title>
                <h1>
                  <b>Welcome To KingSRK CarDoc!!</b>
                </h1>
              </Card.Title>
              <Card.Text>
                <h3>Have A Look of Our Website..,</h3>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </center>
    );
  }
}

export default Mainproject;
