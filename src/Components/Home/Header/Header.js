import React from 'react';
import MainSec from './MainSec/MainSec';
import NavbarRB from './NavbarRB/NavbarRB';

const Header = () => {
    return (
        <section>
        <div className="headerSec">
            <NavbarRB></NavbarRB>
            <MainSec></MainSec>
        </div>
        </section>
    );
};

export default Header;