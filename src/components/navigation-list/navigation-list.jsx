import  "./navigation-list.css";
import {routes} from './routes.js';
import {Component,lazy} from "react";

export default class NavigationList extends Component{
    #clickHandler;
    #currentTab;

    clickHandler(event) { 
        const element = event.target;
        const pathName = element.dataset.key;

        if (pathName === this.#currentTab) return;

        this.emitNavigateEvent(pathName); 
    }

    emitNavigateEvent(pathName) {
        const path = `./../${routes[pathName]?.path}`;
        const component = lazy(()=> import(path));
        globalThis.eventEmitter.emit('navigate', {detail: {component: component}});
        this.#currentTab = pathName;
    }

    render() {
        this.#clickHandler = this.clickHandler.bind(this);
        this.#currentTab = this.props.defaultTab.defaultTab;

        return (
           <>
              <ul className="navigator_ul">
                {
                    Object.values(routes).map((route, index) => {
                        return <li key={route.name}>
                                    <i>A</i>
                                    <a key={route.name} onClick={this.#clickHandler} data-key={route.name}>{route.component}</a>
                               </li>
                    })
                }
              </ul>
           </>
        );
    }
}
