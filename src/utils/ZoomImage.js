import React from "react";

/**
 * Zoom Image with Transform, ONLY Carousel
 * 
 * @param {React.Props} props Props
 */
function ZoomImage(props) {
    function zoomIn(active) {
        const modalRoot = document.querySelector("#modalRoot");
        const outModal = document.querySelector("#outModal");
        const modalZoomImage = document.createElement("img");

        outModal.classList.add("out-modal__effect_active");

        modalZoomImage.src = active.src;
        modalZoomImage.alt = active.alt;
        modalZoomImage.classList.add("modal_zoom-image");
        modalZoomImage.setAttribute("data-modal", true);
        modalZoomImage.style.top = `${window.pageYOffset}px`;
        
        modalRoot.appendChild(modalZoomImage);
    }

    /**
     * Handle Click
     * @param {Event} e Event
     */
    function handleClick(e) {
        const target = e.currentTarget;

        zoomIn(target);
    }

    const handleCreateList = () => {
        const items = [];

        props.items.map((item, i) => {
            return items.push(
                <div className="Carousel__item" key={i}>
                    <img src={item.src} alt={item.alt} className={item.className} data-zoom-image data-scale={item.scale} onClick={handleClick} />
                </div>
            );
        });

        return items;
    };

    return handleCreateList();
}

export default ZoomImage;