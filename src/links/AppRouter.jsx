import React from 'react';
import { Route, Routes } from 'react-router';
import {ArrayOfRoutes} from "./routes.jsx";

const AppRouter = () => {
  return (
    <Routes>
      {ArrayOfRoutes.map(({path, element}) =>
      <Route path={path} element={element} key={`${path}_${element}`} />
      )}
    </Routes>
  );
};

export default AppRouter;
