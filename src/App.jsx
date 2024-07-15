import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Explore from "./pages/Explore";
import MoreInfo from "./pages/MoreInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<LandingPage />} /> */}
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/MoreInfo" element={<MoreInfo />} />
          {/* Keep this route below all other routes. If desired route does not exist above, navigate to /home */}
          <Route path="*" element={<Navigate to="/LandingPage" />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
