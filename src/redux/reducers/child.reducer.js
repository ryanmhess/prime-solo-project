const childReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHILD_DETAILS':
            console.log('In child reducer with:', action.payload);
            return action.payload;
        case 'CLEAR_CHILD':
            return [];
        default:
            return state;
    }
};

// children will be on the redux state at:
// state.children
export default childReducer;