import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import { PROJECTS } from "./shared/projects";
import { MyCard } from "./components/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Pdf from "./VolzerResume.pdf";
function App() {
  return (
    <div className="App">
      <Container>
        <div className="header">
          <h1>April Volzer</h1>
          <h2>dev projects portfolio</h2>
          <Row style={{ marginTop: 15 }}>
            <Col style={{ display: "flex" }}>
              <Button
                href="https://www.linkedin.com/in/april-volzer-655b74194/"
                target="_blank"
                variant="outline-primary"
              >
                LinkedIn
              </Button>
            </Col>
            <Col>
              <Button href={Pdf} variant="outline-secondary" target="_blank">
                Resume
              </Button>
            </Col>
          </Row>
        </div>
        <div>
          {PROJECTS.map((project) => (
            <MyCard project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
