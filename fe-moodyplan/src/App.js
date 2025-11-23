import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import AppRouter from "./routes/AppRouter";
import MainLayout from "./layouts/MainLayout";
import ProjectPage from "./pages/project/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}
        <Route path="/*" element={<AppRouter />} />

        {/* Private route */}
        <Route
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path=":project_id/:project_title" element={<ProjectPage />} />
        </Route>

      </Routes>
    </BrowserRouter >
  );
}

export default App;
