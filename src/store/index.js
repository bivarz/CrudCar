import { createStore } from 'redux';

const local = JSON.parse(localStorage.getItem('@qttCart'));
const INITIAL_STATE =
  local === null ? 0 : JSON.parse(localStorage.getItem('@qttCar'));

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state;

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
