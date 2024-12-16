import { createBrowserRouter } from "react-router-dom";

import LayOut from "./layOut/LayOut";

import HomePAGE from "./component/HomePage/HomePAGE";
import UpdateSelf from "./component/HomePage/heroPG/UpdateSelf";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <HomePAGE></HomePAGE>,
      },
      {
        path:"/updateSelf",
        element:<UpdateSelf></UpdateSelf>
      }
    ],
  },
]);
