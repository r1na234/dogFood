import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Main } from './pages/Main/Main';
import { Authorization } from './pages/Authorization/Authorization';
import { Registration } from './pages/Registration/Registration';
import {PersonalPage} from './pages/PersonalPage/Personalpage';
import { DetailedItem } from './pages/DetailedItem/Detaileditem';
import { About } from './pages/About/About';
import { FavoriteItems } from './pages/FavouriteItems/FavouriteItems';
import { ItemsBasket } from './pages/ItemsBasket/ItemsBasket';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element:<Authorization/>
      },
      {
        path: "/catalog",
        element: <Main/>,
      },
      {
        path:"/personalPage",
        element:<PersonalPage/>
      },
      {
        path:"/registration",
        element:<Registration/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/favouriteItems",
        element: <FavoriteItems/>
      },
      {
        path:"/basket",
        element:<ItemsBasket/>
      },
      {
        path:"/catalog/:Item",
        element: <DetailedItem/>
      }
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);
