import React, { useState, useEffect, useCallback, useImperativeHandle, forwardRef } from "react";

function CustomFieldSelect(props, ref) {
    const [selectedItem, setSelectedItem] = useState(props.defaultValue);
    
    const createItems = () => {
        let items = [], i = 1;

        // eslint-disable-next-line no-unused-vars
        for (const entries of Object.entries(props.items)) {
            items.push(
                <button 
                    key={i} 
                    data-value={entries[0]} 
                    className={selectedItem === entries[0] ? "custom-select__item custom-select__item_selected" : "custom-select__item"} 
                    dangerouslySetInnerHTML={{__html: entries[1]}}
                    onClick={props.events[entries[0]]}
                    data-name={props.name}
                ></button>
            );
            
            i++;
        }

        return items;
    };

    const createOptions = () => {
        let items = [], i = 1;

        // eslint-disable-next-line no-unused-vars
        for (const entries of Object.entries(props.items)) {
            items.push(
                <option 
                    key={i} 
                    value={entries[0]}
                    data-value={entries[0]}
                    className={selectedItem === entries[0] ? "custom-select__item custom-select__item_selected" : "custom-select__item"}
                >{entries[0]}</option>
            );
            
            i++;
        }

        return items;
    };

    useEffect(function handleSelectedItem() {
        const items = document.querySelectorAll(`.custom-select__item[data-name="${props.name}"]`);

        // eslint-disable-next-line no-unused-vars
        for(const item of items) {
            item.classList.remove("custom-select__item_selected");
            item.tagName === "OPTION" && item.removeAttribute("selected");
            
            if(item.getAttribute("data-value") === selectedItem) {
                item.tagName === "OPTION" && item.setAttribute("selected", true);
                item.classList.add("custom-select__item_selected");
            }
        }
    }, [selectedItem, props.name]);

    const handleFoldingSelect = useCallback(() => {
        const selectList = document.querySelector(`.custom-select__items-list[data-name="${props.name}"]`);

        selectList.getAttribute("data-state") === "folded" ? selectList.setAttribute("data-state", "unfolded") : selectList.setAttribute("data-state", "folded");
    }, [props.name]);

    const displaySelectedItem = () => {
        let items = [], i = 1;

        // eslint-disable-next-line no-unused-vars
        for (const entries of Object.entries(props.items)) {
            if(entries[0] === selectedItem) {
                items.push(
                    <button
                        key={i}
                        data-value={entries[0]} 
                        className="custom-select__selected-item"
                        onClick={handleFoldingSelect}
                    >
                        <div dangerouslySetInnerHTML={{__html: entries[1]}}></div>
                        <i className="fas fa-chevron-down custom-select__chevron-icon"></i>
                    </button>
                );
            }
            
            i++;
        }

        return items;
    };

    useImperativeHandle(ref, () => ({
        handleClick(val) {
            setSelectedItem(val);
            handleFoldingSelect();
        }
    }));

    return (
        <div className="custom-select" data-name={props.name}>
            {displaySelectedItem()}
            <div className="custom-select__items-list" data-state="folded" data-name={props.name}>
                {createItems()}
            </div>
            <select className="custom-select" name={props.name}>
                {createOptions()}
            </select>
        </div>
    );
}

export default forwardRef(CustomFieldSelect);