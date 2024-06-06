import { Link } from "react-router-dom";
import Title from "../shared/Title/Title";
import Header from "../components/Header/Header";

export default function WelcomePage() {
  return (
    <div>
      <Header />
      <Title>WelcomePage</Title>
      <Link to="/auth/login">Log In</Link>
      <Link to="/auth/register">Register</Link>
    </div>
  );
}
