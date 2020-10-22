const initialeState = {
    message: 0
}

const reducer = (state = initialeState , action) => {
    const newState = {...state}

    if(action.type === 'Plus')
    {
        newState.message = initialeState.message + 1;
        initialeState.message = initialeState.message + 1;
    }
    else if(action.type === 'Minus')
    {
        newState.message = initialeState.message - 1 ;
        initialeState.message = initialeState.message - 1;
    }
    return newState;
};

export default reducer;