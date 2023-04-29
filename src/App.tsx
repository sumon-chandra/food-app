import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import Foods from "./pages/Foods";
import Home from "./pages/Home";
import { foodDetailsLoader, foodsLoader } from "./loaders";
import FoodDetails from "./pages/FoodDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="foods" element={<Foods />} loader={foodsLoader} />
        <Route
          path="foods/:id"
          element={<FoodDetails />}
          loader={foodDetailsLoader}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
