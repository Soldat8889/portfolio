/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Breadcrumb(props) {
    function createBreadcrumb() {
        const pathDepth = Object.keys(props.path).length;
        const items = [];
        let i = 0;

        for (const [key, value] of Object.entries(props.path)) {
            i++;
            
            items.push(
                <li className={`Breadcrumb__item${i === pathDepth ? " Breadcrumb__item_current" : ""}`} key={key}>
                    {i !== pathDepth ? 
                    <Link to={value} className="Breadcrumb__link">
                        <span className="Breadcrumb__label">{key}</span>
                    </Link>
                    :
                    <span className="Breadcrumb__label">{key}</span>
                    }
                </li>
            );
        }

        return items;
    }

    return (
        <ol className="Breadcrumb">
            {createBreadcrumb()}
        </ol>
    );
}

export default Breadcrumb;