import { smTr } from '../../../../services/tools/GlobalVariables';

function HandleHash() {
    try {
        const targetID = document.querySelector(window.location.hash);

        setTimeout(() => {
            if(!targetID) return;
            targetID.scrollIntoView({
                behavior: "smooth"
            });
        }, smTr);
    } catch(e) {}
}

export default HandleHash;