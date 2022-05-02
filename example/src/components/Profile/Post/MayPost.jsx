import React from 'react';
import classes from './MayPost.module.css'

 const MayPost = ()=>{
    return(
                   <div>May post
                <div className={classes.item}>news</div>
                <div className={classes.item}>news</div>
                <div className={classes.item}>news</div>
            <textarea placeholder='text' className={classes.profilePost} >Your news... </textarea>
                <button className={classes.profilePostBtn} type='submit'>Submit</button>
            </div>

    )
 }
 export default MayPost