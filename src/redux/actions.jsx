export const addComment = (email, text, id) => {
  return (dispatch) => {
    fetch(`/callback`, {
      method: "POST",
      body: JSON.stringify({
        coursId: id,
        email: email,
        text: text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: "add/new/comment",
          payload: json,
        })
      );
  };
};
export const getComments = (id) => {
  return (dispatch) => {
    dispatch({
      type: "comment/load/start",
    });
    fetch(`/callback?coursId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "comment/load/success",
          payload: json,
        });
      });
  };
};
