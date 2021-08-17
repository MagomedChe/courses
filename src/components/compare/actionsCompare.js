export const addToComparison = (id) => {
  return (dispatch) => {
    dispatch({
      type: "compare/load/start",
    });
    fetch(`/courses/${id}`)
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
