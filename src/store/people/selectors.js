export function selectPeople(reduxStore) {
  return reduxStore.peopleReducer.allPeople.results;
}
