import {routes} from './routes.js';
import {Component,lazy} from "react";

import SideBarIcons from "./side-bar-icons.jsx";

function NavigationList() {

    const clickHandler = (event) => {
        console.log(`Navigating to ??`);
    }

    return (
        <>
        {
            Object.values(routes).map((route, index) => {
                return  <li className="list-none" key={route.name} data-path={route.name} onClick={clickHandler}>
                             <SideBarIcons key={route.name} icon={route.icon} tooltip={route.name}/>
                        </li>
            })
        }
        </>
    );
}

export default NavigationList;
