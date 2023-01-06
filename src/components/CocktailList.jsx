const CocktailList = ({
  idDrink,
  strDrink,
  strAlcoholic,
  strGlass,
  strDrinkThumb,
}) => {
  return (
    <>
      <article className='cocktail'>
        <div className='img-container'>
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <div className='cocktail-footer'>
          <h3>{strDrink}</h3>
          <h4>{strGlass}</h4>
          <p>{strAlcoholic}</p>
          <a
            className='btn btn-primary btn-details'
            href={`cocktail/${idDrink}`}
          >
            details
          </a>
        </div>
      </article>
    </>
  )
}

export default CocktailList
