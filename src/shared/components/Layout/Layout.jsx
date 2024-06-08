import AppBar from '../../../components/AppBar/AppBar';
import Container from '../Container/Container';

export default function Layout({ children }) {
	return (
		<Container>
			<AppBar />
			{children}
		</Container>
	);
}
