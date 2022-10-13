const childrenReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHILDREN':
      console.log('In children reducer with:', action.payload);
      return action.payload;
    case 'SET_CHILDREN_DETAILS':
      console.log('In children reducer with:', action.payload);
      return action.payload;
    case 'CLEAR_CHILDREN':
      return [];
    default:
      return state;
  }
};

// children will be on the redux state at:
// state.children
export default childrenReducer;
