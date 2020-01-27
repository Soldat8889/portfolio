import React, { useEffect, useState, useCallback, Fragment } from "react";
import { Link } from "react-router-dom";

// Components
import ThemeSwitcher  from "./components/ThemeSwitcher";
import LanguageSelect from "./components/LanguageSelect";

function Navigation() {
    const [isHidden, setIsHidden] = useState(false);

    const handleScroll = useCallback(
        () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            scrollY > windowHeight ? setIsHidden(true) : setIsHidden(false);

            const topbar = document.querySelector("#topbar");
            const header = document.querySelector("#topbar-header");

            if(scrollY > topbar.getBoundingClientRect().height) {
                topbar.classList.add("Topbar_fadeout");
                header.classList.add("Topbar__header_fadeout");
            } else {
                topbar.classList.remove("Topbar_fadeout");
                header.classList.remove("Topbar__header_fadeout");
            }
    }, []);

    useEffect(function handleHiddenObserver() {
        const topbar = document.querySelector("#topbar");
        const author = document.querySelector("#topbar-author");
        const right = document.querySelector("#topbar-right");
        const pinnedElements = Array.from(document.querySelectorAll("[data-topbar-pin]"));
        /* eslint-disable no-unused-vars */
        let timeout;
        /* eslint-enable no-unused-vars */

        pinnedElements.forEach(function (e) {
            if(isHidden) {
                e.classList.remove("Topbar_pinned");
                topbar.classList.add("Topbar_hidden");

                timeout = window.setTimeout(() => {
                    author.style.display = "none";
                    right.style.display = "none";
                }, 300);
            } else {
                timeout = window.setTimeout(() => {
                    author.style.display = "inline-block";
                    right.style.display = "inline-flex";
                }, 300);

                e.classList.add("Topbar_pinned");
                topbar.classList.remove("Topbar_hidden");
            }
        });
    }, [isHidden]);

    useEffect(function bindEvents() {
        document.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => { 
            document.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [handleScroll]);

    useEffect(function componentDidMount() {
        handleScroll();
    });

    return (
        <Fragment>
            <div className="Topbar__line"></div>
            <header id="topbar-header" className="Topbar__header">
                <Link to="/">
                    <img src="/images/utils/icon.svg" alt="Icon" className="Topbar__branding-icon Topbar_pinned" data-topbar-pin />
                    <span id="topbar-author" className="Topbar__author Topbar__button Topbar_pinned" data-topbar-pin style={isHidden === false ? { display: "inline-block" } : {}}>Lucas SYHANATH</span>
                </Link>
            </header>
            <div id="topbar" className="Topbar">
                <div id="topbar-right" className="Topbar__right Topbar_pinned" data-topbar-pin style={isHidden === false ? { display: "inline-flex" } : {}}>
                    <nav className="Topbar__navigation">
                        <a href="https://github.com/Soldat8889" target="_blank" rel="noopener noreferrer">
                            <i className="Topbar__s-media Topbar__button center-hv fab fa-github" title="Github Profile"></i>
                        </a>
                        <a href="https://www.artstation.com/pata-tartiner" target="_blank" rel="noopener noreferrer">
                            <i className="Topbar__s-media Topbar__button center-hv fab fa-artstation" title="ArtStation Profile"></i>
                        </a>
                    </nav>
                    <ThemeSwitcher />
                    <LanguageSelect />
                </div>
            </div>
        </Fragment>
    );
}

export default Navigation;