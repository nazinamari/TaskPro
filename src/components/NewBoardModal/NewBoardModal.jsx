import css from './NewBoardModal.module.css';
import { useForm } from 'react-hook-form';
import Icon from '../../shared/components/Icon/Icon';

const icons = [
	{ value: 'Icon1', id: 'icon-projects', alt: 'icon-projects' },
	{ value: 'Icon2', id: 'icon-star', alt: 'icon-star' },
	{ value: 'Icon3', id: 'icon-loading', alt: 'icon-loading' },
	{ value: 'Icon4', id: 'icon-puzzle', alt: 'icon-puzzle' },
	{ value: 'Icon5', id: 'icon-container', alt: 'icon-container' },
	{ value: 'Icon6', id: 'icon-lightning', alt: 'icon-lightning' },
	{ value: 'Icon7', id: 'icon-colors', alt: 'icon-colors' },
	{ value: 'Icon8', id: 'icon-hexagon', alt: 'icon-hexagon' },
];

export default function NewBoardModal({ handleHelpModal }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			Icon: 'Icon1',
			Background: 'bgc 1',
		},
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	const stopPropagation = (event) => {
		event.stopPropagation();
	};

	return (
		<div className={css.container} onClick={handleHelpModal}>
			<div className={css.modalWindow} onClick={stopPropagation}>
				<div className={css.modalWindowContent}>
					<button className={css.closeBtn} onClick={handleHelpModal}>
						<Icon
							id="icon-close"
							width="18"
							height="24"
							className={css.iconClose}
							alt="icon-close"
						/>
					</button>
					<h2 className={css.title}>New board</h2>
					<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
						<input
							className={css.input}
							type="text"
							placeholder="Title"
							{...register('title', {
								required: 'Title is required',
							})}
						/>
						{errors.Title && <span>This field is required</span>}
						<div className={css.formContainer}>
							<h3 className={css.iconsTitle}>Icons</h3>
							<div className={css.iconsContainer}>
								{icons.map((icon) => (
									<label key={icon.value} className={css.iconLabel}>
										<input
											type="radio"
											value={icon.value}
											{...register('Icon')}
											className={css.iconRadio}
										/>
										<Icon
											id={icon.id}
											width="18"
											height="18"
											alt={icon.alt}
											className={css.iconImage}
										/>
									</label>
								))}
							</div>
							{errors.Icon && <span>{errors.Icon.message}</span>}
						</div>

						<button type="submit" className={css.createBtn}>
							<div className={css.wrapper}>
								<Icon
									id="icon-plus"
									width="14"
									height="14"
									className={css.iconPlus}
									alt="icon-close"
								/>
							</div>

							<p className={css.createText}>Create</p>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
