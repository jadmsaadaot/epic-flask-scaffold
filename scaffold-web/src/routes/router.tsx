import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound";
import About from "@/pages/About";
import App from "@/App";
import ListPage from "@/pages/ListPage";


const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    // loader() {
    //   // Our root route always provides the user, if logged in
    //   return { user: fakeAuthProvider.username };
    // },
    Component: App,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        // action: loginAction,
        // loader: loginLoader,
        Component: About,
      },
      {
        path: "listpage",
        Component: ListPage,
      },
      // {
      //   path: "protected",
      //   loader: protectedLoader,
      //   Component: ProtectedPage,
      // },
    ],
  },
  // {
  //   path: "/logout",
  //   async action() {
  //     // We signout in a "resource route" that we can hit from a fetcher.Form
  //     await fakeAuthProvider.signout();
  //     return redirect("/");
  //   },
  // },
]);

export default router;
