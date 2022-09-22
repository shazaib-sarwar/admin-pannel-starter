import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Dropdowns = () => {
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

export default Dropdowns
