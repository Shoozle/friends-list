import React from 'react';

function FilterButton(props) {
    return (
        <button 
          type="button" 
          aria-pressed="true" 
          onClick={() => props.setFilter(props.name)}
          >
          <span>{props.name}</span>
        </button>
    );
}

export default FilterButton;