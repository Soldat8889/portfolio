import React, { useEffect, useCallback, useState } from "react";

// Scenes
import Home    from "../../components/Hero/components/Home";
import AboutMe from "../../components/Hero/components/AboutMe";

// Tools
import { loTr } from '../../services/tools/GlobalVariables';

const sliderDelay = loTr;

function Slider() {
    const [maxSlide, setMaxSlide] = useState(0);
    const [slide, setSlide] = useState(0);

    const [width, setWidth] = useState(window.innerWidth);
    const [translateX, setTranslateX] = useState(0);
    const [status, setStatus] = useState("static");

    useEffect(function componentDidMount() {
        setMaxSlide(-Math.abs(document.getElementById("Slider").children.length) + 1);
    }, []);

    useEffect(function hashToSlide() {
        const hashValue = parseInt(window.location.hash.substr(1));

        if(!isNaN(hashValue) && -1 <=  hashValue && hashValue <=  0) {
            setSlide(hashValue);
        }
    }, [setMaxSlide]);

    const createWaypoint = () => {
        let waypoints = [];

        for(let i = 0; i >= maxSlide; i--) {
            waypoints.push(
                <button key={i} className="Slider__navigation_waypoint" data-slide={i} onClick={() => setSlide(i)}>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" />
                    </svg>
                </button>
            );
        }

        return waypoints;
    };

    useEffect(function handleCurrentSlide() {
        const slides = document.querySelectorAll("[data-slide]");

        // eslint-disable-next-line no-unused-vars
        for(const values of Object.values(slides)) {
            if(parseInt(values.getAttribute("data-slide")) === slide) {
                values.setAttribute("data-current-slide", true);
            } else {
                values.removeAttribute("data-current-slide");
            }
        }
    }, [slide]);

    const handleResize = useCallback(() => {
        setWidth(window.innerWidth);
    }, []);

    useEffect(function resizeEvent() {
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize); };
    }, [handleResize]);

    useEffect(function setWidth() {
        const slider = document.getElementById("Slider");
        const sections = document.querySelectorAll(".Slider__section");

        // eslint-disable-next-line no-unused-vars
        for (const item of sections) {
            item.style.width = `${width}px`;
        }

        slider.style.width = `${width * sections.length}px`;
    }, [width]);

    useEffect(function setTranslate() {
        window.history.pushState(null, null, `#${slide}`);
        
        setTranslateX(width * slide);
    }, [width, slide]);

    useEffect(function handleTimeout() {
        const timer = setTimeout(()  => { setStatus("static"); }, sliderDelay);
        return () => clearTimeout(timer);
    }, [slide]);

    const handleWheel = useCallback((e)  => {
        if(status === "animated") return;

        switch(true) {
            case Math.sign(e.deltaY) === -1:
                if(slide !==  0) {
                    setSlide(slide + 1);

                    setStatus("animated");
                }
                break;
            case Math.sign(e.deltaY) === 1:
                if(slide !== maxSlide) {
                    setSlide(slide - 1);

                    setStatus("animated");
                }
                break;
            default:
                break;
        }
    }, [slide, status, maxSlide]);

    useEffect(function wheelEvent() {
        document.addEventListener("wheel", handleWheel);
        return () => { document.removeEventListener("wheel", handleWheel); };
    }, [handleWheel]);
    
    return (
        <main id="main-content">
            <div className="page-content page-part-wrapper page-fullscreen Slider_container" style={{overflow: "hidden"}}>
                <div className="Slider" id="Slider" style={{transform: `translateX(${translateX}px) translateY(-50%)`}} data-current-slide={slide} data-status={status}>
                    <Home slide={0} />
                    <AboutMe slide={-1} />
                </div>
                <SliderNavigationBar 
                    slide={slide}
                    createWaypoint = {() => createWaypoint()} />
                <div className="Home__alert">
                    <i className="fas fa-hammer"></i>
                    This website is currently at <span className="Home__alert_bold">development stage</span>.
                </div>
            </div>
        </main>
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