import React from 'react'
import { useSelector } from 'react-redux'
import { CardItem } from './CardItem'

export const Cards = () => {
  const { cards, activeType } = useSelector((state) => state.pokemons)

  return (
    <>
      {cards
        .filter((card) => {
          if (activeType === null) {
            return true
          } else if (card.types.length > 1) {
            if (
              card.types[0].type.name === activeType ||
              card.types[1].type.name === activeType
            ) {
              return true
            }
          } else if (card.types.length === 1) {
            if (card.types[0].type.name === activeType) {
              return true
            }
          }
          return false
        })
        .map((card) => (
          <CardItem
            key={card.name}
            id={card.id}
            name={card.name}
            types={card.types}
          />
        ))}
    </>
  )
}
