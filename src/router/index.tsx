import { createBrowserRouter, Navigate } from 'react-router-dom'

import { ListView, IssueView } from '../components/issues/views'

import IssuesPage from '../pages/IssuesPage'

export const router = createBrowserRouter([
	{
		path: '/issues',
		element: <IssuesPage />,
		children: [
			{ path: 'list', element: <ListView /> },
			{ path: 'issue/:id', element: <IssueView /> },
			{ path: '*', element: <Navigate to='list' /> },
		],
	},
	{
		path: '/',
		element: <Navigate to='issues/list' />,
	},
	{
		path: '*',
		element: <h1>Not found</h1>,
	},
])
