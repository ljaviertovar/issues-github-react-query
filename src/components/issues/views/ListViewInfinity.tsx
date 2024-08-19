import { useState } from 'react'

import { IssueList } from '../IssueList'
import { LabelPicker } from '../../labels'
import Spinner from '../../Spinner'

import useIssuesInfinity from '../hooks/useIssuesInfinity'

import { State } from '../interfaces'

export const ListViewInfinity = () => {
	const [selectedState, setSelectedState] = useState<State>(State.All)
	const [selectedLabels, setSelectedLabels] = useState<string[]>([])

	const { issuesQuery } = useIssuesInfinity({
		selectedState,
		selectedLabels,
	})

	// [  [issue1, issue2], [issue3, issue4], [issue5, issue6] ]
	// [issue1, issue2, issue3, issue4...]
	const issues = issuesQuery.data?.pages.flat() ?? []

	const onLabelSelected = (label: string) => {
		if (selectedLabels.includes(label)) {
			setSelectedLabels(selectedLabels.filter(l => l !== label))
		} else {
			setSelectedLabels([...selectedLabels, label])
		}
	}

	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 mt-5'>
			<div className='col-span-1 sm:col-span-2'>
				{issuesQuery.isLoading ? (
					<div className='flex justify-center items-center h-52'>
						<Spinner />
					</div>
				) : (
					<>
						<IssueList issues={issues} onSelectedStateChange={setSelectedState} selectedState={selectedState} />

						<button
							onClick={() => issuesQuery.fetchNextPage()}
							disabled={issuesQuery.isFetchingNextPage}
							className='p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all disabled:bg-gray-500'
						>
							{issuesQuery.isFetchingNextPage ? 'Cargando más..' : 'Cargar más...'}
						</button>
					</>
				)}
			</div>

			<div className='col-span-1 px-2'>
				<LabelPicker onLabelSelected={onLabelSelected} selectedLabels={selectedLabels} />
			</div>
		</div>
	)
}
