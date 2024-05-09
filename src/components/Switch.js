import './Switch.css';
import classnames from 'classnames';

const Switch = ({handleChange, isOn = false}) => {
  return(
    <div className='switchContainer' onClick={()=>{handleChange(!isOn)}}>
      <div className={classnames('ball', {on: isOn})}>
      </div>
    </div>
  )
}

export default Switch