import './Pills.css'

function Pills({data}){
  return(
    <div className="pillContainer">
      {/* <h4>Genres</h4> */}
      {
        data && data?.map(item => 
          <div className='pills'><p>{item}</p></div>
        )
      }
    </div>
  )
}

export default Pills