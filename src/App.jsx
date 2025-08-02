import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import React, { lazy, Suspense } from "react";
import { CheckCircle } from "lucide-react";

let ProductById = lazy(() => import("./pages/ProductsById"));
let Login = lazy(() => import("./pages/Login"));
let Product = lazy(() => import("./pages/Products"));

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <h1>Loading...</h1>
      <CheckCircle className="animate-spin text-blue-500 w-8 h-8 ml-2" />
    </div>
  );
}

function withSuspense(Component) {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="jobs" element={withSuspense(Product)} />
        <Route path="jobs/:id" element={withSuspense(ProductById)} />
        <Route path="login" element={withSuspense(Login)} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;