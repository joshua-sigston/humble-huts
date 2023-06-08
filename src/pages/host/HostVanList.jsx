import React from 'react'

// Router
import { Link, useLoaderData } from 'react-router-dom';

// API
import { getHostVans } from '../../api';

// Styles
import styles from '../../styles/van-list.module.css'

export function loader() {
    return getHostVans()
}

const HostVanList = () => {
  const vans = useLoaderData();

  const hostVansEls = vans.map(van => (
    <Link
        to={van.id}
        key={van.id}>
        <div className={styles.host_van} key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className={styles.van_info}>
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
        </div>
    </Link>
))

return (
    <section>
        <div>
            {
                vans.length > 0 ? (
                    <section className={styles.host_vans_list}>
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
