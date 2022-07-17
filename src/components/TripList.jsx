import { useEffect, useState } from "react"

import styles from './TripList.module.css'

export function TripList() {
  const [trips, setTrips] = useState([])  

  useEffect(() => {
    fetch('http://localhost:3000/trips')
      .then(response => response.json())
      .then(json => setTrips(json))
  },[])

  console.log(trips)

  return (
    <div className={styles.tripList}>
      <h2>TripList</h2>

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
