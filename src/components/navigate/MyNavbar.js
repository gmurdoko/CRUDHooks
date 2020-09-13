import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class MyNavbar extends Component {
    render() {
        const { onLogout, auth } = this.props;
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/home">
                    tropusproject
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home" disabled={!auth}>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/list" disabled={!auth}>
                        Rooms
                    </Nav.Link>
                    {/* <Nav.Link as={Link} to="/users" disabled={!auth}>
                        Users
                    </Nav.Link> */}
                    <Nav.Link
                        // as={Button}
                        onClick={() => {
                            onLogout();
                        }}
                        disabled={!auth}
                    >
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default MyNavbar;
