import React, { useState, useEffect, useCallback } from "react";

function Carousel(props) {
    const [status, setStatus] = useState();
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState();
    const [endX, setEndX] = useState(0);
    const [transform, setTransform] = useState(0);

    useEffect(function componentDidMount() {
        handleResize();
    }, []);

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

    /**
     * Handle MouseDown Event
     * @param {Event} e Event
     */
    function handleMouseDown(e) {
        if(status !== "blocked") {
            const target = e.currentTarget;

            target.style.cursor = "grabbing";
            setStartX(e.pageX);
            setIsDown(true);
        }
    }

    /**
     * Handle MouseLeave Event
     * @param {Event} e Event
     */
    function handleMouseLeave(e) {
        const group = document.querySelector(`.Carousel__group[data-name="${props.name}"]`);

        if(status !== "blocked") {
            const target = e.currentTarget;

            target.style.cursor = "grab";
            setIsDown(false);
            setEndX(isNaN(parseInt(/(-?[0-9])\d+/g.exec(group.style.transform), 10)) ? 0 : Math.round(parseInt(/(-?[0-9])\d+/g.exec(group.style.transform), 10)));
        
            debugSlider();            
        }
    }

    /**
     * Handle MouseUp Event
     * @param {Event} e Event
     */
    function handleMouseUp(e) {
        const group = document.querySelector(`.Carousel__group[data-name="${props.name}"]`);

        if(status !== "blocked") {
            const target = e.currentTarget;

            target.style.cursor = "grab";
            setIsDown(false);
            setEndX(isNaN(parseInt(/(-?[0-9])\d+/g.exec(group.style.transform), 10)) ? 0 : Math.round(parseInt(/(-?[0-9])\d+/g.exec(group.style.transform), 10)));
        
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

        setTransform(Math.round(walk + endX));
    }

    useEffect(function resizeEvent() {
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize); };
    }, [handleResize]);

    return (
        <div className="Carousel">
            <div className="Carousel__inner">
                <div className="Carousel__group" style={{transform: `translateX(${transform}px)`, width: props.groupSize}} data-status={status} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} data-name={props.name}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Carousel;