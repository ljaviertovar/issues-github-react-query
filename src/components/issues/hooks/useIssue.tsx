import { useQuery } from '@tanstack/react-query'
import { getIssue } from '../actions'

export default function useIssue(issueNumber: number) {
	const issueQuery = useQuery({
		queryKey: ['issues', issueNumber],
		queryFn: () => getIssue(issueNumber),
		staleTime: 1000 * 60 * 60,
	})

	console.log(issueQuery.data)

	return { issueQuery }
}
