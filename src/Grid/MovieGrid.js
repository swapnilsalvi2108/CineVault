import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { loadingState, pageState, titlesState } from '../atoms'
import MovieItem from './MovieItem';
import './MovieGrid.css'
import LoadingIndicator from '../components/LoadingIndicator';

const MovieGrid = () => { 
  const titles = useRecoilValue(titlesState);
  const [page, setPage] = useRecoilState(pageState);
  const isLoading = useRecoilValue(loadingState);

  if(!titles?.length) return null

  const loadFunc = () => {
    // if(page.page > page.total_pages){
    //   setLoader(false);
    //   return
    // }
    
    if(page.page+1 <= page.total_pages){
      setPage(currState => ({...currState, page: currState.page+1}))
    }
  };

  return(
    <div>
      <div
        className='movieGrid'
      >        
        {titles.map((item, index) => 
          <MovieItem 
            movie={item}
            isLastItem = {index === titles.length-1}
            pullNext={loadFunc}
            index={index}
            key={index}
          />
        )}
      </div>
      {isLoading && <LoadingIndicator/>}
    </div>
  )
}

export default MovieGrid