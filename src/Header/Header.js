import { useRecoilState, useSetRecoilState } from 'recoil'
import '../App.css'
import TextField from '../components/TextField'
import { pageState, searchState, titlesState } from '../atoms'
import Filter from '../Filters'
import SwitchContent from '../SwitchContent'

const Header = () => {
  const [searchValue, setSearchValue] = useRecoilState(searchState);
  const [titles, setTitles] = useRecoilState(titlesState);

  const handleValueChange = (value) => {
    console.log('jhdcvg');
    const isNewValue = value !== searchValue.value
    if(isNewValue){
      setTitles([]);
      setSearchValue({value: value, new: true})
    }else{
      setSearchValue({value: value, new: false})
    }
  }; 
  return(
    <div className='header'>
      <h3>Cine Vault</h3>
      <div className='rightContainer'>
        <TextField textValue={searchValue.value} handleChange={handleValueChange}/>
        <SwitchContent/>
        {/* <Filter/> */}
      </div>
    </div>
  )
}

export default Header