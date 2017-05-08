import { createStore } from 'redux';

// Actions
const NEXT = { type: 'NEXT' };
const PREVIOUS = { type: 'PREVIOUS' };

const messages = [
  'You are doing a good job, Eric.',
  'You are a great teacher, despite what Nikki implies constantly',
  'You cook your steaks correctly, Eric',
  'You have good taste in soda',
  'You are taller than most, which makes you awesome',
  'Your hair is like a halo of mouse-brown fire'
];

const initialState = {
  index: 0,
  messages: messages,
  currentMessage: messages[0]
};


const reducer = (state = initialState, action) => {
  console.log('reducer getting called?');
  switch (action.type) {
    case 'NEXT':
      if (state.index === state.messages.length - 1) {
        return Object.assign({}, state, {
          index: 0,
          currentMessage: state.messages[0]
        });
      }
      else {
        return Object.assign({}, state, {
          index: state.index + 1,
          currentMessage: state.messages[state.index + 1]
        });
      }
    case 'PREVIOUS':
      if (state.index === 0) {
        return {
          index: state.messages.length - 1,
          currentMessage: state.messages[state.messages.length - 1],
          messages: state.messages
        }
      }
      else {
        return {
          index: state.index - 1,
          currentMessage: state.messages[state.index - 1],
          messages: state.messages
        }
      }
  }

  return state;
}

const store = createStore(reducer);

module.exports = {
  store: store,
  actions: {
    NEXT: NEXT,
    PREVIOUS: PREVIOUS
  }
}
