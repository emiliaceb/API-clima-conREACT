import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Navmenu = () => {
  return (
    <>
    <Navbar expand="lg" className="navfondo">
      <Container>
        <Navbar.Brand href="#home" className='infoclima'>InfoClima</Navbar.Brand>
      </Container>
    </Navbar>
    </>
  );
};

export default Navmenu;