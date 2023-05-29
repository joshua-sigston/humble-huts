import React from 'react'

// Router
import { Outlet, NavLink } from 'react-router-dom'


const HostLayout = () => {

  const activeLink = {
    color: 'brown',
    fontWeight: 'bold'
  }

  return (
    <div>
        <h1>HostLayout</h1>
        <NavLink  to='.'
                  end
                  style={({isActive}) => isActive ? activeLink : null}>
        Host
        </NavLink>

        <NavLink  to='reviews'
                  style={({isActive}) => isActive ? activeLink : null}>
        Reviews
        </NavLink>

        <NavLink  to='income'
                  style={({isActive}) => isActive ? activeLink : null}>
        Income
        </NavLink>

        <NavLink  to='my-huts'
                  style={({isActive}) => isActive ? activeLink : null}>
        My Huts
        </NavLink>
        <Outlet />
    </div>
  )
}

export default HostLayout
