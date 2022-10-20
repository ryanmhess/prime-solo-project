const detailsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_QUEST_DETAILS':
            return action.payload;
        case 'EDIT_CATEGORY':
            return {...state, category_id: action.payload.id, parent_text: action.payload.parent_text, child_text: action.payload.child_text};
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