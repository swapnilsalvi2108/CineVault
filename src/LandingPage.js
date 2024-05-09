import { useMemo, useRef } from 'react';
import './App.css';
import TextField from './components/TextField';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { searchState, titlesState } from './atoms';

const LandingPage = () => {
  const bgRef = useRef();
  const [searchValue, setSearchValue] = useRecoilState(searchState);
  const setTitles = useSetRecoilState(titlesState);
  const handleValueChange = (value) => {
    const isNewValue = value !== searchValue.value
    if(isNewValue){
      setTitles([]);
      setSearchValue({value: value, new: true})
    }else{
      setSearchValue({value: value, new: false})
    }    
  }; 

  const imgSrc = useMemo(()=>`bg${Math.floor(Math.random()*3)+1}.png`,[]);
  if (searchValue.value){
    return null
  }
  return(
    <div className="emptyState">
      <img className="bgImg" ref={bgRef} alt='' src={imgSrc}/>
      <div className='emptySearchContainer'>
        <h1 className='title'>Cine Vault</h1>
        <TextField textValue={searchValue.value} handleChange={handleValueChange}/>
      </div>
    </div>
  )
}

export default LandingPage