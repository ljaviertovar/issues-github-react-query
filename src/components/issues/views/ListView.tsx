import { useState } from 'react'

import { IssueList } from '../IssueList'
import { LabelPicker } from '../../labels'
import Spinner from '../../Spinner'

import useIssues from '../hooks/useIssues'

import { State } from '../interfaces'

export const ListView = () => {
	const [selectedState] = useState<State>(State.All)
	const [selectedLabels, setSelectedLabels] = useState<string[]>([])

	const { issuesQuery, page, nextPage, prevPage } = useIssues({
		selectedState,
		selectedLabels,
	})

	const issues = issuesQuery.data ?? []

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
						<IssueList issues={issues} />

						<div className='flex justify-between items-center'>
							<button onClick={prevPage} className='p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all'>
								Anteriores
							</button>

							<span>{page}</span>

							<button onClick={nextPage} className='p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all'>
								Siguientes
							</button>
						</div>
					</>
				)}
			</div>

			<div className='col-span-1 px-2'>
				<LabelPicker onLabelSelected={onLabelSelected} selectedLabels={selectedLabels} />
			</div>
		</div>
	)
}
