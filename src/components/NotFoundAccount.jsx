import React from 'react'
import Alert from 'react-bootstrap/Alert'

const NotFoundAccount = () => {
  return (
    <Alert className='mt-4' variant='danger'>
      <h3>Account Not Found</h3>
      <p>The GitHub account you searched for does not exist.</p>
    </Alert>
  )
}

export default NotFoundAccount