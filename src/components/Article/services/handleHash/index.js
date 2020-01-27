/**
 * Scrolling to Hash, with a scroll behavior option
 * @param {ScrollBehavior} behavior 
 * @param {Number} timeout
 */
function HandleHash(behavior, timeout) {
    try {
        const targetID = document.querySelector(window.location.hash);

        setTimeout(() => {
            if(!targetID) return;
            targetID.scrollIntoView({
                behavior
            });
        }, timeout);
    } catch(e) {}
}

export default HandleHash;