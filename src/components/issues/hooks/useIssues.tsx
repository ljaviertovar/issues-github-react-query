import { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { getIssues } from '../actions'

import { State } from '../interfaces'

interface Props {
	selectedState: State
	selectedLabels: string[]
}

export default function useIssues({ selectedLabels, selectedState }: Props) {
	const [page, setPage] = useState(1)

	const issuesQuery = useQuery({
		queryKey: ['issues', { selectedState, selectedLabels, page }],
		queryFn: () => getIssues(selectedState, selectedLabels, page),
		staleTime: 1000 * 60 * 60,
	})

	useEffect(() => {
		setPage(1)
	}, [selectedState, selectedLabels])

	const nextPage = () => {
		if (issuesQuery.data?.length === 0) {
			return
		}

		setPage(page + 1)
	}

	const prevPage = () => {
		if (page === 1) {
			return
		}

		setPage(prevPage => prevPage - 1)
	}

	return {
		issuesQuery,
		page,
		nextPage,
		prevPage,
	}
}
