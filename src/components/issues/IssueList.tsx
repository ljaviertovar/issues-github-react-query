import { IssueItem } from './IssueItem'
import { GitHubIssue } from './interfaces'

interface Props {
	issues: GitHubIssue[]
}

export const IssueList = ({ issues }: Props) => {
	return (
		<>
			<div className='flex gap-4'>
				<button className='btn active'>All</button>
				<button className='btn'>Open</button>
				<button className='btn'>Closed</button>
			</div>

			<div className='mt-4'>
				{issues.map(issue => (
					<IssueItem issue={issue} key={issue.id} />
				))}
			</div>
		</>
	)
}
