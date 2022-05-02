import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = ()=>{
    return(
        /**2 класса**/
        <nav className={`${classes.nav} ${classes.active}`}>


            {/*<div ><NavLink to={'/profile'} >Profile</NavLink></div>*/}
            <div ><NavLink to={'/profile'} className={navData=> navData.isActive ? classes.activeLink : classes.item }>Profile</NavLink></div>
            <div ><NavLink to={'/dialogs'} className={navData=> navData.isActive ? classes.activeLink : classes.item }>Messages</NavLink></div>
            <div><NavLink to={'/news'} className={navData=> navData.isActive ? classes.activeLink : classes.item }>News</NavLink></div>
            <div><NavLink to={'/music'} className={navData=> navData.isActive ? classes.activeLink : classes.item }>Music</NavLink></div>
            <div><NavLink to={'/settings'} className={navData=> navData.isActive ? classes.activeLink : classes.item }>Settings</NavLink></div>

        </nav>
    )
 }
 export default Navbar