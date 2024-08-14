import { useQuery } from '@tanstack/react-query'
import { githubApi } from '../../api'
import { sleep } from '../../utils'

const getLabels = async (): Promise<unknown> => {
	await sleep()

	const { data } = await githubApi.get('/labels')
	console.log({ data })
	return data
}

export const LabelPicker = () => {
	const labelsQuery = useQuery({
		queryKey: ['labels'],
		queryFn: getLabels,
	})

	if (labelsQuery.isLoading) {
		return <div className='flex justify-center items-center h-52'>Loading...</div>
	}

	if (labelsQuery.isError) {
		return <div>Error: {labelsQuery.error}</div>
	}

	return (
		<>
			<span
				className='px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer'
				style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
			>
				Primary
			</span>
		</>
	)
}
