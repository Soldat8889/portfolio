import React, { useEffect, useCallback } from "react";

function Parallax(props) {
    const handleMove = useCallback(
        /**
         * @param {Event} e 
         */

        function (e) {
            const item = document.querySelector(`.parallax__wrapper[data-name="${props.name}"]`);

            // eslint-disable-next-line no-unused-vars
            item.style.transform = `translate(${e.pageX * props.speedX}px, ${e.pageY * props.speedY}px)`;
    }, [props.speedX, props.speedY, props.name]);

    const handleTouch = useCallback(
        /**
         * @param {Event} e 
         */

        function (e) {
            const item = document.querySelector(`.parallax__wrapper[data-name="${props.name}"]`);

            // eslint-disable-next-line no-unused-vars
            item.style.transform = `translate(${e.touches[0].clientX * props.speedX}px, ${e.touches[0].clientY * props.speedY}px)`;
    }, [props.speedX, props.speedY, props.name]);

    useEffect(function bindEvents() {
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("touchmove", handleTouch);

        return () => { 
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("touchmove", handleTouch);
        };
    }, [handleMove, handleTouch]);

    return (
        <div className="parallax__wrapper" data-name={props.name}>
            {props.children}
        </div>
    );
}

export default Parallax;