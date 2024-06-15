import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectAllCards,
	selectLoading,
	selectError,
} from '../../../redux/cards/selectors';
import TaskCard from '../CardTask/CardTask';
import styles from './TaskList.module.css';
import { fetchAllCards } from '../../../redux/cards/operations';

const TaskList = ({ onEdit, onRemove }) => {
	const dispatch = useDispatch();
	const cards = useSelector(selectAllCards);
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchAllCards());
	}, [dispatch]);

	const handleRemove = (id) => {
		onRemove(id);
	};

	const handleEdit = (card) => {
		onEdit(card);
	};

	const handleMove = () => {
		// Реализовать функцию перемещения карточки   const handleMove = (id) => {
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className={styles.taskList}>
			{cards.map((card) => (
				<TaskCard
					key={card.id}
					id={card.id}
					title={card.title}
					description={card.description}
					labelColor={card.labelColor}
					deadline={card.deadline}
					onRemove={handleRemove}
					onEdit={handleEdit}
					onMove={handleMove}
				/>
			))}
		</div>
	);
};

export default TaskList;
