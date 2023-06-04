import React from 'react'

// Router
import { Link, useSearchParams, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div>
      <h1>Error Page</h1>
      <h1>{error.message}</h1>
      <p>{error.status} - {error.statusText}</p>
    </div>
  )
}

export default Error
