import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './MovieDetail.css';
import Pills from "../components/Pills";
import LoadingIndicator from "../components/LoadingIndicator";
import Productions from "./Productions";

function MovieDetail(){
  const { id } = useParams();
  const [media, setMedia] = useState({});
  const [img, setImg] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getImgUrl = (poster) => {
    if(poster.posters.length){
      return `https://www.themoviedb.org/t/p/w188_and_h282_bestv2/${poster.posters[0].file_path}`
    }else{
      return `placeholder.jpg`
    }
  }
  const getImages = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NThjNmI2MzNhZTg1YWQ2MjNiOTkzYmQ5ZjU4NjNlOCIsInN1YiI6IjY2MDRiZjFlMjgxMWExMDE2M2RhMzcyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVALbR43WlfbESCttS8TWPR94c-pT57aAo6YHmo76W4'
      }
    };
    const url = `https://api.themoviedb.org/3/movie/${id}/images`
    axios.get(url, options)
    .then(res => setImg(getImgUrl(res.data)))
  }

  useEffect(()=>{
    setIsLoading(true);
    getImages()
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NThjNmI2MzNhZTg1YWQ2MjNiOTkzYmQ5ZjU4NjNlOCIsInN1YiI6IjY2MDRiZjFlMjgxMWExMDE2M2RhMzcyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVALbR43WlfbESCttS8TWPR94c-pT57aAo6YHmo76W4'
      }
    };
    axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .then(res => setMedia(res.data));
    setTimeout(()=>{setIsLoading(false)}, 900);
  }, [id]);

  return(
    <div className="detailContainer">
      {
        isLoading ? 
        <div className="loader">
          <LoadingIndicator/>
        </div>:
        <>
          <div>
            <div className="detail">
              <img alt="" className="backdrop" src={img}/>
              <img alt="" className="poster" src={img}/>
            </div>
            <div className="titleContainer">
              <div className="title">
                <h2>{media.title}</h2>
                <p className="desc">{media.overview}</p>
              </div>
            </div>
          </div>
          {
            <div className="generes">
              <h4>Genres</h4>
              <Pills data={media?.genres.map(item=> item.name)}/>
              {
                media?.production_companies.length ? 
                <>
                  <h4>Production Companies</h4>
                  <Productions data={media?.production_companies}/>
                </> : <></>
              }
            </div>
          }
        </>
      }
    </div>
  )
}

export default MovieDetail;