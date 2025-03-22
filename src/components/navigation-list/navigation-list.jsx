import  "./navigation-list.css";
import {routes} from './routes.js';
import {Component,lazy} from "react";

export default class NavigationList extends Component{
    #clickHandler;
    #currentTab;
    constructor(props) {
        super(props);
        this.#clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) { 
        const element = event.target;
        const pathName = element.dataset.path;

        if (pathName === this.#currentTab) return;

        const path = `./../${routes[pathName]?.path}`;
        const component = lazy(()=> import(path));
        globalThis.eventEmitter.emit('navigate', {detail: {component: component}});
        this.#currentTab = pathName;
    }

    render() {
        return (
           <>
              <ul className="navigator_ul">
                <li>
                    <a href="#" onClick={this.#clickHandler} data-path="welcome">List item 1</a>
                </li>
                <li>
                    <a href="#" onClick={this.#clickHandler}>List item 2</a>
                </li>
                <li>
                    <a href="#" onClick={this.#clickHandler}>List item 3</a>
                </li>
                <li>
                    <a href="#" onClick={this.#clickHandler}>List item 4</a>
                </li>
              </ul>
           </>
        );
    }
}
