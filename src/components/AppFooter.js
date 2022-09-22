import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>Role Management System </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <span className="ms-1">Shazaib Sarwar</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
