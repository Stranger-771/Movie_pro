import React from 'react'
import {useParams} from 'react-router-dom';

const MoviePage = () => {
  const {id} =useParams();
  return (
    <>
    <div> Our Movie Page {id }</div>
    </>
  )
}

export default MoviePage;