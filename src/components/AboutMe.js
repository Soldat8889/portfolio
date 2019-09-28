import React, { useEffect, Fragment, useContext } from "react";

import AboutMeComponent from "./Body/AboutMe";

// Contexts
import ThemeContext from "./../contexts/ThemeContext";

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
            <div className={`page-content page-part-wrapper Article_background Article_background_first ${theme.theme === "light" ? "Article_background_minds" : "Article_background_minds_dark"}`}>
                <div className="Article container">
                    <div className="Article__title_wrapper">
                        <h1 className="Article__title_level-1">Qui suis-je ?</h1>
                    </div>
                    <FirstPart />
                    <hr className="Article__division" />
                </div>
            </div>
            <div className={`page-content page-part-wrapper Article_background ${theme.theme === "light" ? "Article_background_minds" : "Article_background_minds_dark"}`}>
                <div className="Article container">
                    <div className="Article__title_wrapper">
                        <h1 className="Article__title_level-1">En savoir plus sur moi</h1>
                    </div>
                    <SecondPart />
                </div>
            </div>
        </Fragment>
    );
}

function Link(props) {
    return (
        <a href={props.href} className={`Article__link ${props.className}`} target="_blank" rel="noopener noreferrer">{props.children}</a>
    );
}

function FirstPart() {
    return (
        <div className="Article__section">
            <div className="Article__section_theme Article_indent" id="profile">
                <h2 className="Article__title_level-2">Profil</h2>
                <p className="Article__text Article__text_indent">
                    Collégien en classe de troisième vivant actuellement dans un petit village de <Link href="https://www.google.com/maps/place/Seine-et-Marne/@48.6185381,2.4152656,9z">Seine-et-Marne</Link> (département 77), à côté du célèbre parc d’attractions <Link href="https://www.google.com/maps/place/Disneyland+Paris/@48.8690416,2.7905893,16z">Disneyland Paris</Link>, je m'épanouis en ce moment, depuis près maintenant de 3 ans (depuis juillet 2017), en m'étant lancé dans le monde du développement côté web (<Link href="https://github.com/Soldat8889">GitHub</Link>).
                </p>
                <p className="Article__text">
                    Je dessine et rends visible mes quelques productions artistiques (depuis peu sur <Link href="https://www.artstation.com/pata-tartiner">ArtStation</Link>), et joue aux jeux vidéo régulièrement, comme <Link href="https://euw.leagueoflegends.com/en_GB/">League of Legends</Link>, et <Link href="https://playoverwatch.com/">Overwatch</Link>.
                </p>
            </div>
            <div className="Article__section_theme Article_indent" id="interest">
                <h2 className="Article__title_level-2">Centres d'intérêt</h2>
                <div className="Article__section">
                    <h3 className="Article__title_level-3">Principaux</h3>
                    <p className="Article__text">
                        Dessiner
                        <br />
                        <span className="Article__text_sub">
                            Je dessine de temps en temps, quand quelque chose me vient à l'envie.
                        </span>
                    </p>
                    <p className="Article__text">
                        Développement web
                        <br />
                        <span className="Article__text_sub">
                            Développeur web front end à mes heures perdues depuis bientôt deux ans.
                        </span>
                    </p>
                    <p className="Article__text">
                        Jeux vidéo
                        <br />
                        <span className="Article__text_sub">
                            Joueur de jeux vidéo après de longues journées.
                        </span>
                    </p>
                </div>
                <div className="Article__section">
                    <h3 className="Article__title_level-3">Secondaires</h3>
                    <p className="Article__text">
                        Manger / Cuisiner, Voyager & Regarder des séries
                    </p>
                </div>
            </div>
            <div className="Article__section_theme Article_indent" id="traits-skills">
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
            </div>
            <div className="Article__section_theme Article_indent" id="experience">
                <h2 className="Article__title_level-2">Expérience professionnelle :</h2>
                <div className="Article__section">
                    <h3 className="Article__title_level-3">Qu’est-ce que je voudrais faire plus tard dans ma vie ?</h3>
                    <p className="Article__text">
                        <span className="Article__text_bold">Être architecte.</span>
                    </p>
                    <p className="Article__text">
                        Avec ma famille, je voyage souvent à travers la France ou dans d’autres pays, et je visite leur histoire, en allant dans des coins culturels où on peut en apprendre plus. Chaque architecture, même à travers des images, nous fait penser à un pays avec son type de bâtiment typique de là-bas : ça raconte en quelque sorte son histoire en image.
                    </p>
                    <p className="Article__text">
                        C’est à partir de cela, additionné avec mon goût pour les jeux vidéo, que j’ai commencé à apprécier le coup de crayon.
                    </p>
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
                                    <p className="Article__text">
                                        C’était la première fois que j’étais confronté dans le monde professionnel, et cette expérience a bien porté ses fruits. 
                                    </p>
                                    <p className="Article__text">
                                        L’étape la plus dure était de créer et imaginer la maquette de la carte, avoir la meilleure version, recommencer. L’application de la maquette, puis enfin l’appréciation du résultat final !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="Article__section_theme Article_indent" id="project">
                <h2 className="Article__title_level-2">Projets :</h2>
                <p className="Article__text">
                    <span className="Article__text_bold">Tout ceci m’entraîne de jour en jour, c’est une source d’apprentissage.</span>
                </p>
                <div className="Article__section">
                    <h3 className="Article__title_level-3">Mes quelques dessins !</h3>
                </div>
                <Link href="https://lucassyhan.netlify.com" className="Article__section_theme Article__box">
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
                                <p className="Article__text">
                                    C’est un peu comme la vitrine d’un magasin, mais là, je le suis. Se présenter par soi-même est compliqué, il faut garder les informations principales de sa vie, ne pas trop en mettre, et en mettre quand même assez pour qu’il soit complet. Ca requiert un travail de rédaction assez majeur, mais être aussi un programmeur. 
                                </p>
                                <p className="Article__text">
                                    Il faut la paire : travailler son contenu sans conteneur, ou fabriquer son conteneur sans contenu, ça ne servirait à rien.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="https://psearch.alwaysdata.net" className="Article__section_theme Article__box">
                    <h3 className="Article__title_level-3 Article__box__title">pSearch : Chercher, Discuter, Jouer</h3>
                    <div className="Article__box__sections">
                        <img src="https://via.placeholder.com/200" className="Article__box__image" alt="Placeholder" />
                        <div className="Article__box__right">
                            <p className="Article__text Article__box__resume">
                                <span className="Article__text_bold">
                                    Été 2018 - Présent
                                </span>
                                <br />
                                Site web qui a pour but de rassembler des joueurs d’un même jeu vidéo afin de créer des relations afin qu’ils puissent jouer entre eux.
                            </p>
                            <div className="Article__quotes">
                                <p className="Article__text">
                                    C’est mon premier projet à cas concret. Certes il n’est pas fini, mais ça m’a été d’une grande aide. C’est avec ce site web que j’ai appris à découvrir <Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript">JavaScript</Link>, <Link href="https://reactjs.org/">React JS</Link>, <Link href="https://nodejs.org/en/">Node JS</Link>, <Link href="https://expressjs.com/">Express JS</Link>, et même <Link href="https://github.com/">GitHub</Link> !
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="Article__section_theme Article_indent" id="contact">
                <h2 className="Article__title_level-2">Comment me contacter ?</h2>
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

function SecondPart() {
    return (
        <div className="Article__section_theme" id="show-me-more">
            <div className="Article__section_theme Article_indent" id="why-and-how">
                <h2 className="Article__title_level-2">Le pourquoi du comment j’ai commencé la programmation</h2>
                <div className="Article__section_theme Article_indent" id="why">
                    <h3 className="Article__title_level-3">Pourquoi ai-je commencé à m'intéresser à écrire des lignes de code ?</h3>
                    <p className="Article__text Article__text_indent">
                        Étant une personne curieuse, j’ai débuté à coder dans ma chambre parce que je voulais savoir comment tous ces sites web étaient construits.
                        <br />
                        Comment se faisait-il, alors que ce n’était que des instructions qui se suivent, créaient une chose qui était concrètement visible ?
                    </p>
                    <p className="Article__text">
                        Mais tout m'était inconnu… autant de notions à découvrir, comme des concepts abstraits (tels que les class, object, les paradigmes de programmation), ou comment fonctionne ceci ou cela. 
                    </p>
                </div>
                <div className="Article__section_theme Article_indent" id="how">
                    <h3 className="Article__title_level-3">Comment est-ce que j’ai commencé à apprécié la programmation ?</h3>
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
            <div className="Article__section_theme Article_indent" id="what">
                <h2 className="Article__title_level-2">Qu’est-ce que la programmation m’a fait apprendre ?</h2>
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
    );
}

export default AboutMe;