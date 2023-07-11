import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <article style={{ padding: "100px" }}>
        <h1>Uh Oh!</h1>
        <br />
        <p>Page Not Found</p>
        <div className='FlexGrow'>
            <Link to='/'>Head to the Home Page</Link>
        </div>
    </article>
  )
}

export default Missing