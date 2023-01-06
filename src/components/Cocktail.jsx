import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import CocktailList from './CocktailList'

const Cocktail = () => {
  const { cocktail } = useGlobalContext()
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktail.map((item) => {
          return <CocktailList {...item} key={item.idDrink} />
        })}
      </div>
    </section>
  )
}

export default Cocktail
