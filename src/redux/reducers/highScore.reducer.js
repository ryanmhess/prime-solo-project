const highScoreReducer = (state = [], action) => {
    console.log('In high score reducer with:', action.payload);
    switch (action.type) {
        case 'SET_HIGH_SCORE':
            // console.log('In score reducer with:', action.payload);
            return action.payload.max;
        case 'CLEAR_SCORE':
            return [];
        default:
            return state;
    }
};

export default highScoreReducer;