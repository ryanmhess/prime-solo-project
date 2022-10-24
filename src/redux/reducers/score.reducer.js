const scoreReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SCORE':
            // console.log('In score reducer with:', action.payload);
            return action.payload.total_score;
        case 'CLEAR_SCORE':
            return [];
        default:
            return state;
    }
};

export default scoreReducer;