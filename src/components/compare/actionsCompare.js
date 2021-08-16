export const addToComparison = (id) => {
  return (dispatch) => {
    dispatch({
      type: "compare/load/start",
    });
    fetch(`http://localhost:3001/courses/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: "compare/load/success",
          payload: json,
        });
      });
  };
};
