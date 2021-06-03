import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="mainContainer">
        <img
          src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG34.png"
          alt="logo"
          className="logo"
        ></img>
        <Row className="actionsContainer"></Row>
      </Container>
    </div>
  );
}

export default App;
