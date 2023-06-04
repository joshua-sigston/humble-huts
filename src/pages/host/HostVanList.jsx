import React from 'react'

// Router
import { Link, useLoaderData } from 'react-router-dom';

// Components
import VanCard from '../../components/VanCard';

// API
import { getHostVans } from '../../api';

export function loader({ params }) {
    return getHostVans(params.id)
}

const HostVanList = () => {
  const vans = useLoaderData();

  const hostVansEls = vans.map(van => (
    <Link
        to={van.id}
        key={van.id}
    >
        <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
        </div>
    </Link>
))

return (
    <section>
        <h1 >Your listed vans</h1>
        <div>
            {
                vans.length > 0 ? (
                    <section>
                        {hostVansEls}
                    </section>

                ) : (
                        <h2>You have no vans.</h2>
                    )
            }
        </div>
    </section>
)
}

export default HostVanList
