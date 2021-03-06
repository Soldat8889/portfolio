import React, {useState, useEffect, useCallback} from "react";
import { HashLink as Link } from "react-router-hash-link";
import PropTypes from "prop-types";

function ArticleCheckpoints({title = "-"}) {
    // Init States
    const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
    const [nextProgression, setNextProgression] = useState(0);
    const [currentSection, setCurrentSection] = useState("");
    const [isFolded, setIsFolded] = useState(false);

    const observerHandler = useCallback(() => {
        function displayHandler(checkpointsLength) {
            // Checkpoint elements
            const checkpointsBox = document.querySelector(".Article__checkpoints");
            const checkpointsBoxContainer = document.querySelector(".Article__checkpoints__container");
            const checkpointsBoxBar = document.querySelector(".Article__checkpoints__bar_filled");
            const listItems = document.querySelectorAll(".Article__checkpoints__menu__item");
            
            const checkpointsBoxRelY = checkpointsBox.getBoundingClientRect().top;
            
            // Hide Checkpoint Box when currentCheckpoint is 0 or max
            if(currentCheckpoint === 0 || (currentCheckpoint === checkpointsLength + 1)) {
                checkpointsBox.classList.add("Article__checkpoints_outside");
                checkpointsBoxBar.style.width = "100%";
            } else {
                checkpointsBox.classList.remove("Article__checkpoints_outside");
            }
    
            // Bookmarked Items Menu
            listItems.forEach((item) => {
                if(parseInt(item.getAttribute("data-key"), 10) === currentCheckpoint) {
                    item.classList.add("Article__checkpoints__menu__item_active");
                } else {
                    item.classList.remove("Article__checkpoints__menu__item_active");
                }
            });
    
            // Sticky statement
            if(checkpointsBoxRelY <= 165) {
                checkpointsBoxContainer.style.transform = `translateY(${-checkpointsBoxRelY + 165}px)`;
            }
        }
    
        function sectionHandler() {
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
        }
        
        // Collected with [data-article-checkpoint] attr
        const checkpoints = []; // Get relative position of checkpoints

        const items = document.querySelectorAll("[data-article-checkpoint]");

        items.forEach((item) => {
            checkpoints.push(window.scrollY + item.getBoundingClientRect().top + item.parentElement.getBoundingClientRect().height - (window.innerHeight * 0.5));
        });

        // Section Handler: currentSection update to subtitle
        sectionHandler();

        // Display Handler: Displaying and animating
        displayHandler(checkpoints.length);

        // Article bottom
        const article = document.querySelector(".Article_wrapper");

        checkpoints.push(window.scrollY + article.getBoundingClientRect().bottom - (window.innerHeight * 0.6));

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
    }, [currentCheckpoint]);

    function createTitlesHandler() {
        const items = [];
        const titles = document.querySelectorAll("[data-article-checkpoint]");

        titles.forEach((title, i) => {
            items.push(
                <li className="Article__checkpoints__menu__item" key={i + 1} data-key={i + 1}>
                    <Link to={`#${title.id}`}>{title.getAttribute("data-short-title")}</Link>
                </li>
            );
        });

        return items;
    }

    useEffect(function foldHandler() {
        const listItems = document.querySelectorAll(".Article__checkpoints__menu__item");
       
        if(isFolded) {
            // Return all items to visible
            listItems.forEach((item) => {
                item.classList.add("Article__checkpoints__menu__item_unfold");
            });
        } else {
            // Return all items to invisible
            listItems.forEach((item) => {
                item.classList.remove("Article__checkpoints__menu__item_unfold");
            });
        }
    }, [isFolded]);

    useEffect(function bindEvents() {
        document.addEventListener("scroll", observerHandler);
        window.addEventListener("resize", observerHandler);

        return () => { 
            document.removeEventListener("scroll", observerHandler);
            window.removeEventListener("resize", observerHandler);
        };
    }, [observerHandler]);

    useEffect(function () {
        // Call it! (permanently)
        observerHandler();
    });

    return (
        <div className="Article__checkpoints">
            <div className="Article__checkpoints__container">
                <h2 className="Article__checkpoints__title_2">{currentSection}</h2>
                <h1 className="Article__checkpoints__title_1">{title}</h1>
                <div className="Article__checkpoints__bar">
                    <div className="Article__checkpoints__bar_filled" style={{width: `${100 - nextProgression}%`}}></div>
                </div>
                <ul className="Article__checkpoints__menu" style={isFolded ? {transform: `translateY(0)`} : {transform: `translateY(-${(currentCheckpoint - 1) * 29}px)`}}>
                    {createTitlesHandler()}
                </ul>
                <FoldButton isFolded={isFolded} onClick={() => isFolded ? setIsFolded(false) : setIsFolded(true)} />
            </div>
        </div>
    );
}

function FoldButton(props) {
    return (
        <div className="Article__checkpoints__btn_fold" onClick={props.onClick}>
            {props.isFolded ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
        </div>
    );
}

ArticleCheckpoints.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default ArticleCheckpoints;