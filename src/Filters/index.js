import { FaFilter } from "react-icons/fa";
import './Filters.css';
import { useState } from "react";

const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);

  return(
    <div className="filtersContainer">
      <FaFilter className="filtersIcon" onClick={()=>{setShowFilters(!showFilters)}}/>
      {
      showFilters && 
        <div className="filterContainer">Hello</div>
      }
    </div>
  )
}

export default Filter