export const AddCours = () => {
  return (dispatch) => {
    dispatch({type: 'cours/add/start'});
    fetch('http://localhost:3001/courses', {
      method: 'POST',
      body: JSON.stringify({

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }
}