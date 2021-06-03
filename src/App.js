import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPeople } from "./store/people/actions";
import { selectPeople } from "./store/people/selectors";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [searchInput, set_searchInput] = useState("");
  const [selectedSortingMethod, setSelectedSortingMethod] = useState("name");
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
        <Row className="actionsContainer">
          <Col>
            <input
              className="searchBar"
              value={searchInput}
              onInput={(e) => set_searchInput(e.target.value)}
              placeholder="Search..."
            />
          </Col>
          <Col>
            <select
              className="searchBar"
              placeholder="Sort"
              value={selectedSortingMethod}
              onChange={(e) => setSelectedSortingMethod(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="height">Height</option>
              <option value="mass">Mass</option>
            </select>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
