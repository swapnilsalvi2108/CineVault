import { Waypoint } from 'react-waypoint';
import './MovieItems.css';
import { useInView } from 'react-intersection-observer';
import { useRecoilValue } from 'recoil';
import { aContent } from '../atoms';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { LuEyeOff } from "react-icons/lu";
import { BiSolidMovie } from "react-icons/bi";

const MovieItem = ({movie, isLastItem, pullNext}) => {
  const showAContent = useRecoilValue(aContent);
  const navigate = useNavigate();
  const { ref: inViewRef, inView } = useInView({
    threshold: 0
  });
  const getImgUrl = () => {
      if(movie?.poster_path){
        return `https://www.themoviedb.org/t/p/w188_and_h282_bestv2/${movie?.poster_path}`
      }else{
        return `placeholder.jpg`
      }
  } 

  const getImgComponent = () => {
    return <img 
      className={classnames('poster', {'blur': !showAContent && movie.adult})} 
      src={getImgUrl()}/>
  }

  const getChildrenUrl = () => {
    if(!inView){
      return null
    }else{
      if(isLastItem){
        return (<Waypoint
          onEnter={pullNext}
        >
          {getImgComponent()}
        </Waypoint>)
      }else{
        return getImgComponent()
      }
    }
  }

  const handleNavigation = () => {
    if(movie.adult && !showAContent){
      return;
    }
    navigate(`/${movie.id}`);
  }

  return(
    <div className="movieContainer" ref={inViewRef} onClick={handleNavigation}>
      {getChildrenUrl()}
      {!showAContent && movie.adult &&
        <LuEyeOff className="blurContent"/>
      }
    </div>
  )
};

export default MovieItem