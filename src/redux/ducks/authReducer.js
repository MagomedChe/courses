export const AUTH_START = "auth/start";
export const AUTH_SUCCESS = "auth/success";
export const AUTH_ERROR = "auth/error";
export const AUTH_OUT = "auth/out";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  loadingUsers: false,
  auth: false,
  loadingLogin: false,
  error: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loadingLogin: true,
        error: false,
        auth: false,
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        loadingLogin: false,
        auth: true,
        user: action.payload,
      };

    case AUTH_ERROR:
      return {
        ...state,
        error: true,
        loadingLogin: false,
        auth: false,
      };

    case AUTH_OUT:
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};

export const authAdmin = (login, pass, history) => {
  return (dispatch) => {
    dispatch({ type: AUTH_START });

    fetch("/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login,
        pass,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (!json.token) {
          dispatch({ type: AUTH_ERROR });
        } else {
          localStorage.setItem("user", JSON.stringify(json));
          history.push("/");
          dispatch({
            type: AUTH_SUCCESS,
            payload: json,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: AUTH_ERROR,
        });
      });
  };
};

export const logout = () => {
  localStorage.removeItem("user");
  return {
    type: AUTH_OUT,
  };
};
