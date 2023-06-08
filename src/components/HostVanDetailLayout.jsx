import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Router
import { Navigate } from 'react-router'

const HostVanDetailLayout = () => {
  const { loggedIn } = useSelector((store) => store.loggedIn)
  
  const activeLink = {
    color: '#568EA3'
  }

  if(!loggedIn) {
    return <Navigate to='/login' />
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
