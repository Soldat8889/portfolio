import React, { useEffect, useState } from "react";

// Services
import CounterAnimation from '../../services/animations/Counter';

// Tools
import { smTr, meTr, loTr } from './../../services/tools/GlobalVariables';

function Loader() {
    const [isReady, setIsReady] = useState(false);

    useEffect(function componentDidMount() {
        setIsReady(true);
    }, []);

    useEffect(function loadHandler() {
        // https://codepen.io/ahsanrathore/post/accurate-page-progress-bar
        const html = document.documentElement;
        const loader = document.getElementById("loader");
        const loaderWrapper = document.getElementById("loader-percent-wrapper");
        const loaderPercent = document.getElementById("loader-percent");
        const loaderBar = document.getElementById("loader-bar");
        const loaderBarInitTop = loaderBar.parentElement.getBoundingClientRect().top;
        const icon = document.getElementById("loader-icon");

        // Development Mode
        if(process.env.NODE_ENV === "development") {
            html.classList.remove("on-load");
            loader.classList.add("is-hidden");

            return;
        }

        const perfTimeData = window.performance.timing;
        const time = -(perfTimeData.loadEventEnd - perfTimeData.navigationStart); // Calculate the page loading time

        const loaderProgress = new CounterAnimation(0, 100, time, loaderPercent, function () {
            setTimeout(() => {
                icon.classList.add("slide_bottom");
                loaderWrapper.classList.remove("is-visible_transitional");
                
                setTimeout(() => {
                    loaderBar.parentElement.style.transform = `translateY(-${loaderBarInitTop}px)`;

                    setTimeout(() => {
                        loaderBar.parentElement.style.width = "100vw";
                        icon.classList.remove("is-visible_transitional");

                        setTimeout(() => {
                            html.classList.remove("on-load");
                            loader.classList.remove("is-visible_transitional");
                            
                            setTimeout(() => {
                                loader.classList.add("is-hidden");
                            }, smTr);
                        }, loTr);
                    }, smTr);
                }, meTr);
            }, smTr);
        });
        
        loaderProgress.animate();

        const timer = setInterval(function() {
            loaderBar.style.width = `${loaderProgress.current}%`;

            loaderProgress.current === 100 && clearInterval(timer);
        }, loaderProgress.stepTime);

    }, [isReady]);

    return (
        <div id="loader" className="Loader is-visible_transitional center-hv page-fullscreen">
			<div className="Loader__content center-hv">
				<img id="loader-icon" className="Loader__icon is-visible_transitional" src="/images/utils/icon.svg" alt="Icon" />
				<div id="loader-percent-wrapper" className="Loader__percentage_wrapper is-visible_transitional">
					<div id="loader-percent" className="Loader__percentage" data-percentage="0">0</div>
					<span className="Loader__percentage"> %</span>
				</div>
				<div className="Loader__progress-bar">
					<div id="loader-bar" className="Loader__progress-bar_filled"></div>
				</div>
			</div>
		</div>
    );
}

export default Loader;