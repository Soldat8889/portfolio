import React, { useState, useEffect, useCallback } from "react";

function Carousel(props) {
    const [status, setStatus] = useState();
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState();
    const [endX, setEndX] = useState(0);
    const [transform, setTransform] = useState(0);

    const handleResize = useCallback(() => {
        const group = document.querySelector(`.Carousel__group[data-name="${props.name}"]`);

        if(window.innerWidth >= props.groupSize) {
            setIsDown(false);
            setStatus("blocked");
            setEndX(0);
            setTransform(0);
            group.style.cursor = "default";
        } else {
            setIsDown(false);
            setStatus("movable");
            group.style.cursor = "grab";
        }
    }, [props.groupSize, props.name]);

    useEffect(function componentDidMount() {
        handleResize();
    }, [handleResize]);

    useEffect(function isDownObserver() {
        const group = document.querySelector(`.Carousel__group[data-name="${props.name}"]`);
        
        if(isDown) {
            group.style.cursor = "grabbing";
        } else {
            group.style.cursor = "grab";
        }
    }, [isDown, props.name]);

    function debugSlider() {
        if(transform > 25) {
            setTransform(25);
            setEndX(0);
        }

        if(transform < -(props.max)) {
            setTransform(-(props.max));
            setEndX(-(props.max));
        }
    }

    /**
     * Handle MouseDown Event
     * @param {Event} e Event
     */
    function handleMouseDown(e) {
        if(status !== "blocked") {
            setIsDown(true);
            setStartX(e.pageX);
        }
    }

    /**
     * Handle MouseLeave Event
     */
    function handleMouseLeave() {
        const group = document.querySelector(`.Carousel__group[data-name="${props.name}"]`);

        if(status !== "blocked") {
            setIsDown(false);
            setEndX(isNaN(parseInt(/(-?[0-9])\d+/g.exec(group.style.transform), 10)) ? 0 : parseInt(/(-?[0-9])\d+/g.exec(group.style.transform), 10));
        
            debugSlider();
        }
    }

    /**
     * Handle MouseUp Event
     */
    function handleMouseUp() {
        const group = document.querySelector(`.Carousel__group[data-name="${props.name}"]`);

        if(status !== "blocked") {
            setIsDown(false);
            setEndX(isNaN(parseInt(/(-?[0-9])\d+/g.exec(group.style.transform), 10)) ? 0 : parseInt(/(-?[0-9])\d+/g.exec(group.style.transform), 10));
        
            debugSlider();
        }
    }

    /**
     * Handle MouseMove Event
     * @param {Event} e Event
     */
    function handleMouseMove(e) {
        if(!isDown) return;
        
        const walk = e.pageX - startX;

        setTransform(walk + endX);
    }

    useEffect(function resizeEvent() {
        window.addEventListener("resize", handleResize);

        return () => { window.removeEventListener("resize", handleResize); };
    }, [handleResize]);

    return (
        <div className="Carousel" data-name={props.name}>
            <div className="Carousel__inner" data-name={props.name}>
                <div className="Carousel__group" style={{transform: `translateX(${transform}px)`, width: props.groupSize}} data-name={props.name} data-status={status} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Carousel;