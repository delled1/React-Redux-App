import axios from "axios"

const headers = {
    Accept: "application/json"
}



export const fetchFood = () => dispatch =>{

    //dispatch the fetching food
    dispatch({type: "FETCHING_FOOD_START"})

    //hit api
    axios.get("https://foodish-api.herokuapp.com/api/images/burger", {headers: headers})
    .then(res=> {
        dispatch({type: "FETCHING_FOOD_SUCCESS", payload: res.data.image})
        // console.log(res.data.image)
    })
    .catch(err => {
        dispatch({type: "FETCHING_FOOD_ERROR", payload: err.response})
        console.log(err)
    })

}