import React from 'react';
import './button.css'

function FilterButton(props) {
    return (
        <button className="btn"
          type="button" 
          aria-pressed="true" 
          onClick={() => props.setFilter(props.name)}
          >
          <span>{props.name}</span>
        </button>
    );
}

export default FilterButton;