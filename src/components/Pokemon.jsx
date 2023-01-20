import React from 'react'

const Pokemon = ({pokemon}) => {
  console.log(pokemon)
  return (
    <div>{pokemon.name}</div>
  )
}

export default Pokemon