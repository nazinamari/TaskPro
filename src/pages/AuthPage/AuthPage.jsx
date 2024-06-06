import { Outlet } from "react-router-dom";
import styled from "./AuthPage.module.css";

export default function AuthPage() {
  return (
    <div className={styled.container}>
      <Outlet />
    </div>
  );
}
