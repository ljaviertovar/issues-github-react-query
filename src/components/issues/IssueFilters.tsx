import { State } from './interfaces'

interface Props {
	selectedState: State
	onSelectedStateChange: (state: State) => void
}

export default function IssueFilters({ selectedState, onSelectedStateChange }: Props) {
	return (
		<div className='flex gap-4'>
			<button
				onClick={() => onSelectedStateChange(State.All)}
				className={`btn ${selectedState === State.All ? 'active' : ''} `}
			>
				All
			</button>
			<button
				onClick={() => onSelectedStateChange(State.Open)}
				className={`btn ${selectedState === State.Open ? 'active' : ''} `}
			>
				Open
			</button>
			<button
				onClick={() => onSelectedStateChange(State.Close)}
				className={`btn ${selectedState === State.Close ? 'active' : ''} `}
			>
				Closed
			</button>
		</div>
	)
}
