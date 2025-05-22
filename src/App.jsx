import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import BottomNav from "./pages/BottomNav";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen pb-16"> {/* padding bottom to prevent overlap with nav */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <BottomNav /> {/* Add bottom nav here */}
      </div>
    </BrowserRouter>
  );
}

export default App;
