import React from "react";
import ThemeContext from "./../contexts/ThemeContext";

function ThemeSwitcher() {
    return (
        <ThemeContext.Consumer>
            {({ theme, setTheme }) => (
                <div className="theme-switcher Topbar_spacing_top">
                    <button className="theme-switcher__btn" onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
                        {theme === "light" ? 
                            <i className="fas fa-moon theme-switcher__icon Topbar__btn"></i> : 
                            <i className="fas fa-sun theme-switcher__icon Topbar__btn"></i>
                        }
                    </button>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeSwitcher;