import React from "react";
import "./navigation-bar.css";
import NavigationList from '../navigation-list/navigation-list.jsx'


function NavigationBar() {
    return (
        <aside className="navigation-bar">
            <nav className="navigation-bar_navigation-container">
                <button className="navigation-bar_button" id="btn-menu">Back</button> 
                <NavigationList />
            </nav>
        </aside>
    );
}
export default NavigationBar;