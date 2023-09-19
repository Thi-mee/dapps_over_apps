import LoadingScreen from "./components/LoadingScreen";
import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <RouterProvider
        router={router}
        // fallbackElement={<LoadingScreen />}
      />
    </div>
  );
}

export default App;
