import React from 'react';
import SearchBox from './SearchBox';
import { Navbar, Container, Nav} from 'react-bootstrap'

const Title = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>What's the weather like in </Navbar.Brand>
                <Nav className="me-auto">
                    <SearchBox />
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Title