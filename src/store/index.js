import { createStore } from 'redux';

const local = JSON.parse(localStorage.getItem('@valueCart'));
const INITIAL_STATE =
  local === null ? 0 : JSON.parse(localStorage.getItem('@valueCart'));

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
