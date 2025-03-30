import React, { useRef } from "react";
import NavigationList from '../navigation-list/navigation-list.jsx'

function NavigationBar(defaultTab) {
   
    return (
        <div className="fixed top-0 
                        left-0 h-screen 
                        w-16 m-0 p-0
                        flex flex-col
                        bg-blue-dianne
                        text-champagne
                        shadow-lg" data-collapse="true">
           
           <NavigationList/>
        </div>
    );
}
export default NavigationBar;