const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  loadingUsers: false,
  auth: false,
  loadingLogin: false,
  error: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "auth/start":
      return {
        ...state,
        loadingLogin: true,
        error: false,
        auth: false,
      };

    case "auth/success":
      return {
        ...state,
        loadingLogin: false,
        auth: true,
        user: action.payload,
      };

    case "auth/error":
      return {
        ...state,
        error: true,
        loadingLogin: false,
        auth: false,
      };

    case "auth/out":
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
    dispatch({ type: "auth/start" });

    fetch("http://localhost:3001/auth", {
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
          dispatch({ type: "auth/error" });
        } else {
          localStorage.setItem("user", JSON.stringify(json));
          history.push("/");
          dispatch({
            type: "auth/success",
            payload: json,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: "auth/error",
        });
      });
  };
};

export const logout = () => {
  localStorage.removeItem("user");
  return {
    type: "auth/out",
  };
};
