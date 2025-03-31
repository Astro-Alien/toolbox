import { routes } from '../routes.js';
import { Link } from "react-router-dom";
import SideBarIcons from "../side-bar-icons/side-bar-icons.jsx";

function NavigationList() {
    return (
        <>
        {
            Object.values(routes).map((route, index) => {
                return (
                    <li className="list-none" key={route.name}>
                        <Link to={route.path}>
                            <SideBarIcons icon={route.icon} tooltip={route.name} />
                        </Link>
                    </li>
                );
            })
        }
        </>
    );
}

export default NavigationList;
