import React, { useState, useContext, useEffect } from 'react'
// import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cocktail, setCoktail] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    const { drinks } = data
    if (drinks) {
      let newItem = drinks.map((item) => {
        const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
          item

        return {
          idDrink,
          strDrink,
          strAlcoholic,
          strGlass,
          strDrinkThumb,
        }
      })
      setCoktail(newItem)
      setLoading(false)
    } else {
      setCoktail([])
    }
  }

  useEffect(() => {
    fetchData()
  }, [cocktail])

  return (
    <AppContext.Provider value={{ loading, cocktail }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
