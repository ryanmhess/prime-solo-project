const questsReducer = (state = [], action) => {
    console.log('In QUEST reducer with:', action.payload);
    switch (action.type) {
        case 'SET_QUESTS':
            return action.payload;
        case 'CLEAR_QUESTS':
            return [];
        default:
            return state;
    }
};

export default questsReducer;