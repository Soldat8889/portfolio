import React, { useEffect, useState } from "react";

function Gauge(props) {
    const [percent, setPercent] = useState(props.percent);
    const [progress, setProgress] = useState();

    useEffect(() => {
        setProgress(Math.round(1000 * (360 / 100 * percent)) / 1000);
    }, [percent, progress]);

    useEffect(() => {
        setPercent(props.percent);
    }, [props.percent]);

    return (
        <div className="gauge__container" onClick={props.onClick && props.onClick}>
            <div className={`gauge__${props.size}px ${progress > 180 ? "gg__50" : null}`} data-progress={props.percent}>
                <div className={`gauge__${props.size}px_wrapper`}>
                    <div className={`gauge__${props.size}px_title`}>{props.children}</div>
                </div>
                <div className={`gauge__${props.size}px_progress ${progress > 180 ? "gg__50" : null}`}>
                    <div className={`gauge__${props.size}px_progress-fill ${progress > 180 ? "gg__50" : null}`} style={{transform: `rotate(${progress}deg)`}}></div>
                </div>
            </div>
        </div>
    );
}

export default Gauge;