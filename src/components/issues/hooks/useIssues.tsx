import { useQuery } from '@tanstack/react-query'

import { getIssues } from '../actions'

import { State } from '../interfaces'

interface Props {
	selectedState: State
	selectedLabels: string[]
}

export default function useIssues({ selectedLabels, selectedState }: Props) {
	const issuesQuery = useQuery({
		queryKey: ['issues', { selectedState, selectedLabels }],
		queryFn: () => getIssues(selectedState, selectedLabels),
		staleTime: 1000 * 60 * 60,
	})

	return { issuesQuery }
}
