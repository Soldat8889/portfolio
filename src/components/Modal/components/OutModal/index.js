import React, { useRef, useEffect, useCallback } from "react";

// Utils
import { smTr } from "../../../../services/tools/GlobalVariables";

function OutModal(props) {
    const ref = useRef(null);
    
    const removeModal = useCallback(
        /**
         * @param {Event} e
         */

        (e) => {
            const outModal = ref.current;
            const modalDisplay = document.querySelector("#modalDisplay");
            const modalSelects = document.querySelectorAll("[data-select-modal]");
            const modals = [...document.querySelectorAll("[data-modal]")];

            modals.forEach(
                /**
                 * @param {HTMLElement} modal
                 */

                (modal) => {
                // !ref.current.contains(e.target), #modalDisplay is outside the outModal, so IF I click there, it cannot have the outModal in targetElement
                if(outModal && !outModal.contains(e.target)) {
                    modalDisplay.classList.remove("modal-display_overlay");

                    setTimeout(() => {
                        modalDisplay.classList.remove("modal-display_active");
                        
                        if(modal.getAttribute("data-zoom-image")) {
                            modal.style.transform = null;
                        }

                        setTimeout(() => {
                            try {
                                modal.parentElement.removeChild(modal);
                            } catch(e) {}
    
                            modalSelects.forEach(e => e.getAttribute("data-select-modal") === "hidden" && e.setAttribute("data-select-modal", true));
                        }, smTr);
                    }, smTr);
                }
        });
    }, [ref]);

    useEffect(function bindEvents() {
        document.addEventListener("mousedown", removeModal);
        document.addEventListener("scroll", removeModal);

        return () => {
            document.removeEventListener("mousedown", removeModal);
            document.removeEventListener("scroll", removeModal);
        };
    });

    return (
        <div className="out-modal__container" ref={ref}>{props.children}</div>
    );
}

export default OutModal;