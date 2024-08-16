import { useNavigate, useParams, Navigate } from 'react-router-dom'

import { IssueComment } from '../IssueComment'
import { FiSkipBack } from 'react-icons/fi'
import Spinner from '../../Spinner'

import useIssue from '../hooks/useIssue'

export const IssueView = () => {
	const navigate = useNavigate()
	const params = useParams()
	const issueNumber = Number(params.issueNumber ?? 0)

	const { issueQuery, commentsQuery } = useIssue(issueNumber)

	if (issueQuery.isLoading) {
		return (
			<div className='flex justify-center items-center h-52'>
				<Spinner />
			</div>
		)
	}

	if (!issueQuery.data) {
		return <Navigate to='/404' />
	}

	return (
		<div className='mb-5'>
			<div className='mb-4'>
				<button onClick={() => navigate(-1)} className='hover:underline text-blue-400 flex items-center'>
					<FiSkipBack />
					Regresar
				</button>
			</div>

			<IssueComment issue={issueQuery.data} />

			{commentsQuery.isLoading ? (
				<Spinner />
			) : (
				commentsQuery.data?.map(comment => <IssueComment key={comment.id} issue={comment} />)
			)}
		</div>
	)
}
