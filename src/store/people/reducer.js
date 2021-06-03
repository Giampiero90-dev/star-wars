const initialState = { allPeople: [] };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "people/fetched":
      return {
        allPeople: action.payload,
      };

    default:
      return state;
  }
}
