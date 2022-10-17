const detailsReducer = (state = {}, action) => {
    console.log('In details reducer with:', action.payload);
    switch (action.type) {
        case 'SET_QUEST_DETAILS':
            return action.payload;
        case 'EDIT_CATEGORY':
            return {...state, parent_text: action.payload.parent_text || '' };
        case 'EDIT_DESCRIPTION':
            return {...state, description: action.payload };
        case 'EDIT_SCORE':
            return {...state, score: action.payload };
        case 'CLEAR_DETAILS':
            return {};
        default:
            return state;
    }
};

export default detailsReducer;