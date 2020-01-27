import React, { useRef } from "react";

// Components
import CustomFieldSelect from "../../../Form/CustomFieldSelect";

// Services
// Contexts
import { LanguageContext } from "../../../../services/contexts";

function LanguageSelect() {
    const childRef = useRef();
    
    return (
        <LanguageContext.Consumer>
            {({ language, setLanguage }) => (
                <div className="set-language">
                    <CustomFieldSelect
                        ref={childRef}
                        defaultValue={language}
                        items={
                            {
                                "fr-FR": '<img class="set-language__flag" src="/icons/france.svg" alt="FR Lang" />',
                                "en-UK": '<img class="set-language__flag" src="/icons/united-kingdom.svg" alt="EN Lang - UK" />'
                            }
                        }
                        events={
                            {
                                "fr-FR": () => {
                                    setLanguage("fr-FR");
                                    childRef.current.handleClick("fr-FR");
                                },
                                "en-UK": () => {
                                    setLanguage("en-UK");
                                    childRef.current.handleClick("en-UK");
                                }
                            }
                        }
                        name="language-select"
                    />
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default LanguageSelect;