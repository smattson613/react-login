import React from 'react'
import { Link } from 'react-router-dom'

const Editor = () => {
  return (
    <section>
        <h1>Editor Page</h1>
        <br />
        <p>Welcome to the Editor page.</p>
        <div className='flexGrow'>
            <Link to='/'>Home</Link>
        </div>
    </section>
  )
}

export default Editor