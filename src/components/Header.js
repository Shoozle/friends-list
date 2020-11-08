import React from 'react';
import headerImage from './header.jpg';

function Header() {

    return(
        <div className="header">
            <img className="header__img" src={headerImage} alt="Demon's Souls prediction"/>
        </div>
    )

}

export default Header;