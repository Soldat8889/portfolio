import React, { useEffect, useCallback } from "react";

function Parallax(props) {
    const handleMouseMove = useCallback(
        /**
         * @param {Event} e 
         */

        function (e) {
            const item = document.querySelector(`.parallax__wrapper[data-name="${props.name}"]`);

            // eslint-disable-next-line no-unused-vars
            item.style.transform = `translate(${e.pageX * props.speedX}px, ${e.pageY * props.speedY}px)`;
    }, [props.speedX, props.speedY, props.name]);

    useEffect(function mouseMoveEvent() {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    return (
        <div className="parallax__wrapper" data-name={props.name}>
            {props.children}
        </div>
    );
}

export default Parallax;