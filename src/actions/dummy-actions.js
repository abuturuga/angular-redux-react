const ADD_ONE = 'ADD_ONE',
      REMOVE_ONE = 'REMOVE_ONE';

const addOne = () => {
  return {
    type: ADD_ONE
  };
};

const removeOne = () => {
  return {
    type: REMOVE_ONE
  };
};


export {
  ADD_ONE,
  REMOVE_ONE,
  addOne,
  removeOne
};
