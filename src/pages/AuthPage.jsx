import { Outlet } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export default function AuthPage() {
  return (
    <div>
      <Outlet />
      <LoginForm />
      <RegisterForm />
    </div>
  );
}
