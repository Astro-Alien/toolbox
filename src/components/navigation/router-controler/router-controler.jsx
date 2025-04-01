import { routes } from '../routes.js';
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomeWelcome from '../../home-welcome/home-welcome.jsx';
import TodoList from '../../todo-list/todo-list.jsx';
import VirtualList from '../../virtual-list/virtual-list.jsx';


function RouterControler() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* {
                    Object.values(routes).map((route, index) => {
                        const Component = lazy(() => import(`${route.fixed_path}`));
                        return <Route key={index} path={route.path} element={<Component />} />;
                    })
                } */}
                <Route path="/" element={<HomeWelcome />} />
                <Route path="/todo-list" element={<TodoList />} />
                <Route path="/virtual-list" element={<VirtualList />} />
            </Routes>
        </Suspense>
    );
}

export default RouterControler;