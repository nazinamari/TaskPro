import css from './LogoComponent.module.css';
import Icon from '../Icon/Icon';

export default function LogoComponent() {
	return (
		<div className={css.container}>
			<Icon id="icon-logo" width="20" height="20" className={css.icon} />
			<h1 className={css.title}>Task Pro</h1>
		</div>
	);
}
