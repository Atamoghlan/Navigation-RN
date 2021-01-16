export const initialState = {
    data: [],
}

export const ReducerForSearch = (state = initialState, action) => {
    switch(action.type) {
        case 'Search_Movie': 
        return {
            data: action.payload.data
        }
        case 'Loading_Animation':
            return{...state,
              loadingAnimation: action.loadingWorking
            }
    default: 
    return state;
        }
}