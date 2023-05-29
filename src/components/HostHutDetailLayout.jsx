import React from 'react'

// Router


const HostHutDetailLayout = () => {

    const activeLink = {
        color: 'brown',
        fontWeight: 'bold'
      }
  return (
    <div>
        <h1>HostHutLayout</h1>
        <NavLink  to='/host/our-huts/:id/details'
                  end
                  style={({isActive}) => isActive ? activeLink : null}>
        Details
        </NavLink>

        <NavLink  to='/host/our-huts/:id/pricing'
                  style={({isActive}) => isActive ? activeLink : null}>
        Pricing
        </NavLink>

        <NavLink  to='/host/our-huts/:id/photos'
                  style={({isActive}) => isActive ? activeLink : null}>
        Photos
        </NavLink>
      
    </div>
  )
}

export default HostHutDetailLayout
