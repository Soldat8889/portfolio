/* eslint-disable no-irregular-whitespace */
import React, { useEffect, Fragment, useContext, useState } from "react";

import AboutMeComponent from "./Body/AboutMe";

// Utils
import Gauge from "./../utils/Gauge";
import ZoomImage from "./../utils/ZoomImage";

// Contexts
import ThemeContext from "./../contexts/ThemeContext";
import LanguageContext from "./../contexts/LanguageContext";
import Carousel from "../utils/Carousel";
import ArticleCheckpoints from "../utils/ArticleCheckpoints";

function AboutMe() {
    const theme = useContext(ThemeContext);

    useEffect(function componentDidMount() {
        const pageContent = document.querySelector(".page-content");

        pageContent.classList.add("page-fullscreen");

        return () => {
            pageContent.classList.remove("page-fullscreen");
        };
    }, []);
    
    return (
        <Fragment>
            <div className="page-content page-part-wrapper">
                <div className="Slider Slider_template" style={{transform: `translateY(-50%)`}}>
                    <AboutMeComponent />
                </div>
            </div>
            <div className="Article_wrapper">
                <div className={`page-content page-part-wrapper Article_background Article_background_first ${theme.theme === "light" ? "Article_background_minds" : "Article_background_minds_dark"}`}>
                    <div className="Article">
                        <div className="Article__title_wrapper">
                            <h1 className="Article__title_level-1" data-article-section>Qui suis-je ?</h1>
                        </div>
                        <FirstPart />
                    </div>
                </div>
                <div className={`page-content page-part-wrapper Article_background ${theme.theme === "light" ? "Article_background_minds" : "Article_background_minds_dark"}`}>
                    <div className="Article">
                        <div className="Article__title_wrapper">
                            <h1 className="Article__title_level-1" data-article-section>En savoir plus sur moi</h1>
                        </div>
                        <SecondPart />
                    </div>
                </div>
            </div>
            <div id="ok" style={{height: "2000px"}}>
                
            </div>
        </Fragment>
    );
}

function CubicHeader(props) {
    return (
        <div className="Article__header">
            <h2 id={props.id} className="Article__title_level-2" data-article-checkpoint data-short-title={props.short}>{props.title}</h2>
            <img src="/images/utils/delimiter.svg" alt="Delimiter" />
        </div>
    );
}

function Link(props) {
    return (
        <a href={props.href} className={`Article__link ${props.className}`} target="_blank" rel="noopener noreferrer">{props.children}</a>
    );
}

function Profile() {
    return (
        <Fragment>
            <div className="Article__section_theme Article__container" data-index="first">
                <ArticleCheckpoints 
                    title="À propos de moi"
                />
                <CubicHeader short="Profil" title="Profil" id="profile" />
                <div className="Article_indent">
                    <p className="Article__text Article__text_indent">
                        Collégien en classe de troisième vivant actuellement dans un petit village de <Link href="https://www.google.com/maps/place/Seine-et-Marne/@48.6185381,2.4152656,9z">Seine-et-Marne</Link> (département 77), à côté du célèbre parc d’attractions <Link href="https://www.google.com/maps/place/Disneyland+Paris/@48.8690416,2.7905893,16z">Disneyland Paris</Link>, je m'épanouis en ce moment, depuis près maintenant de 3 ans (depuis juillet 2017), en m'étant lancé dans le monde du développement côté web (<Link href="https://github.com/Soldat8889">GitHub</Link>).
                    </p>
                    <p className="Article__text">
                        Je dessine et rends visible mes quelques productions artistiques (depuis peu sur <Link href="https://www.artstation.com/pata-tartiner">ArtStation</Link>), et joue aux jeux vidéo régulièrement.
                    </p>
                </div>
            </div>
            <Interest />
        </Fragment>
    );
}

function Interest() {
    const [interestIndex, setInterestIndex] = useState(5);

    useEffect(function selectedIndex() {
        const section = document.querySelector(`[data-section="hobbies-section"]`);
        const interest = section.children[interestIndex].children[0];

        // eslint-disable-next-line no-unused-vars
        for (const item of section.children) {
            item.children[0].style.transform = null;
        }

        interest.style.transform = "scale(1.2)";
    }, [interestIndex]);

    return (
        <div className="Article__section_theme Article__container">
            <CubicHeader short="Centres d'intérêt" title="Centres d'intérêt" id="interest" />
            <div className="Article_indent">
                <div className="Article__section">
                    <div className="col-m-6">
                        <ul className="circle-container" data-section="hobbies-section"> 
                            <Gauge 
                                percent="100"
                                size="100"
                                onClick={() => setInterestIndex(0)}
                            >
                                <i className="fas fa-code"></i>
                            </Gauge>
                            <Gauge 
                                percent="100"
                                size="100"
                                onClick={() => setInterestIndex(1)}
                            >
                                <i className="fas fa-gamepad"></i>
                            </Gauge>
                            <Gauge 
                                percent="100"
                                size="100"
                                onClick={() => setInterestIndex(2)}
                            >
                                <i className="fas fa-utensils"></i>
                            </Gauge>
                            <Gauge 
                                percent="100"
                                size="100"
                                onClick={() => setInterestIndex(3)}
                            >
                                <i className="fas fa-route"></i>
                            </Gauge>
                            <Gauge 
                                percent="100"
                                size="100"
                                onClick={() => setInterestIndex(4)}
                            >
                                <i className="fas fa-film"></i>
                            </Gauge>
                            <Gauge 
                                percent="100"
                                size="100"
                                onClick={() => setInterestIndex(5)}
                            >
                                <i className="fas fa-paint-brush"></i>
                            </Gauge>
                        </ul>
                    </div>
                    <div className="col-m-6 AboutMe__section_interest">
                        <LanguageContext.Consumer>
                            {({ languageConfig }) => (
                                <p className="Article__text">
                                    {languageConfig.AboutMe.Who.Interest[interestIndex].Title}
                                    <br />
                                    <span className="Article__text_sub">
                                        {languageConfig.AboutMe.Who.Interest[interestIndex].Sub}
                                    </span>
                                </p>
                            )}
                        </LanguageContext.Consumer>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <Fragment>
            <div className="Article__section_theme Article__container" data-index="last">
                <CubicHeader short="Expérience pro." title="Expérience professionnelle" id="experience" />
                <div className="Article_indent">
                    <div className="Article__section">
                        <h3 className="Article__title_level-3">Qu’est-ce que je voudrais faire plus tard dans ma vie ?</h3>
                        <p className="Article__text">
                            <span className="Article__text_bold">Être architecte.</span>
                        </p>
                        <p className="Article__text">
                            Depuis tout petit, j'ai voulu être architecte sans savoir pourquoi. Mais ce que je savais à cet âge-là, c'est que je j'aimais dessiner.
                        </p>
                        <p className="Article__text">
                            Un des facteurs qui contribuait à ma créativité : <span className="Article__text_bold">voyager</span>.
                            <br />
                            Voyageant à travers la France ou dans d’autres pays avec ma famille, je visite leur histoire à travers les coins de rue. Chaque architecture nous rappelle un pays grâce au matériau utilisé, la forme, etc...
                        </p>
                        <p className="Article__text">
                            Le monde des <span className="Article__text_bold">jeux vidéo</span> est aussi un autre facteur.
                            <br />
                            On dit souvent que l'imagination n'a pas de limite ; ici c'est le cas, la créativité est appliquée et ludique. J'ai toujours beaucoup adoré et joué à la série des jeux <Link href="https://www.nintendo.fr/Jeux/L-univers-Nintendo/Portail-Animal-Crossing/Portail-Animal-Crossing-1057128.html">Animal Crossing</Link>. Depuis plusieurs années, je joue en ce moment à un MOBA très connu, <Link href="https://euw.leagueoflegends.com/fr/">League of Legends</Link>.
                            <br />
                            Les univers sont divers et variés... et ces univers, qui entourent le monde du jeu vidéo, influencent le caractère principal de l'histoire et du monde dans lequel vit les personnages : l'architecture, qui est lui-même affecté par la culture et qui, donne une image propre à une ville, région, ou un pays ; similairement dans le monde dans lequel nous vivons.
                        </p>
                    </div>
                </div>
                <div className="timeline">
                    <Link href="https://www.lafourchette.com/restaurant/suan-siam/217757" className="Article__section_theme Article__box timeline__mark">
                        <h3 className="Article__title_level-3 Article__box__title">Designer du restaurant Suan Siam</h3>
                        <div className="Article__box__sections">
                            <img src="/images/suan-siam--icon.png" className="Article__box__image" alt="Suan Siam Icon" />
                            <div className="Article__box__right">
                                <p className="Article__text Article__box__resume">
                                    <span className="Article__text_bold">
                                        Fin Juin 2019 - Début Août 2019
                                    </span>
                                    <br />
                                    Designer de l'actuelle carte du restaurant Suan Siam, faite à domicile (image de marque exclue).
                                </p>
                                <div className="Article__quotes">
                                    <p className="Article__text Article__text_indent">
                                        C’était la première fois que j’étais confronté dans le monde professionnel, et cette expérience a bien porté ses fruits. 
                                    </p>
                                    <p className="Article__text">
                                        L’étape la plus dure était de créer et imaginer la maquette de la carte, avoir la meilleure version, recommencer. Finitions de la maquette, puis enfin l’appréciation du résultat final !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Carousel groupSize={1080} max={400} name="suan-siam">
                <ZoomImage 
                    carouselRef="suan-siam"
                    items={[
                        {
                            name: "suan-siam__front",
                            src: "/images/suan-siam-page__front.png",
                            alt: "Suan Siam - Front Page",
                            className: "Carousel__item_image zoom-image",
                            scale: 2.5
                        },
                        {
                            name: "suan-siam__1",
                            src: "/images/suan-siam-page__1.png",
                            alt: "Suan Siam - 1st Page",
                            className: "Carousel__item_image zoom-image",
                            scale: 2.5
                        },
                        {
                            name: "suan-siam__2",
                            src: "/images/suan-siam-page__2.png",
                            alt: "Suan Siam - 2nd Page",
                            className: "Carousel__item_image zoom-image",
                            scale: 2.5
                        }
                    ]}
                />
            </Carousel>
        </Fragment>
    );
}

function Project() {
    return (
        <Fragment>
            <div className="Article__section_theme Article__container" data-index="first">
                <CubicHeader short="Projets" title="Projets" id="project" />
                <div className="Article_indent">
                    <div className="Article__section">
                        <h3 className="Article__title_level-3">Mes quelques dessins !</h3>
                    </div>
                </div>
            </div>
            {/* <Carousel>
                <div className="Carousel__group">
                    <div className="Carousel__item">
                        <img src="/images/suan-siam-page__front.png" alt="Suan Siam - Front Page" className="Carousel__item_image" />
                    </div>
                    <div className="Carousel__item">
                        <img src="/images/suan-siam-page__1.png" alt="Suan Siam - Mosaic Display" className="Carousel__item_image" />
                    </div>
                    <div className="Carousel__item">
                        <img src="/images/suan-siam-page__2.png" alt="Suan Siam - Some Pages" className="Carousel__item_image" />
                    </div>
                </div>
            </Carousel> */}
            <div className="Article__section_theme Article__container" data-index="first">
                <div className="timeline">
                    <Link href="https://lucassyhan.netlify.com" className="Article__section_theme Article__box timeline__mark">
                        <h3 className="Article__title_level-3 Article__box__title">Lucas SYHANATH : Portfolio</h3>
                        <div className="Article__box__sections">
                            <img src="https://via.placeholder.com/200" className="Article__box__image" alt="Placeholder" />
                            <div className="Article__box__right">
                                <p className="Article__text Article__box__resume">
                                    <span className="Article__text_bold">
                                        Rentrée 2019 - Présent
                                    </span>
                                    <br />
                                    Portfolio numérique qui me sert à me présenter à travers des lignes de caractères.
                                </p>
                                <div className="Article__quotes">
                                    <p className="Article__text Article__text_indent">
                                        Se présenter par soi-même est compliqué : garder les informations principales de sa vie, ne pas trop en mettre mais quand même assez pour que ça soit complet. Ca requiert un travail de rédaction, mais aussi d'un développeur. 
                                    </p>
                                    <p className="Article__text">
                                        Il faut la paire : travailler son contenu sans conteneur, ou fabriquer son conteneur sans contenu, ne servirait à rien.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}

function Contact() {
    return (
        <div className="Article__section_theme Article__container" data-index="last">
            <CubicHeader short="Me contacter" title="Me contacter" id="contact" />
            <div className="Article_indent">
                <div className="Article__section">
                    <p className="Article__text">
                        <a href="mailto:lucas.syhanath@gmail.com" className="Article__text_bold Article__link email">
                            lucas.syhanath@gmail.com
                        </a>
                    </p>
                </div>
                <div className="Article__section">
                    <form action="/aboutme">
                        <div>
                            <input className="Form__input" type="text" name="firstname" placeholder="Prénom" />
                            <input className="Form__input" type="text" name="firstname" placeholder="Nom" />
                        </div>
                        <textarea className="Form__textarea"></textarea>
                    </form>
                </div>
            </div>
        </div>
    );
}

function FirstPart() {
    return (
        <div className="Article__section">
            <Profile />
            {/* <div className="Article__section_theme Article_indent" id="traits-skills">
                <h2 className="Article__title_level-2">Traits de caractère & Compétences</h2>
                <div className="Article__section" id="traits">
                    <h3 className="Article__title_level-3">Je suis :</h3>
                    <p className="Article__text">
                        CRÉATIF, DÉTERMINÉ, SOIGNÉ, TRAVAILLEUR, PROCHE DE MA FAMILLE
                    </p>
                </div>
                <div className="Article__section" id="skills">
                    <h3 className="Article__title_level-3">Programmation :</h3>
                    <p className="Article__text">
                        JS          HTML / CSS  |   NodeJS<br />
                        React JS    Pug / SASS  |   ExpressJS
                    </p>
                </div>
                <div className="Article__section" id="languages">
                    <h3 className="Article__title_level-3">Langues littérales, l’écrit et le parler :</h3>
                    <p className="Article__text">
                        FRANCAIS <meter value="85" min="0" max="100"></meter><br />
                        ANGLAIS <meter value="50" min="0" max="100"></meter><br />
                        ALLEMAND <meter value="25" min="0" max="100"></meter>
                    </p>
                </div>
            </div> */}
            <Experience />
            <Project />
            <Contact />
        </div>
    );
}

function SecondPart() {
    return (
        <div className="Article__section" id="show-me-more">
            <div className="Article__section_theme Article__container" data-index="first">
                <CubicHeader short="Pourquoi coder ?" title="Pourquoi coder ?" id="why" />
                <div className="Article_indent">
                    <div className="Article__section_theme Article_indent">
                        <h3 className="Article__title_level-3">Pourquoi ai-je commencé à m'intéresser à écrire des lignes de code ?</h3>
                        <p className="Article__text Article__text_indent">
                            Étant une personne curieuse, j’ai débuté à coder dans ma chambre parce que je voulais savoir comment tous ces sites web étaient construits.
                            <br />
                            Comment se faisait-il, alors que ce n’était que des instructions qui se suivent, créaient une chose qui était concrètement visible ?
                        </p>
                        <p className="Article__text">
                            Mais tout m'était inconnu… autant de notions à découvrir, comme des concepts abstraits (tels que les class, object, les paradigmes de programmation), ou comment fonctionne ceci ou cela. 
                        </p>
                    </div>
                    <div className="Article__section_theme Article_indent Article__container">
                        <h3 className="Article__title_level-3">Comment est-ce que j’ai commencé à apprécié la programmation ?</h3>
                        <p className="Article__text Article__text_indent">
                            Quand on y pense, la programmation n’est pas seulement du code avec des suites d’instructions que nous pouvons pas comprendre. 
                            <br />
                            Il y a la partie front end que l’utilisateur peut voir : regroupant le design, l’Interface Utilisateur, l’Expérience Utilisateur. 
                            Et la partie serveur, le back end, qui s’oppose au front end, là où l’utilisateur ne peut pas voir, par exemple la base de donnée, gestion des tables.
                        </p>
                        <p className="Article__text">
                            <span className="Article__text_bold">
                                Je m’étais trouvé un nouveau centre d’intérêt qui s’ajoutait à mes deux autres activités principales : le dessin et le jeu vidéo.
                            </span>
                        </p>
                        <p className="Article__text">
                            Ma passion pour le dessin a fait penché la balance pour le front end. 
                            <br />
                            Pour moi, cette partie là du web est la plus complète car il faut prévoir une multitude de coups d’avances entre la gestion des versions du navigateur de l’utilisateur, lequel de ces choix touchera le plus de personnes, et plein d’autres aspects à aborder.
                        </p>
                    </div>
                </div>
            </div>
            <div className="Article__section_theme Article__container" data-index="last">
                <CubicHeader short="Un apprentissage ?" title="Un apprentissage ?" id="what" />
                <div className="Article_indent">
                    <div className="Article__section">
                        <p className="Article__text">
                            Le monde de la programmation évolue de façon constante.
                            <br />
                            <span className="Article__text_bold">
                                Il faut en permanence rechercher, appliquer et apprendre.
                            </span>
                        </p>
                        <p className="Article__text">
                            Cette activité m’a permis d'affuter mes compétences tels que :
                        </p>
                        <ul className="Article__list">
                            <li className="Article__list__item">Ma créativité</li>
                            <li className="Article__list__item">Mon sens de la logique</li>
                            <li className="Article__list__item">Mon niveau d’anglais (documentations, vidéos, écriture, etc.)</li>
                            <li className="Article__list__item">La patience (situations qui paraissent insurmontables)</li>
                            <li className="Article__list__item">Et surtout la flexibilité : la capacité de s’adapter à des situations et se rendre autonome</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;