    const initialState = {
        title: "BURGERS ARE GOOD",
        ifFetching: false,
        foodPic: "",
        error: ""
    }

    export const appReducer = (state = initialState, action) => {
        switch(action.type) {
            case "FETCHING_FOOD_START":
                return{
                    ...state,
                    isFetching: true,

                }
            case "FETCHING_FOOD_SUCCESS":
                return{
                    ...state,
                    isFetching: false,
                    error: "",
                    foodPic: action.payload

                }
            case "FETCHING_FOOD_ERROR":
                return{
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
            default:
                return state
        }
    }