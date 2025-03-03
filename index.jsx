import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";
import VanDetail, { loader as VanDetailLoader } from "./pages/VanDetail";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans";
import HostVansDetail, {
  loader as hostVansDetailLoader,
} from "./pages/host/HostVansDetail";
import HostVansInfo from "./pages/host/HostVansInfo";
import HostVansPricing from "./pages/host/HostVansPricing";
import HostVansPhotos from "./pages/host/HostVansPhotos";
import NotFound from "./pages/NotFound";
import { requireAuth } from "./utils";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={VanDetailLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />

        <Route
          path="vans/:id"
          element={<HostVansDetail />}
          loader={hostVansDetailLoader}
        >
          <Route
            index
            element={<HostVansInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVansPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVansPhotos />}
            loader={async () => await requireAuth()}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
