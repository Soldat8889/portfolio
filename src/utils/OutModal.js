import React, { useRef, useEffect } from "react";

/**
 * Alert if clicked on outside of element
 * 
 * @param {React.Ref} ref OutModalContainer Reference
 */
function useOutModal(ref) {
    function removeOutModal(e) {
        const modalRoot = document.querySelector("#modalRoot");
        const outModal = document.querySelector("#outModal");
        const modal = modalRoot.querySelector("[data-modal]");

        if(ref.current && !ref.current.contains(e.target) && modal) { 
            modalRoot.removeChild(modal);
            outModal.classList.remove("out-modal__effect_active");
        }
    }

    useEffect(function bindingEvent() {
        document.addEventListener("mousedown", removeOutModal);
        document.addEventListener("scroll", removeOutModal);

        return () => {
            document.removeEventListener("mousedown", removeOutModal);
            document.removeEventListener("scroll", removeOutModal);
        };
    });
}

function OutModal(props) {
    const outModalContainer = useRef(null);
    useOutModal(outModalContainer);

    return (
        <div className="out-modal__container" ref={outModalContainer}>{props.children}</div>
    );
}

export default OutModal;