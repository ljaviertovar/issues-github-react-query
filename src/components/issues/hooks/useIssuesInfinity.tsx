import { useInfiniteQuery } from '@tanstack/react-query'

import { getIssues } from '../actions'

import { State } from '../interfaces'

interface Props {
	selectedState: State
	selectedLabels: string[]
}

export default function useIssuesInfinity({ selectedLabels, selectedState }: Props) {
	const issuesQuery = useInfiniteQuery({
		queryKey: ['issues', 'infinite', { selectedState, selectedLabels }],
		queryFn: ({ pageParam, queryKey }) => {
			const [, , args] = queryKey
			const { selectedState, selectedLabels } = args as Props

			return getIssues(selectedState, selectedLabels, pageParam)
		},
		staleTime: 1000 * 60 * 60,
		initialPageParam: 0,
		getNextPageParam: (lastPage, pages) => (lastPage.length > 0 ? pages.length + 1 : undefined),
	})

	return {
		issuesQuery,
	}
}
