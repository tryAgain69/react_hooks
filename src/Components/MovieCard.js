import React from 'react'
import { Button, Card } from 'react-bootstrap'

function MovieCArd({ movie }) {

  return (
    <div>
      <Card style={{ width: '18rem',height:"550px" }}>
        <Card.Img variant="top" src={movie.posterUrl} style={{height:"300px"}} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            Interstellar, ou Interstellaire  Michael Caine, Casey Affleck et Matt Damon.
          </Card.Text>
          <Card.Title>rating:{movie.rate}</Card.Title>

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MovieCArd
MovieCArd.js
