import { useRecoilState } from 'recoil'
import '../App.css'
import TextField from '../components/TextField'
import { searchState, titlesState } from '../atoms'
import SwitchContent from '../SwitchContent'

const Header = () => {
  const [searchValue, setSearchValue] = useRecoilState(searchState);
  const [, setTitles] = useRecoilState(titlesState);

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