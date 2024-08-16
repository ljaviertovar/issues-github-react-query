import { githubApi } from '../../../api'
import { sleep } from '../../../utils'

import { GitHubIssue, GitHubLabel } from '../interfaces'

export const getLabels = async (): Promise<GitHubLabel[]> => {
	await sleep()

	const { data } = await githubApi.get<GitHubLabel[]>('/labels')

	return data
}

export const getIssues = async (): Promise<GitHubIssue[]> => {
	await sleep()

	const { data } = await githubApi.get<GitHubIssue[]>('/issues')

	return data
}

export const getIssue = async (issueNumber: number): Promise<GitHubIssue> => {
	await sleep()

	const { data } = await githubApi.get<GitHubIssue>(`/issues/${issueNumber}`)

	return data
}
