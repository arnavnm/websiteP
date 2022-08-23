import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import profile from "../../Assets/main.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who Am <span className="teal"> I? </span>
            </h1>
            <p className="home-about-body">
              I am a senior at Boston University. I am a <b><a href = "https://www.bu.edu/admissions/tuition-aid/scholarships-financial-aid/first-year-merit/trustee/">
                 Trustee scholar at the college of Arts and Science</a></b>. 
              I am double majoring in <b>Economics and Computer science </b>
              <br />
              <br />I am super interested in software development and have experience in: 
              <i>
                <b className="purple">Algorithms, HTTP servers, socket level programming, dynamic react websites, bot development, dictionaries, and occasionally making games in Unity  </b>
              </i>
              <br />
              <br />
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src= {profile} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect with me</h1>
            <p>
              I'm available on these <span className="teal">platforms </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://gitlab.com/arnavnm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arnav-misra-a5b7a516a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:arnavnm@bu.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
