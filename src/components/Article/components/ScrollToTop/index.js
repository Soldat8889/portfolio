import React, { useEffect, useCallback, useState } from "react";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState("");

    function handleClick() {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
            left: 0
        });
    }

    const handleDisplay = useCallback(() => {
        if(window.scrollY < 2000) {
            setIsVisible("");
        } else {
            setIsVisible("is-visible_transitional");
        }
    }, []);

    useEffect(function bindEvent() {
        document.addEventListener("scroll", handleDisplay);

        return () => {
            document.removeEventListener("scroll", handleDisplay);
        };
    }, [handleDisplay]);

    return (
        <div className={`scroll-top ${isVisible}`} onClick={handleClick}>
            <i className="fas fa-arrow-up scroll-top__icon"></i>
        </div>
    );
}

export default ScrollToTop;