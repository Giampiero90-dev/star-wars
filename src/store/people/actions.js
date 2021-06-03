import axios from "axios";

export function peopleList(data) {
  return {
    type: "people/fetched",
    payload: data,
  };
}

export function fetchPeople() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get("http://swapi.dev/api/people/?page=1");
    dispatch(peopleList(response.data));
  };
}
