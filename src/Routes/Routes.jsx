 
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home"
import ListedBooks from "../Pages/ListedBooks"
import PagesToRead from "../Pages/PagesToRead"
import Details from "../Pages/Details";
import ListedCards from "../components/ListedCards";
import LsWishlistCard from "../Pages/LsWishlistCard";
import ViewDetails from "../Pages/ViewDetails";
import ViewDetailsWishList from "../Pages/ViewDetailsWishList";
 

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listedbooks",
        element:<ListedBooks></ListedBooks>,
        children:[
         {
          index:true,
         element:<ListedCards></ListedCards>,
         },
        {
          path:'wishlist',
          element:<LsWishlistCard></LsWishlistCard>
        }
        ]
      },
      {
        path:"/pagestoread",
        element:<PagesToRead></PagesToRead>
      },
      {
        path:"/bookCardDetails/:id",
        element:<Details></Details>
      },
      {
        path:"/viewDetailsRead/:id",
        element:<ViewDetails></ViewDetails>
      },
     {
      path:"/viewDetailsWishlist/:id",
      element:<ViewDetailsWishList></ViewDetailsWishList>
     }
    ]
    
  },
]);

export default router;