function ScrollHandler() {
    try {
        const targetID = document.querySelector(window.location.hash);

        setTimeout(() => {
            if(!targetID) return;
            targetID.scrollIntoView({
                behavior: "smooth"
            });
        }, 200);
    } catch(e) {}
}

export default ScrollHandler;