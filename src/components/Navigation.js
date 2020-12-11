import React from 'react';
import "./navigation.css";

function Navigation(props) {

    if (props.issignedin) {
        return(
            <div className="nav">
            <ul className="nav__items">
                <li className="nav__item"> 
                    <p>Hello {props.username}</p> 
                </li>
                <li className="nav__item">
                <a className="nav__link" onClick={props.signout}>Sign Out</a>
                </li>
            </ul>
        </div>
        )
    } else {
        return(
        <div className="nav">
            <ul className="nav__items">
                <li className="nav__item">
                <a href="#" onClick={props.showlogin(true)} className="nav__link">Login</a>
                </li>
            </ul>
        </div>
        )
    }
}

export default Navigation;