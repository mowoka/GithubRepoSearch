const reposReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_REPOS":
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};

export default reposReducer;
