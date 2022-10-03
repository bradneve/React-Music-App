const initialState = {
    likeStatus0: false,
    likeStatus1: false,
    likeStatus2: false
}

const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIKE1":
            return { ...state, likeStatus1: true};
        case "UNLIKE1":
            return { ...state, likeStatus1: false};
        case "LIKE2":
            return { ...state, likeStatus2: true};
        case "UNLIKE2":
            return { ...state, likeStatus2: false};
        case "LIKE0":
            return { ...state, likeStatus0: true};
        case "UNLIKE0":
            return { ...state, likeStatus0: false};
        default:
            return state;
    }
}
export default likeReducer