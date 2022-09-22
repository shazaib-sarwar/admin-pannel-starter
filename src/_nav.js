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
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Roles',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Permissions',
        to: '/buttons/dropdowns',
      },
    ],
  },
]

export default _nav
