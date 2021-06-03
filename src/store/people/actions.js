import axios from "axios";

export function peopleList(data) {
  return {
    type: "people/fetched",
    payload: data,
  };
}

export function fetchPeople() {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      dispatch(peopleList(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}
