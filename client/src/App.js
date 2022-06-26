import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe/Recipe";
import Login from "./pages/Validation/Login";
import Register from "./pages/Validation/Register";
import VerifyEmail from "./pages/Validation/VerifyEmail";
import ForgotPassword from "./pages/Validation/ForgotPassword";
import ResetPassword from "./pages/Validation/ResetPassword";
import Profile from "./pages/Validation/Profile";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Validation/Contact";
import ErrorPage from "./pages/Error/ErrorPage";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id/verify/:token" element={<VerifyEmail />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
