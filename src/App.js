import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Home from "./js/pages/Home"


function App() {
  const menu = [
    {
        link: '/',
        text: 'Home',
    },
    {
        link: '/about/',
        text: 'About',
    },
    {
        link: '/work/',
        text: 'Work',
    },
    {
        link: '/contact/',
        text: 'Contact',
    },
]
  return (
    <Fragment>
    <Router>
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
        >
            <Navbar.Brand href="#home">Will Ramirez</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {menu.map((link, iteration) => {
                        return (
                            <Link
                                className="navbar__link"
                                key={iteration + 1}
                                to={link.link}
                            >
                                {link.text}
                            </Link>
                        )
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Switch>
            <Route exact={true} path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
</Fragment>
  );
}

export default App;
