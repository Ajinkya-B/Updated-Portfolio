import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <Container className="flex w-full items-center justify-between m-auto">
      <Row className="header">
        <Col sm={8} className="header-name">
          <a href="/">
            <span class="mr-1">Ajinkya</span>
            <span class="font-bold">Bhosale</span>
          </a>
        </Col>
        <Col sm={4} className="header-items">
          <nav class="nav-items">
            <a
              class="cursor-pointer rounded-md focus:outline-none  focus:ring-2 focus:ring-green-500 text-stone-100 hover:text-white font-medium"
              href="/"
            >
              Home
            </a>
            <a
              class="cursor-pointer rounded-md focus:outline-none  focus:ring-2 focus:ring-green-500 text-stone-400 hover:text-white"
              href="/portfolio"
            >
              My Work
            </a>
            <a
              class="cursor-pointer rounded-md focus:outline-none  focus:ring-2 focus:ring-green-500 text-stone-400 hover:text-white"
              href="/resume"
            >
              Resume
            </a>
            <a
              class="cursor-pointer rounded-md focus:outline-none  focus:ring-2 focus:ring-green-500 text-stone-400 hover:text-white"
              href="/contact"
            >
              Contact
            </a>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Header