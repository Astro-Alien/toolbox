import { routes } from '../routes.js';
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

function RouterControler() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    Object.values(routes).map((route, index) => {
                        const Component = lazy(() => import(route.fixed_path));
                        return <Route key={index} path={route.path} element={<Component />} />;
                    })
                }
           </Routes>
        </Suspense>
    );
}

export default RouterControler;