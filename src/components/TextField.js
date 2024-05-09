import './TextField.css';
import {FaSearch} from 'react-icons/fa';
import classnames from 'classnames';
import { useState } from 'react';

let timer;
function debounce(func, timeout = 300){
  return (...args) => {
    clearTimeout(timer);
      timer = setTimeout(() => {func(...args)}, timeout);
  };
}

const TextField = ({textValue='', handleChange}) => {
  const [inputTextValue, setInputTextValue] = useState('');
  
  const debouncedHandle = debounce((value) => {
    handleChange(value);
  }, 500);

  const handleValueChange = (e) => {
    const { value } = e.target;
    setInputTextValue(value)
    debouncedHandle(value)
  };

  return(
    <div className={classnames('searchContainer', {hasValue: !!textValue.length || !!textValue.length})}>
      <FaSearch className='searchButton'/>
      <input type="text" value={inputTextValue || textValue} className="searchInput" onChange={handleValueChange} />
    </div>
  )
};

export default TextField;