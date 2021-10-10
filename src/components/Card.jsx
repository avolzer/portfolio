import React from "react";
import Button from "react-bootstrap/button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export const MyCard = ({ project }) => {
  return (
    <div style={{ marginBottom: 50 }}>
      {project.id % 2 === 0 ? (
        <Row className="justify-content-md-center" md="auto">
          <Col md={8}>
            <Row>
              <Col>
                <Image
                  width={project.width}
                  src={project.image}
                  className="float-end"
                  fluid
                  responsive
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  {project.description}
                </Card.Body>
              
                    {project.links.map((l) => {
                      return (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none", marginLeft: 18  }}
                          href={l.link}
                        >
                          {l.desc}
                        </a>
                      );
                    })}
                 
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-md-center" md="auto">
          <Col md={8}>
            <Row>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  {project.description}
                </Card.Body>
           
                    {project.links.map((l) => {
                      return (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none", marginLeft: 18 }}
                          href={l.link}
                        >
                          {l.desc}
                        </a>
                      );
                    })}
         
              </Col>
              <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Image
                  width={project.width}
                  src={project.image}
                  fluid
                  responsive
                />
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
};
