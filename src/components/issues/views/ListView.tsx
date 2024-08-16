import Spinner from '../../Spinner'
import { LabelPicker } from '../../labels'
import { IssueList } from '../IssueList'
import useIssues from '../hooks/useIssues'

export const ListView = () => {
	const { issuesQuery } = useIssues()

	const issues = issuesQuery.data ?? []

	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 mt-5'>
			<div className='col-span-1 sm:col-span-2'>
				{issuesQuery.isLoading ? (
					<div className='flex justify-center items-center h-52'>
						<Spinner />
					</div>
				) : (
					<IssueList issues={issues} />
				)}
			</div>

			<div className='col-span-1 px-2'>
				<LabelPicker />
			</div>
		</div>
	)
}
