import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPeople } from "./store/people/actions";
import { selectPeople } from "./store/people/selectors";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";

function App() {
  const [searchInput, set_searchInput] = useState("");
  const [selectedSortingMethod, setSelectedSortingMethod] = useState("name");
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const searchedPeople =
    searchInput.length > 0
      ? people.filter((user) =>
          user.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : people;

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
              placeholder="Search by name..."
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
        {!people ? (
          <Row
            className="d-flex justify-content-center align-items-center mt-5"
            style={{ height: 700, margin: "auto" }}
          >
            <Spinner animation="border" role="status" />
          </Row>
        ) : (
          <Container>
            <Row>
              {people.map((user) => {
                return (
                  <Col key={user.id}>
                    <Card className="userCard">
                      <div className="hoverEffect">
                        <div className="whiteBlock"></div>
                        <div className="userInfo">
                          <div>Height: {user.height}</div>
                          <div>Mass: {user.mass}</div>
                        </div>
                        <div className="whiteBlock">
                          <small>
                            <div></div>
                            <div>
                              {" "}
                              <strong>Gender: {user.gender}</strong>{" "}
                            </div>
                          </small>
                        </div>
                      </div>
                      <Card.Img
                        variant="top"
                        src="https://picsum.photos/300/200"
                        alt="user image"
                      />
                      <Card.Body>
                        <Card.Title>
                          <strong>{user.name}</strong>
                        </Card.Title>
                        <Card.Text>
                          <small>
                            <strong> Birth year: {user.birth_year}</strong>
                          </small>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        )}
      </Container>
    </div>
  );
}

export default App;
