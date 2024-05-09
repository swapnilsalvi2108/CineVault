import './Productions.css'

function Productions({data}){
  const getImgUrl = (item) => {
    if(item.logo_path){
      return `https://www.themoviedb.org/t/p/w188_and_h282_bestv2//${item?.logo_path}`
    }else{
      return `broken2.jpg`
    }
  }

  return (
    <div className="productions">
      {data.map(item=>{
          return (
            <div className='companyContainer'>
              <img className="logos" src={getImgUrl(item)}/>
              <span className='name'>{item.name}</span>
            </div>
          )
      })}
    </div>
  )
}

export default Productions