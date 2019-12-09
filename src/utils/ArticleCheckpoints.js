import React, {useState, useEffect, useCallback} from "react";
import PropTypes from "prop-types";

function ArticleCheckpoints({title = "-"}) {
    // Init States
    const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
    const [nextProgression, setNextProgression] = useState(0);
    const [currentSection, setCurrentSection] = useState("");

    const observerHandler = useCallback(() => {
        // Checkpoint elements
        const checkpointsBox = document.querySelector(".Article__checkpoints");
        const checkpointsBoxBar = document.querySelector(".Article__checkpoints__bar_filled");
        const listItems = document.querySelectorAll(".Article__checkpoints__menu__item");
        
        // Collected with [data-article-checkpoint] attr
        const checkpoints = []; // Get relative position of checkpoints

        const items = document.querySelectorAll("[data-article-checkpoint]");

        items.forEach((item) => {
            checkpoints.push(window.scrollY + item.getBoundingClientRect().top + item.parentElement.getBoundingClientRect().height - (window.innerHeight * 0.5));
        });

        // Bookmarked Items Menu
        listItems.forEach((item) => {
            if(parseInt(item.getAttribute("data-key"), 10) === currentCheckpoint) {
                item.classList.add("Article__checkpoints__menu__item_active");
            } else {
                item.classList.remove("Article__checkpoints__menu__item_active");
            }
        });

        // Article bottom
        const article = document.querySelector(".Article_wrapper");

        checkpoints.push(window.scrollY + article.getBoundingClientRect().bottom - (window.innerHeight * 0.5));

        // Get the absolute position of the current checkpoint
        const checkpointAbsPosition = (checkpoints[currentCheckpoint] - window.scrollY);

        // CurrentCheckpointAbsPosition | ? %
        // ProgressionToNextCheckpoint  | 100 %

        if(checkpoints[currentCheckpoint] - checkpoints[currentCheckpoint - 1]) {
            // Get the progression to the next checkpoint
            setNextProgression(checkpointAbsPosition * 100 / (checkpoints[currentCheckpoint] - checkpoints[currentCheckpoint - 1]));
        } else {
            // currentCheckpoint is 0 (index 0)
            setNextProgression(checkpointAbsPosition * 100 / (checkpoints[currentCheckpoint]));
        }


        // Hide Checkpoint Box when currentCheckpoint is 0 or max
        if(currentCheckpoint === 0 || (currentCheckpoint === checkpoints.length)) {
            checkpointsBox.classList.add("Article__checkpoints_outside");
            checkpointsBoxBar.style.width = "100%";
        } else {
            checkpointsBox.classList.remove("Article__checkpoints_outside");
        }

        // Scroll Down Behavior
        // e.g.
        // STAGE[0] SCROLL -> 0 - NEXT CHECKPOINT AT 500
        // STAGE[0] *Scroll Up* -> 501 - STAGE IS NOW STAGE[1] - NEXT CHECKPOINT AT 1200
        if(checkpoints[currentCheckpoint] <= window.scrollY) {
            setCurrentCheckpoint(currentCheckpoint + 1);
        } 
        
        // Scroll Up Behavior
        // e.g.
        // STAGE[1] SCROLL -> 501 - PREVIOUS CHECKPOINT AT 500
        // STAGE[1] *Scroll Down* -> 400 - STAGE IS NOW STAGE[0] - PREVIOUS CHECKPOINT: NONE
        if(checkpoints[currentCheckpoint - 1] >= window.scrollY) {
            setCurrentCheckpoint(currentCheckpoint - 1);
        }

        const sections = []; // Get relative position of sections

        const sectionTitles = document.querySelectorAll("[data-article-section]");

        sectionTitles.forEach((section) => {
            sections.push(section.getBoundingClientRect().top + section.parentElement.getBoundingClientRect().height - (window.innerHeight * 0.5));
        });

        let i = -1;
        sections.map((distance) => {
            distance <= 0 && i++;
            return distance <= 0;
        });

        i >= 0 && setCurrentSection(sectionTitles[i].textContent);
        
    }, [currentCheckpoint]);

    const createTitles = () => {
        const items = [];
        const titles = document.querySelectorAll("[data-article-checkpoint]");

        titles.forEach((title, i) => {
            items.push(
                <li className="Article__checkpoints__menu__item" key={i + 1} data-key={i + 1}>{title.getAttribute("data-short-title")}</li>
            );
        });

        return items;
    };

    useEffect(function bindingEvents() {
        window.addEventListener("scroll", observerHandler);
        window.addEventListener("resize", observerHandler);

        return () => { 
            window.removeEventListener("scroll", observerHandler);
            window.removeEventListener("resize", observerHandler);
        };
    }, [observerHandler]);

    useEffect(function componentDidMount() {
        // Call it!
        observerHandler();
    }, [observerHandler]);

    return (
        <div className="Article__checkpoints">
            <h2 className="Article__checkpoints__title_2">{currentSection}</h2>
            <h1 className="Article__checkpoints__title_1">{title}</h1>
            <div className="Article__checkpoints__bar">
                <div className="Article__checkpoints__bar_filled" style={{width: `${100 - nextProgression}%`}}></div>
            </div>
            <ul className="Article__checkpoints__menu" style={{transform: `translateY(-${(currentCheckpoint - 1) * 25}px)`}}>
                {createTitles()}
            </ul>
        </div>
    );
}

ArticleCheckpoints.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default ArticleCheckpoints;