import { createBrowserRouter, Navigate } from 'react-router-dom'

import { IssuesPage } from '../pages'
import { ListViewInfinity, IssueView } from '../components/issues/views'

export const router = createBrowserRouter([
	{
		path: '/issues',
		element: <IssuesPage />,
		children: [
			{ path: 'list', element: <ListViewInfinity /> },
			{ path: 'issue/:issueNumber', element: <IssueView /> },
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
