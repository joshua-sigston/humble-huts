import React from 'react'

// Router
import { useOutletContext } from 'react-router'

// Styles

import { current } from '@reduxjs/toolkit'

const HostVanInfo = () => {
  const { currentVan } = useOutletContext()
  
  return (
    <section>
      <div>
        <p>{currentVan.description}</p>
     </div>
    </section>
  )
}

export default HostVanInfo
