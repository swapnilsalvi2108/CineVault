import '../App.css';
import MovieGrid from './MovieGrid';
import EmptyState from './EmptyState';
import { useRecoilValue } from 'recoil';
import { searchState, titlesState } from '../atoms';

const Grid = () => {
  const titleState = useRecoilValue(titlesState);
  const search = useRecoilValue(searchState);
  console.log(titleState);
  console.log(search);
  if(!search.value) return  
  if(!titleState.length){
    return <EmptyState/>
  }
  return(
    <div className='grid'>
      <MovieGrid/>
    </div>
  )
}

export default Grid