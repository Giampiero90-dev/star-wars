import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPeople } from "./store/people/actions";
import { selectPeople } from "./store/people/selectors";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";

function App() {
  const [searchInput, set_searchInput] = useState("");
  const [selectedSortingMethod, setSelectedSortingMethod] = useState("AZ");
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

  const sortedNames = searchedPeople?.sort((userA, userB) => {
    if (selectedSortingMethod === "AZ") {
      return userA.name.localeCompare(userB.name);
    } else if (selectedSortingMethod === "ZA") {
      return userB.name.localeCompare(userA.name);
    }
    return sortedNames;
  });

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
              <option value="AZ">A-Z</option>
              <option value="ZA">Z-A</option>
            </select>
          </Col>
        </Row>
        {!sortedNames ? (
          <Row
            className="d-flex justify-content-center align-items-center mt-5"
            style={{ height: 700, margin: "auto", color: "white" }}
          >
            <Spinner animation="border" role="status" />
          </Row>
        ) : (
          <Container>
            <Row>
              {sortedNames?.map((user) => {
                return (
                  <Col key={user.name}>
                    <Card className="userCard">
                      <div className="hoverEffect">
                        <div className="whiteBlock"></div>
                        <div className="userInfo">
                          <div>
                            Height: <strong>{user.height}</strong>
                          </div>
                          <div>
                            Mass: <strong>{user.mass}</strong>
                          </div>
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
