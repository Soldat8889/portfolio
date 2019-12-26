import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";

function Parallax({name = "undefined", speedX = 1, speedY = 1, children = <div></div>}) {
    const handleMove = useCallback(
        /**
         * @param {Event} e 
         */

        function (e) {
            const item = document.querySelector(`.parallax__wrapper[data-name="${name}"]`);

            // eslint-disable-next-line no-unused-vars
            item.style.transform = `translate(${e.pageX * speedX}px, ${e.pageY * speedY}px)`;
    }, [speedX, speedY, name]);

    const handleTouch = useCallback(
        /**
         * @param {Event} e 
         */

        function (e) {
            const item = document.querySelector(`.parallax__wrapper[data-name="${name}"]`);

            // eslint-disable-next-line no-unused-vars
            item.style.transform = `translate(${e.touches[0].clientX * speedX}px, ${e.touches[0].clientY * speedY}px)`;
    }, [speedX, speedY, name]);

    useEffect(function bindEvents() {
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("touchmove", handleTouch);

        return () => { 
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("touchmove", handleTouch);
        };
    }, [handleMove, handleTouch]);

    return (
        <div className="parallax__wrapper" data-name={name} data-parallax-type="move">
            {children}
        </div>
    );
}

Parallax.propTypes = {
    name: PropTypes.string.isRequired,
    speedX: PropTypes.number,
    speedY: PropTypes.number,
    children: PropTypes.object.isRequired
};

function ScrollParallax({name = "undefined", speedX = 0, speedY = 0, children = <div></div>, top = 0, left = 0}) {
    const handleScrollParallax = useCallback(
        () => {
            const item = document.querySelector(`.parallax__wrapper[data-name="${name}"]`);
            const parent = item.parentElement;

            item.style.transform = `translate(${-parent.getBoundingClientRect().left * speedX + left}px, ${-parent.getBoundingClientRect().top * speedY + top}px)`;
    }, [speedX, speedY, name, left, top]);

    useEffect(function bindEvents() {
        window.addEventListener("scroll", handleScrollParallax);
        window.addEventListener("resize", handleScrollParallax);

        return () => { 
            window.removeEventListener("scroll", handleScrollParallax);
            window.removeEventListener("resize", handleScrollParallax);
        };
    }, [handleScrollParallax]);

    return (
        <div className="parallax__wrapper-initial-position">
            <div className="parallax__wrapper" data-name={name} data-parallax-type="scroll">
                {children}
            </div>
        </div>
    );
}

ScrollParallax.propTypes = {
    name: PropTypes.string.isRequired,
    speedX: PropTypes.number,
    speedY: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    children: PropTypes.object.isRequired
};

export { Parallax as default, ScrollParallax };