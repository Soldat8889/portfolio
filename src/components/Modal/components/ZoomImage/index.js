import React, { useState } from "react";
import PropTypes from "prop-types";

// Utils
import { smTr } from "../../../../services/tools/GlobalVariables";

/**
 * Zoom Image with Transform
 * 
 * @param {React.Props} props Props
 */
function ZoomImage({ id, className, src, alt, title }) {
    const [isLoaded, setIsLoaded] = useState(false);

    function handleLoadingImage() {
        setIsLoaded(true);
    }

    /**
     * 
     * @param {Event} e 
     */
    function setModal(e) {
        if(!isLoaded) return;

        const target = e.target;
        const modalDisplay = document.querySelector("#modalDisplay");

        modalDisplay.classList.add("modal-display_active");

        setTimeout(() => {
            modalDisplay.classList.add("modal-display_overlay");
        }, smTr / 2);

        const baseY = target.getBoundingClientRect().y;
        const baseX = target.getBoundingClientRect().x;
        const baseW = target.getBoundingClientRect().width;
        const baseH = target.getBoundingClientRect().height;

        const image = new Image();

        image.alt = alt;
        image.title = title;
        image.setAttribute("data-modal", true);
        image.setAttribute("data-zoom-image", true);
        image.classList.add("zoom-image__modal");
        image.style.top = `${baseY + window.scrollY}px`;
        image.style.left = `${baseX}px`;
        image.style.width = `${baseW}px`;
        image.style.height = `${baseH}px`;

        const clientWidth = document.body.clientWidth;
        let scale;

        const maxX = clientWidth - baseW;
        const spaceCurrentMaxX = maxX - baseX;
        const middleX = spaceCurrentMaxX - maxX / 2;

        const maxY = window.innerHeight - baseH;
        const spaceCurrentMaxY = maxY - baseY;
        const middleY = spaceCurrentMaxY - maxY / 2;

        const scaleW = clientWidth / baseW;
        const scaleH = window.innerHeight / baseH;

        const landscape = baseW > baseH;
        const portrait = baseH > baseW;

        // Base Width > Base Height (landscape image)
        if(landscape) {
            // IF scaling in width dimension is smaller than clientWidth, so you can continue to fit with height
            (baseW * scaleH) < clientWidth ? scale = scaleH : scale = scaleW;
        }

        // Base Height > Base Width (portrait image)
        if(portrait) {
            // IF scaling in height dimension is smaller than innerHeight, so you can continue to fit with width
            (baseH * scaleW) < window.innerHeight ? scale = scaleW : scale = scaleH;
        }

        image.src = src;

        image.onload = () => {
            document.body.appendChild(image);

            setTimeout(() => {
                target.setAttribute("data-select-modal", "hidden");
                image.style.transform = `translateY(${middleY}px) translateX(${middleX}px) scale(${scale})`;
            }, 100);
        };
    }

    return (
        <img id={id} className={`${className} zoom-image__element`} src={src} alt={alt} title={title} data-select-modal data-zoom-image={isLoaded} onClick={setModal} onLoad={handleLoadingImage} />
    );
}

ZoomImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
};

export default ZoomImage;