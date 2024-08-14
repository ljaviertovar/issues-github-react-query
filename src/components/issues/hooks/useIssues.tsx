import { useQuery } from '@tanstack/react-query'
import { getIssues } from '../actions'

export default function useIssues() {
	const issuesQuery = useQuery({
		queryKey: ['issues'],
		queryFn: getIssues,
		staleTime: 1000 * 60 * 60,
	})

	return { issuesQuery }
}
