import { IssueItem } from './IssueItem'
import { GitHubIssue } from './interfaces'

interface Props {
	issues: GitHubIssue[]
}

export const IssueList = ({ issues }: Props) => {
	return (
		<div className='mt-4'>
			{issues.map(issue => (
				<IssueItem key={issue.id} issue={issue} />
			))}
		</div>
	)
}
