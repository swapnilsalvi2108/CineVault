import {useEffect} from 'react'
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import { loadingState, pageState, searchState, titlesState } from './atoms';
import axios from 'axios';

const Loader = () => {
  const [searchValue, setSearchValue] = useRecoilState(searchState);
  const [page, setPage] = useRecoilState(pageState);
  const [titles, setTitles] = useRecoilState(titlesState);
  const setLoader = useSetRecoilState(loadingState);

  const fetcher = () => {
    setLoader(true);
    axios.get('https://api.themoviedb.org/3/search/movie',{
      params: {
        api_key: '558c6b633ae85ad623b993bd9f5863e8',
        query: searchValue.value,
        include_adult: true,
        page: searchValue.new ? 1 : page.page
      }
    })
    .then(res => {
      setTitles((currState)=>{
        if(searchValue.new){
          return [...res.data.results]
        }else{
          return [...currState, ...res.data.results]
        }
      });
      setPage({
        page: res.data.page,
        total_pages: res.data.total_pages,
        total_results: res.data.total_results
      });
      setSearchValue((searchState)=> ({...searchState, ...{new: false}}))
    })
    .catch(err => console.log(err));
    setLoader(false);
  }

  useEffect(()=>{
    fetcher()
  },[searchValue.value, page.page]);

  return null
}

export default Loader