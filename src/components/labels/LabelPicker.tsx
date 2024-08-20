import Spinner from '../Spinner'

import useLabels from './hooks/useLabels'

interface Props {
	selectedLabels: string[]
	onLabelSelected: (label: string) => void
}

export const LabelPicker = ({ selectedLabels, onLabelSelected }: Props) => {
	const { labelsQuery } = useLabels()

	if (labelsQuery.isLoading) {
		return (
			<div className='flex justify-center items-center h-52'>
				<Spinner />
			</div>
		)
	}

	if (labelsQuery.isError) {
		return <div>Error: {`${labelsQuery.error}`}</div>
	}

	return (
		<div className='flex flex-wrap gap-2 justify-start'>
			{labelsQuery.data?.map(label => (
				<span
					key={label.id}
					onClick={() => onLabelSelected(label.name)}
					className={`animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white
					${selectedLabels.includes(label.name) ? 'selected-label' : ''}`}
					style={{ border: `1px solid #${label.color}` }}
				>
					{label.name}
				</span>
			))}
		</div>
	)
}
