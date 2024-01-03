import React from 'react'
import './dropdown.css'
export const Dropdown = ({options , selectColor , selectBackground}) => {
    return (
        <div className=''>
            <select className='select-container' style={{color : `${selectColor}` , backgroundColor : `${selectBackground}`}}>
        {options.map((o, index) => (
          <option key={index} className='select-option' value={o} style={{color : `${selectColor}`}}>
            <p className='select-option'>{o}</p>
          </option>
        ))}
      </select>

        </div>
    )
}
