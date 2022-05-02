import React from "react";
import classes from './Posts.module.css'

const Posts = (props) => {
    return (
        <div className={classes.postFirst}>
            <img src='https://i.ytimg.com/vi/cODcumsVAxY/maxresdefault.jpg'/>
            <div><span>like {props.amountLies}</span></div>
            {props.text}

        </div>
    )
}
export default Posts