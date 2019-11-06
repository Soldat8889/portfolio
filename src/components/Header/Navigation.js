import React from "react";
import { Link } from "react-router-dom";

// Components
import ThemeSwitcher from "./../../utils/ThemeSwitcher";
import LanguageSelect from "./../../utils/LanguageSelect";

function Navigation() {
    return (
        <header className="Topbar">
            <Link to="/" className="Topbar__title-name Topbar_spacing_top Topbar__btn">
                Lucas SYHANATH
            </Link>
            <div className="Topbar__wrap">
                <nav className="Topbar__navigation-bar Topbar_spacing_top">
                    <a className="Topbar_spacing" href="https://github.com/Soldat8889">
                        <i className="Topbar__branding Topbar__btn fab fa-github" title="Github Profile"></i>
                    </a>
                    <a href="https://www.artstation.com/pata-tartiner">
                        <i className="Topbar__branding Topbar__btn fab fa-artstation" title="ArtStation Profile"></i>
                    </a>
                </nav>
                <div className="Topbar__preferences">
                    <ThemeSwitcher />
                    <LanguageSelect />
                </div>
            </div>
        </header>
    );
}

export default Navigation;