import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
const Buttons = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Users</strong>
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

export default Buttons
