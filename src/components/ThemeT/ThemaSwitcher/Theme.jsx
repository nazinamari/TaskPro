import Button from '../../../shared/components/Button/Button';

export default function Theme({ data, className }) {
	return (
		<div>
			<div className={className}>{data}</div>
		</div>
	);
}
