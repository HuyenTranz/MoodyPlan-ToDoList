import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/home/Home";
import PrivateRoute from "./routes/PrivateRoute";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}
        <Route path="/*" element={<AppRouter />} />

        {/* Private route */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
