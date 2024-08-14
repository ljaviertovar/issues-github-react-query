import { getLabels } from '../../issues/actions'
import { useQuery } from '@tanstack/react-query'

export default function useLabels() {
	const labelsQuery = useQuery({
		queryKey: ['labels'],
		queryFn: getLabels,
		staleTime: 1000 * 60 * 60,
	})

	return { labelsQuery }
}
