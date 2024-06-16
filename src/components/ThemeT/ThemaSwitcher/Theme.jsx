import Button from '../../../shared/components/Button/Button';

export default function Theme({ data, className }) {
	return (
		<Button>
			<div className={className}>{data}</div>
		</Button>
	);
}
