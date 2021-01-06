import React, {useEffect} from "react";
import { connect } from "react-redux";
import {fetchFood} from "../actions/food"
import "./food.css"



const Food =  (props) => {
    // console.log(props)

    useEffect(() => {
        console.log(props)
        props.fetchFood();
    }, [fetchFood])

    return (
        <div className="food">
        <h1>{props.title}</h1>
        <img className="foodImage" src={props.foodPic} alt="A burger" />
        <br/>
        <button className="button" onClick={props.fetchFood}>Get New Image</button>
        </div>
    )
}


//Connect the component to the Redux store

const mapStateToProps = (state) => {


    return {
        title: state.title,
        isFetching: state.isFetching,
        foodPic: state.foodPic,
        error: state.error
    }
}

const mapDispatchToProps = {fetchFood};


export default connect(mapStateToProps, mapDispatchToProps)(Food);