import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

import styles from './TripList.module.css'

export function TripList() {
  const [url, setUrl] = useState('http://localhost:3000/trips')
  const { data: trips } = useFetch(url)

  return (
    <div className={styles.tripList}>
      <h2>TripList</h2>

      <div className={styles.filters}>
        <button
          onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}
        >
          European Trips
        </button>
        <button
          onClick={() => setUrl('http://localhost:3000/trips')}
        >
          All Trips
        </button>
      </div>

      <ul>
        {trips && trips.map(trip => (
          <li key={trip.id}>
            <p>{trip.title}</p>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>      
    </div>
  )
}
