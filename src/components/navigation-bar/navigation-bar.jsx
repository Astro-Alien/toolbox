import React, { useRef } from "react";
import "./navigation-bar.css";
import NavigationList from '../navigation-list/navigation-list.jsx'


function NavigationBar(defaultTab) {
    const grandparentRef = useRef(null);
   
    const clickHandler = (event) => {
        grandparentRef.current.dataset.collapse = grandparentRef.current.dataset.collapse === "true" ? false : true;
    }

    return (
        <aside className="navigation-bar" data-collapse="true" ref={grandparentRef}>
            <nav className="navigation-bar_navigation-container">
                <button onClick={clickHandler} className="navigation-bar_button" id="btn-menu">Back</button> 
                <NavigationList defaultTab={defaultTab}/>
            </nav>
        </aside>
    );
}
export default NavigationBar;