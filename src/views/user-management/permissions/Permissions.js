import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

const Permissions = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Permissions</strong>
          </CCardHeader>
          <CCardBody>
            <p>
              <code>&lt;Content will be here&gt;</code>.{' '}
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Permissions
