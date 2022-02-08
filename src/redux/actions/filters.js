const setSortBy = (name) => {
  return {
    type: "SET_SORT_BY",
    payload: name,
  };
};

const setCategory = (catIndex) => {
  return {
    type: "SET_CATEGORY",
    payload: catIndex,
  };
};
