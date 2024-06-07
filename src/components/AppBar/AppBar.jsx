// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
// import BoardNavigation from '../BoardNavigation/BoardNavigation';
import Header from '../Header/Header';
import css from './AppBar.module.css';

export default function AppBar() {
	// const isLoggedIn = useSelector(selectIsLoggedIn);
	return <Header />;
}
