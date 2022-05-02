import React from 'react';
import classes from './Nobody.module.css'
import Posts from "./Posts";

const Nobody = () => {
    return (

        <div className={classes.profilePostNobody}>
            <h3>Hey! why nobody lov my?</h3>

            <Posts text='Hi, how are you? Where missing?' amountLies={'20'}/>
            <Posts text={'I miss you as the apostle misses his torment'} amountLies={'45'}/>
        </div>

    )
}
export default Nobody