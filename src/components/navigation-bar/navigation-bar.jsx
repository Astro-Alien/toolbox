import React, { useRef } from "react";
// import "./navigation-bar.css";
import NavigationList from '../navigation-list/navigation-list.jsx'
import {FaFire, FaHome, FaRegListAlt } from 'react-icons/fa'


function NavigationBar(defaultTab) {
   
    const clickHandler = (event) => {
    
    }

    return (
        <div className="fixed top-0 
                        left-0 h-screen 
                        w-16 m-0 p-0
                        flex flex-col
                        bg-blue-dianne
                        text-champagne
                        shadow-lg" data-collapse="true">
           
           <SideBarIcons icon={<FaHome size="28"/>} />
           <SideBarIcons icon={<FaRegListAlt  size="28"/>} />
        </div>
    );
}
export default NavigationBar;

const SideBarIcons = ({icon}) => {
    return ( 
        <div  className="sidebar-icon">
            {icon}
        </div>
    )
}