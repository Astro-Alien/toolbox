import {routes} from './routes.js';
import {Component,lazy} from "react";

import SideBarIcons from "./side-bar-icons.jsx";

export default class NavigationList extends Component{
    render() {
        
        return (
           <>
            {
                Object.values(routes).map((route, index) => {
                    return <SideBarIcons key={route.name}  icon={route.icon} tooltip={route.name}/>
                })
            }
           </>
        );
    }
}
