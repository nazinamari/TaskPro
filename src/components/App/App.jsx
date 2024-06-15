import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { refreshUser } from "../../../redux/auth/operations";
// import { selectIsRefreshing } from "../../../redux/auth/selectors";
import { RestrictedRoute } from "../Routes/RestrictedRoute";
import { PrivateRoute } from "../Routes/PrivateRoute";

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
  //const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/auth" element={<AuthPage />}>
            <Route
              path="register"
              element={<RestrictedRoute component={<RegisterForm />} />}
            />
            <Route
              path="login"
              element={<RestrictedRoute component={<LoginForm />} />}
            />
          </Route>

          <Route
            path="/home"
            element={<PrivateRoute component={<HomePage />} />}
          />
          <Route
            path="/home/:boardName"
            element={<PrivateRoute component={<BoardPage />} />}
          />

          {/* <Route path="/home" element={<HomePage />} />
          <Route path="/home/:boardName" element={<BoardPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
