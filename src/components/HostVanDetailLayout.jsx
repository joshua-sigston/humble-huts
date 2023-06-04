import React from 'react'

const HostVanDetailLayout = () => {

    const activeLink = {
        color: 'brown',
        fontWeight: 'bold'
      }
      
  return (

    <div>
        <h1>HostHutLayout</h1>
        <NavLink  to='/host/my-vans/:id/details'
                  end
                  style={({isActive}) => isActive ? activeLink : null}>
          Details
        </NavLink>

        <NavLink  to='/host/my-vans/:id/pricing'
                  style={({isActive}) => isActive ? activeLink : null}>
          Pricing
        </NavLink>

        <NavLink  to='/host/my-vans/:id/photos'
                  style={({isActive}) => isActive ? activeLink : null}>
          Photos
        </NavLink>
    </div>
  )
}

export default HostVanDetailLayout
