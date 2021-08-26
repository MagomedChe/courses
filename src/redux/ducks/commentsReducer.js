export const COMMENT_LOAD_START = "comment/load/start";
export const COMMENT_LOAD_SUCCESS = "comment/load/success";
export const ADD_NEW_COMMENT ="add/new/comment";


const initState ={
  comments: [],
  commentsLoad: false,
}

export const commentsReducer = (state = initState, action) =>{
  switch (action.type){
    case COMMENT_LOAD_START:
      return {
        ...state,
        commentsLoad: true,
      };
    case COMMENT_LOAD_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        commentsLoad: false,
      };
    case ADD_NEW_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
  }
}

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
          type: ADD_NEW_COMMENT,
          payload: json,
        })
      );
  };
};
export const getComments = (id) => {
  return (dispatch) => {
    dispatch({
      type: COMMENT_LOAD_START,
    });
    fetch(`/callback?coursId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: COMMENT_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};
