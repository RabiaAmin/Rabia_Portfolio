import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import BottomNav from "./component/BottomNav";
import PortfolioProvider from "./context/protfolioContext";
import ProjectView from "./pages/ProjectView";
import { pageview } from './lib/ga';

// 👇 Create a separate component
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen">
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/project/:id" element={<ProjectView />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        <AppContent /> {/* ✅ Now inside Router */}
      </BrowserRouter>
    </PortfolioProvider>
  );
}

export default App;