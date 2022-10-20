const questsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_QUESTS':
            console.log('Step 4 for getting quests:', action.payload);
            return action.payload;
        case 'CLEAR_QUESTS':
            return [];
        default:
            return state;
    }
};

export default questsReducer;