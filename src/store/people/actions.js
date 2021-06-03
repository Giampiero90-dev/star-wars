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
      const response = await axios.get("http://swapi.dev/api/people/", {
        params: {
          _limit: 10,
        },
      });
      dispatch(peopleList(response.data));
    } catch (e) {
      console.log(e);
    }
  };
}
