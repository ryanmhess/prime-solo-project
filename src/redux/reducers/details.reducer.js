const detailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_QUEST_DETAILS':
            console.log('In details reducer with:', action.payload);
            return action.payload;
        case 'EDIT_TITLE':
            return {...state, parent_id: action.payload };
        case 'EDIT_DESCRIPTION':
            return {...state, description: action.payload };
        case 'EDIT_SCORE':
            return {...state, score: action.payload };
        case 'CLEAR_DETAILS':
            return [];
        default:
            return state;
    }
};

export default detailsReducer;