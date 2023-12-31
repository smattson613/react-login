import React from 'react'
import { Link } from 'react-router-dom'

const Lounge = () => {
  return (
    <section>
        <h1>The Lounge</h1>
        <br />
        <p>Welcome to the Lounge for admins and editors.</p>
        <div className='flexGrow'>
            <Link to='/'>Home</Link>
        </div>
    </section>
  )
}

export default Lounge