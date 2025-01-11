import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AllArtifacts from "../Components/AllArtifacts";
import AddArtifacts from "../Components/AddArtifacts";
import MyArtifacts from "../Components/MyArtifacts";
import LikedArtifacts from "../Components/LikedArtifacts";
import ArtifactDetails from "../Components/ArtifactDetails";
import UpdateArtifact from "../Components/UpdateArtifact";
import ErrorPage from "../Components/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import FAQ from "../Components/FAQ";
import ContactUs from "../Components/ContactUs";
import Testimonials from "../Components/Testimonials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allArtifacts",
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        path: "/addArtifacts",
        element: (
          <PrivateRouter>
            <AddArtifacts></AddArtifacts>
          </PrivateRouter>
        ),
      },
      {
        path: "/myArtifacts",
        element: (
          <PrivateRouter>
            <MyArtifacts></MyArtifacts>
          </PrivateRouter>
        ),
      },
      {
        path: "/likedArtifacts",
        element: (
          <PrivateRouter>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRouter>
        ),
      },
      {
        path: "/artifacts/details/:id",
        element: (
          <PrivateRouter>
            <ArtifactDetails></ArtifactDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://antiquify-server.vercel.app/artifacts/details/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRouter>
            <UpdateArtifact></UpdateArtifact>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/testimonials",
        element: <Testimonials></Testimonials>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
