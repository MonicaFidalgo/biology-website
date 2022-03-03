import React from "react";
import AboutDescription from "./AboutDescription";
import { Row, Col, Container } from "react-bootstrap";
import treeOfLife from "../../assets/treeoflife_about.webp";
import "./about.scss";

function About() {
  return (
    <Container className="about">
      <h2 className="about-title">Hi, I'm Telma!</h2>
      <Row>
        <Col lg={8} md={12}>
          <img src={treeOfLife} alt="Tree of Life Illustration" />
        </Col>
        <Col lg={4} md={12}>
          <AboutDescription />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
