import { Outlet } from 'react-router-dom'

export default function IssuesPage() {
	return (
		<div className='container m-auto max-w-7xl mt-3'>
			<h1>
				Git Issues <small>Seguimiento de problemas</small>
			</h1>
			<Outlet />
		</div>
	)
}
