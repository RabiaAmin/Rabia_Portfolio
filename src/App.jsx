import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import BottomNav from "./component/BottomNav";
import PortfolioProvider from "./context/protfolioContext";
import ProjectView from "./pages/ProjectView";
function App() {
  
  return (
    <PortfolioProvider>

    <BrowserRouter>
      <div className="min-h-screen "> {/* padding bottom to prevent overlap with nav */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
        <BottomNav /> {/* Add bottom nav here */}
      </div>
    </BrowserRouter>
    </PortfolioProvider>
  );
}

export default App;
