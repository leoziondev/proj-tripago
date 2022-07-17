import { useEffect, useState } from "react"

import styles from './TripList.module.css'

export function TripList() {
  const [trips, setTrips] = useState([])  
  const [url, setUrl] = useState('http://localhost:3000/trips')

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setTrips(json))
  },[url])

  console.log(trips)

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
        {trips.map(trip => (
          <li key={trip.id}>
            <p>{trip.title}</p>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>      
    </div>
  )
}
