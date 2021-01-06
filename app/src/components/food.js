import React from "react";
import { connect } from "react-redux";
import {fetchFood} from "../actions/food"



const Food =  (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <button onClick={props.fetchFood}>Get New Image</button>
        </div>
    )
}


//Connect the component to the Redux store

const mapStateToProps = (state) => {
    return {
        title: state.title,
        isFetching: state.isFetching,
        image: state.foodPic,
        error: state.error
    }
}

const mapDispatchToProps = {fetchFood};


export default connect(mapStateToProps, mapDispatchToProps)(Food);