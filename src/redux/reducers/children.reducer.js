const childrenReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHILDREN':
            console.log('In children reducer with:', action.payload);
            return action.payload;
        default:
            return state;
    }
};

// children will be on the redux state at:
// state.children
export default childrenReducer;