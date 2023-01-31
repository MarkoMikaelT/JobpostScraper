import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiamond} from '@fortawesome/free-solid-svg-icons'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import React from 'react'

function Header() {
  return (
    <Navbar>
        <Container fluid>
            <Navbar.Brand href='/'>
                <FontAwesomeIcon icon={faDiamond}></FontAwesomeIcon>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarscroll'></Navbar.Toggle>
            <Navbar.Collapse id='navbarScroll'>
                <Nav className='me-auto my-2 my-lg-0' style={{maxHeight: '100px'}} navbarScroll>
                    <NavLink className='nav-link' to="/">Home</NavLink>
                    <NavLink className='nav-link' to="/graphs">Graphs</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
