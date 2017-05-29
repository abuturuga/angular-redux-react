const DUMMY_FETCH_START = 'DUMMY_FETCH_START',
      DUMMY_FETCH_END = 'DUMMY_FETCH_END',
      DUMMY_FETCH_ERROR = 'DUMMY_FETCH_ERROR';


const fetchOne = () => {
  return dispatch => {
    dispatch({type: DUMMY_FETCH_START});

    fetch('/api/dummy')
      .then(response => response.json())
      .then(data => dispatch({type: DUMMY_FETCH_END, payload: data}))
      .catch(error => dispatch({type: DUMMY_FETCH_ERROR, payload: error}));
  };
};

const startFetch = () => {
  return {
    type: DUMMY_FETCH_START
  }
};

const endFetch = (payload) => {
  return {
    type: DUMMY_FETCH_END,
    payload
  }
};

const errorFetch = () => {
  return {
    type: DUMMY_FETCH_ERROR
  }
};


export {
  DUMMY_FETCH_START,
  DUMMY_FETCH_END,
  DUMMY_FETCH_ERROR,
  startFetch,
  endFetch,
  errorFetch,
  fetchOne
};
