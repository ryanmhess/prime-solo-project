const categoriesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            console.log('In categories reducer with:', action.payload);
            return action.payload;
        case 'CLEAR_CATEGORIES':
            return {};
        default:
            return state;
    }
};

// children will be on the redux state at:
// state.children
export default categoriesReducer;