    const initialState = {
        title: "FOOD IS GOOD",
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
            case "FETCHING_FOOD_SUCESSS":
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