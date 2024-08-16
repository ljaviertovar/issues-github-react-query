import { useQuery } from '@tanstack/react-query'
import { getIssue, getIssueComments } from '../actions'

export default function useIssue(issueNumber: number) {
	const issueQuery = useQuery({
		queryKey: ['issues', issueNumber],
		queryFn: () => getIssue(issueNumber),
		staleTime: 1000 * 60 * 60,
	})

	const commentsQuery = useQuery({
		queryKey: ['issues', issueQuery.data?.number, 'comments'],
		queryFn: () => getIssueComments(issueQuery.data!.number),
		staleTime: 1000 * 60,
		enabled: issueQuery.data !== undefined,
	})

	return { issueQuery, commentsQuery }
}
