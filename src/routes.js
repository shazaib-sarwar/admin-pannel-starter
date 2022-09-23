import React from 'react'
// Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// User-Management 
const Users = React.lazy(() => import('./views/user-management/users/Users'))
const Permissions = React.lazy(() => import('./views/user-management/permissions/Permissions'))
const Roles = React.lazy(() => import('./views/user-management/roles/Roles'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/users', name: 'Users', element: Users, exact: true },
  { path: '/users/users', name: 'Users', element: Users },
  { path: '/users/roles', name: 'Roles', element: Roles },
  { path: '/users/permissions', name: 'Permissions', element: Permissions },
]

export default routes
