import { IssueItem } from './IssueItem'
import { GitHubIssue, State } from './interfaces'

interface Props {
	issues: GitHubIssue[]
	selectedState: State
	onSelectedStateChange: (state: State) => void
}

export const IssueList = ({ issues, selectedState, onSelectedStateChange }: Props) => {
	return (
		<>
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

			<div className='mt-4'>
				{issues.map(issue => (
					<IssueItem key={issue.id} issue={issue} />
				))}
			</div>
		</>
	)
}
