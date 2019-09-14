import React, { useEffect, useCallback, useState, Fragment } from "react";

// Components
import Home from "./Body/Home";
import AboutMe from "./Body/AboutMe";

const sliderDelay=1000;

function Slider() {
    const [maxPage, setMaxPage]=useState(0);
    const [page, setPage]=useState(0);

    const [width, setWidth]=useState(window.innerWidth);
    const [translateX, setTranslateX]=useState(0);
    const [status, setStatus]=useState("static");

    useEffect(function componentDidMount() {
        setMaxPage(-Math.abs(document.getElementById("Slider").children.length) + 1);
    
        document.documentElement.style.overflow = "hidden";

        return () => document.documentElement.style.overflow = "initial";
    }, []);

    useEffect(function hashToSlide() {
        const hashValue=parseInt(window.location.hash.substr(1));

        if(!isNaN(hashValue) && -1 <= hashValue && hashValue <= 0) {
            setPage(hashValue);
        }
    }, [setMaxPage]);

    const createWaypoint = () => {
        let waypoints=[];

        for(let i=0; i >= maxPage; i--) {
            waypoints.push(
                <button key={i} className="Slider__navigation_waypoint" data-page={i} onClick={() => setPage(i)}>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                </button>
            );
        }

        return waypoints;
    };

    const handleResize=useCallback(() => {
        setWidth(window.innerWidth);
    }, []);

    useEffect(function resizeEvent() {
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize); };
    }, [handleResize]);

    useEffect(function setWidth() {
        const slider=document.getElementById("Slider");
        const sections=document.querySelectorAll(".Slider__section");

        // eslint-disable-next-line no-unused-vars
        for (const item of sections) {
            item.style.width=`${width}px`;
        }

        slider.style.width=`${width * sections.length}px`;
    }, [width]);

    useEffect(function setTranslate() {
        window.history.pushState(null, null, `#${page}`);
        
        setTranslateX(width * page);
    }, [width, page]);

    const handleWheel=useCallback((e) => {
        if(status === "animated") return;

        switch (e.deltaY) {
            case -100:
                if(page !== 0) {
                    setPage(page + 1);

                    setStatus("animated");
                    setTimeout(() => { setStatus("static"); }, sliderDelay);
                }
                break;
            case 100:
                if(page !== maxPage) {
                    setPage(page - 1);

                    setStatus("animated");
                    setTimeout(() => { setStatus("static"); }, sliderDelay);
                }
                break;
            default:
                break;
        }
    }, [page, status, maxPage]);

    useEffect(function wheelEvent() {
        window.addEventListener("wheel", handleWheel);
        return () => { window.removeEventListener("wheel", handleWheel); };
    }, [handleWheel]);
    
    return (
        <Fragment>
            <div className="Slider" id="Slider" style={{transform: `translateX(${translateX}px) translateY(-50%)`}} data-page={page} data-status={status}>
                <Home />
                <AboutMe />
            </div>
            <SliderNavigationBar 
                createWaypoint={() => createWaypoint()} />
        </Fragment>
    );
}

function SliderNavigationBar(props) {
    return (
        <div className="Slider__navigation-bar">
            <div className="Slider__navigation-wrapper">
                {props.createWaypoint()}
            </div>
        </div>
    );
}

export default Slider;