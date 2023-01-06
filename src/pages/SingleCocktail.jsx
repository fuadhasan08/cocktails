import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, NavLink } from 'react-router-dom'

const SingleCocktail = () => {
  const { id } = useParams()
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  const [cocktail, setCoktail] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    const drinks = data.drinks[0]

    if (drinks) {
      setCoktail(drinks)
      setLoading(false)
    } else {
      setCoktail()
    }
  }

  useEffect(() => {
    fetchData()
  }, [cocktail])

  const {
    strDrink,
    strAlcoholic,
    strGlass,
    strDrinkThumb,
    strCategory,
    strInstructions,
  } = cocktail

  return (
    <section className='section cocktail-section'>
      <NavLink to='/' className='btn btn-primary'>
        back home
      </NavLink>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className='section-title'>{strDrink}</h2>
          <div className='drink'>
            <img src={strDrinkThumb} alt={strDrink} />
            <div className='drink-info'>
              <p>
                <span className='drink-data'>name :</span> {strDrink}
              </p>
              <p>
                <span className='drink-data'>category :</span> {strCategory}
              </p>
              <p>
                <span className='drink-data'>info :</span> {strAlcoholic}
              </p>
              <p>
                <span className='drink-data'>glass :</span> {strGlass}
              </p>
              <p>
                <span className='drink-data'>instructons :</span>{' '}
                {strInstructions}
              </p>
              <p>
                <span className='drink-data'>ingredients :</span>
                <span> Gin</span>
                <span> Grand Marnier</span>
                <span> Lemon Juice</span>
                <span> Grenadine</span>
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default SingleCocktail
