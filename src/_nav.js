import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilCursor, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'User Management',
    to: '/users',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/users/users',
      },
      {
        component: CNavItem,
        name: 'Roles',
        to: '/users/roles',
      },
      {
        component: CNavItem,
        name: 'Permissions',
        to: '/users/permissions',
      },
    ],
  },
]

export default _nav
