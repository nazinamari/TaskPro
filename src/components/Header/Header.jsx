import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import ThemeSwitcher from '../ThemeT/ThemaSwitcher/ThemeSwitcher';
import EditProfileModal from './EditProfileModal/EditProfileModal';
import UserInfo from './UserInfo/UserInfo';
import BurgerMenu from './BurgerMenu/BurgerMenu';

export default function Header() {
	const [theme, setTheme] = useState('dark');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [user, setUser] = useState({
		name: 'Name',
		email: 'name.email@example.com',
		avatar: 'https://via.placeholder.com/40',
	});

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	const changeTheme = (newTheme) => {
		setTheme(newTheme);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleFormSubmit = (values) => {
		setUser(values);
		closeModal();
	};

	return (
		<header className={styles.header}>
			<BurgerMenu />
			<div className={styles.rightSection}>
				<ThemeSwitcher changeTheme={changeTheme} theme={theme} />
				<UserInfo user={user} openModal={openModal} />
			</div>
			<EditProfileModal
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				user={user}
				handleFormSubmit={handleFormSubmit}
			/>
		</header>
	);
}
