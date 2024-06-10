import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import AuthPage from "../../pages/AuthPage";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import HomePage from "../../pages/HomePage";
import BoardPage from "../../pages/BoardPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/auth" element={<AuthPage />}>
            <Route path="register" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm />} />
          </Route>
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/:boardName" element={<BoardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
