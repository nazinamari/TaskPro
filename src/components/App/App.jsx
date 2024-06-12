import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const WelcomePage = lazy(() => import("../../pages/WelcomePage/WelcomePage"));
const AuthPage = lazy(() => import("../../pages/AuthPage"));
const RegisterForm = lazy(() => import("../RegisterForm/RegisterForm"));
const LoginForm = lazy(() => import("../LoginForm/LoginForm"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const BoardPage = lazy(() => import("../../pages/BoardPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
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
