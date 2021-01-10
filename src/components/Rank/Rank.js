const Rank = ({name, entries}) => {
  return (
    <div>
    <h4 className="white f1 mt0 mb0">{"facesense"} </h4> 
    
      <div className="white f3 mt2">
    
       {'Greetings'} {name}{', your current rank is...'}
      </div>
      <h1 className="white f2 mb0">
      {entries}
      </h1>
    </div>
  )


}

export default Rank