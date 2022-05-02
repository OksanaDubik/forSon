import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={`${classes.message} ${classes.dialogs} `}>
            <div className={classes.dialogsItem}>
                <div className={`${classes.dialog} ${classes.active}`}><NavLink to={'/dialogs/1'}>
              Dima
                </NavLink>
                </div>
                <div className={'classes.dialog'}><NavLink to={'/dialogs/2'}>
                    Andrey</NavLink>
                </div>
                <div className={'classes.dialog'}><NavLink to={'/dialogs/3'}>
                    Ilia</NavLink>
                </div>
                <div className={'classes.dialog'}><NavLink to={'/dialogs/4'}>
                    Elena</NavLink>
                </div>
                <div className={'classes.dialog'}><NavLink to={'/dialogs/5'}>
                    Oksana</NavLink>
                </div>
                <div className={'classes.dialog'}><NavLink to={'/dialogs/6'}>
                    Sasha</NavLink>
                </div>
        </div>
          <div className={'classes.messages'}>
            <div className={'classes.message'}>
'Hello!'
          </div>
            <div className={'classes.message'}>
'Long time no see'
            </div>
            <div className={'classes.message'}>
'How is school?'
            </div>
          </div>
</div>
)
}
export default Dialogs