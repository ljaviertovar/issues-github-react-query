import { githubApi } from '../../../api'
import { sleep } from '../../../utils'

import { GitHubIssue, GitHubLabel, State } from '../interfaces'

export const getLabels = async (): Promise<GitHubLabel[]> => {
	await sleep()

	const { data } = await githubApi.get<GitHubLabel[]>('/labels')

	return data
}

export const getIssues = async (selectedState: State, selectedLabels: string[]): Promise<GitHubIssue[]> => {
	await sleep()

	const params = new URLSearchParams()

	if (selectedState !== State.All) {
		params.append('state', selectedState)
	}

	if (selectedLabels.length > 0) {
		params.append('labels', selectedLabels.join(','))
	}

	const { data } = await githubApi.get<GitHubIssue[]>('/issues', {
		params,
	})

	return data
}

export const getIssue = async (issueNumber: number): Promise<GitHubIssue> => {
	await sleep()

	const { data } = await githubApi.get<GitHubIssue>(`/issues/${issueNumber}`)

	return data
}

export const getIssueComments = async (issueNumber: number): Promise<GitHubIssue[]> => {
	await sleep()

	const { data } = await githubApi.get<GitHubIssue[]>(`/issues/${issueNumber}/comments`)

	return data
}
