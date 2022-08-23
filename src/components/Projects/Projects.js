import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Salus from "../../Assets/Projects/Boston_University_seal.png";
import snake from "../../Assets/Projects/Snake.png";
import AlmostGods from "../../Assets/Projects/AlmostGods.png";
import Sched from "../../Assets/Projects/Sched.png";
import nlp from "../../Assets/Projects/NLP.png";
import markov from "../../Assets/Projects/markov.png";
import figmaIcon from "../../Assets/Projects/figmaIcon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="teal">Projects & Awards</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few works I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AlmostGods}
              isBlog={false}
              title="Almost Gods"
              description="Almost gods is a concept for a fashion blog built in react and styled using bootstrap. It represents my interest in fasion 
              and my vision to improve the fashion culture in my home country India. 
              It's an ammalgamation of blogs themed around trending fashion around the world with the ability to shop products what you read about instantly 
              without going through a thirs party reseller as is the case now.  "
              ghLink="https://gitlab.com/arnavnm"
              // demoLink="https://dhruv.is-from.space/CarboTrack_Demo.MP4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sched}
              isBlog={false}
              title="Connect4"
              description="Made use of key object oriented programming concepts to develop the game connect4 in python. I also added an AI bot player that is based off search based AI to give them a lookahead value that tracks
               the best move of its opponent upto the value it was initiated wit. This enables a 1 player connect4 user experience with adjustable levels of difficulty"
              ghLink="https://github.com/Dhruvsr/Sched"
              // demoLink="https://dhruv.is-from.space/1659861963.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlp}
              isBlog={false}
              title="Persistent wideband language analysis framework "
              description="Sourcing data from: Twitter, Youtube, Email ( arbitrary formatted plaintext)
              Gathered hundreds of megabytes of text and metadata
              Extensible framework allows for:
              Automated recording, mapping, and analysis of discourse for an arbitrary number of candidates
              Social network analysis of candidates in the context of discourse
              
              "
              ghLink="https://gitlab.com/arnavnm"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Salus}
              isComp={true}
              title="Trustee Scholar"
              description="Every year, BU welcomes approximately 20 outstanding students to the Trustee Scholars Program. 
              Many of BU's current Scholars had perfect 4.0 grade point averages in high school and ranked in the top of their class.
              A Trustee Scholarship covers full undergraduate tuition plus mandatory undergraduate student fees, and is renewable for four years if certain criteria are met.
              "
              ghLink="https://www.bu.edu/admissions/tuition-aid/scholarships-financial-aid/first-year-merit/trustee/"
              // demoLink="https://www.bu.edu/admissions/tuition-aid/scholarships-financial-aid/first-year-merit/trustee/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake"
              description="Developed a 2D version of the game snake natively in JAVA. 
              Made use of JAVA classes JPanel and Jframe to create the Graphicla user interface (GUI).
               Working on exporting it to a unity based build to give 3D depth."
              // ghLink="not needed here"
              ghLink="https://gitlab.com/arnavnm" 
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={markov}
              isBlog={false}
              title="Text generation model"
              description="I developed a language model which is derived from markov chains in python. User inputs a corpus of text and an integer n and the program outputs a passage of n words."
              // ghLink="not needed here"
              ghLink="https://gitlab.com/arnavnm" 
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={figmaIcon}
              isBlog={false}
              title="Figma"
              description="I have worked on a few design case studies where i learnt to follow UI//UX 
              design industry norms and implemted it on varoius projects using design tool Figma "
              // ghLink="not needed here"
              
              demoLink= "https://gitlab.com/arnavnm"
            />
          </Col> 

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
