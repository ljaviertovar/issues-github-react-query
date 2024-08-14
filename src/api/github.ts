import axios from 'axios'

export const githubApi = axios.create({
	baseURL: 'https://api.github.com/repos/vercel/next.js',
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
	},
})
