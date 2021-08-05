const initialState = {
  token: JSON.parse(localStorage.getItem('admin')) || {},
  loadingAdmin: false,
  error: false
}


export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/start':
      return {
        ...state,
        loadingAdmin: true
      }

    case 'auth/success':
      return {
        ...state,
        token: action.payload,
        loadingAdmin: false
      }

    case 'auth/error':
      return {
        ...state,
        error: true
      }





    default:
      return state
  }
}



export const authAdmin = (login, pass, history) => {
  return (dispatch) => {
    dispatch({type: 'auth/start'});

    fetch('http://localhost:3001/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: login,
        pass: pass,
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (!json.token) {
          dispatch({type: 'auth/error'})
        } else {
          localStorage.setItem('user', JSON.stringify(json));
          history.push('/');
          dispatch({
            type: 'auth/success',
            payload: json
          })
        }
      })
  }
}