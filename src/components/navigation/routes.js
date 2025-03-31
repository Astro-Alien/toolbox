import HomeWelcome from "../home-welcome/home-welcome.jsx";
import TodoList from "../todo-list/todo-list.jsx";
import VirtualList from "../virtual-list/virtual-list.jsx";

export const routes = {
    home: {
        component: HomeWelcome,
        name: 'Home',
        path: '/',
        icon: 'FaHome' 
    },
    todoList: {
        component: TodoList,
        name: 'Todo List',
        path: '/todo-list',
        icon: 'FaList'
    },
    virtualList: {
        component: VirtualList,
        name: 'Virtual List',
        path: '/virtual-list',
        icon: 'FaRegListAlt'
    }
};
