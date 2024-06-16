import { useState, useEffect, useRef } from 'react';
import styles from './ThemeSwitcher.module.css';
import Icon from '../../../shared/components/Icon/Icon';
import List from '../../../shared/components/List/List';
import data from '../data/theme.json';
import Theme from './Theme';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserTheme } from '../../../../redux/auth/operations';
import { selectUser } from '../../../../redux/auth/selectors';
import { setTheme } from '../../../../redux/auth/slice';

const ThemeSwitcher = ({ changeTheme }) => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	const themes = [...data];
	const user = useSelector(selectUser);
	const currentTheme = user.theme;

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	// const handleThemeChange = (theme) => {
	// 	changeTheme(theme);
	// 	setIsOpen(false);
	// };

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

	useEffect(() => {
		if (currentTheme) {
			document.body.classList.remove(...themes);
			document.body.classList.add(currentTheme);
		}
	}, [currentTheme, themes]);

	const handleThemeChange = (theme) => {
		dispatch(setTheme(theme));
		dispatch(updateUserTheme(theme));
	};

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
						{themes.map((item) => (
							<li key={item} onClick={() => handleThemeChange(item)}>
								<Theme data={item} className={styles.themeItem} />
							</li>
						))}

						{/* <li
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
						</li> */}
					</List>
				</div>
			)}
		</div>
	);
};

export default ThemeSwitcher;
