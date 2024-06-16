import { useState, useEffect, useRef } from 'react';
import styles from './ThemeSwitcher.module.css';
import Icon from '../../../shared/components/Icon/Icon';
import List from '../../../shared/components/List/List';

const ThemeSwitcher = ({ changeTheme }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleThemeChange = (theme) => {
		changeTheme(theme);
		setIsOpen(false);
	};

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className={styles.dropdown} ref={dropdownRef}>
			<button onClick={toggleDropdown} className={styles.themeBtn}>
				<p>Theme</p>
				<Icon
					id="icon-arrow-down"
					width="16"
					height="16"
					className={styles.icon}
				/>
			</button>
			{isOpen && (
				<div className={styles.dropdownMenu}>
					<List className={styles.ThemeList}>
						<li
							className={styles.themeItem}
							onClick={() => handleThemeChange('light')}
						>
							Light
						</li>
						<li
							className={styles.themeItem}
							onClick={() => handleThemeChange('dark')}
						>
							Dark
						</li>
						<li
							className={styles.themeItem}
							onClick={() => handleThemeChange('violet')}
						>
							Violet
						</li>
					</List>
				</div>
			)}
		</div>
	);
};

export default ThemeSwitcher;
