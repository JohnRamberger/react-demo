import HomePage from "./pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/about";

// This defines the url paths and what component to show. We can use components to define pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Site</h1>
      </header>
      {/* ALL Stuff relating to routing must be within the router provider (including any links) */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
