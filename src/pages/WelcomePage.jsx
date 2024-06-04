import { Link } from 'react-router-dom';
import Title from '../components/Title/Title';

export default function WelcomePage() {
	return (
		<div>
			<Title>WelcomePage</Title>
			<Link to="/auth/login">Log In</Link>
			<Link to="/auth/register">Register</Link>
		</div>
	);
}
