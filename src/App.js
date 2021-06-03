import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPeople } from "./store/people/actions";
import { selectPeople } from "./store/people/selectors";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

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
