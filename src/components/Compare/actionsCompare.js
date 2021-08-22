export const addToComparison = (id) => {
  return (dispatch) => {
    dispatch({
      type: "Compare/load/start",
    });
    fetch(`/courses/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: "Compare/load/success",
          payload: json,
        });
      });
  };
};
