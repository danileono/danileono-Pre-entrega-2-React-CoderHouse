import React, { useEffect, useState } from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


const NavigationBar = () => {
  const [categorias, setCategorias] = useState([])


  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategorias(json))
  }, [])

  
  return (

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                  <h1>Mi tienda</h1> 
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mx-5">
                        {categorias.length > 0 && categorias.map(e => (
                            <Nav.Link key={e} as={Link} to={`/categoria/${e}`}>
                                {e}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <CartWidget />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    
    
  )
}

export default NavigationBar