import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './myCard.css'
import { FormControl, MenuItem, Select } from '@mui/material';
import { Dropdown } from '../dropdown/Dropdown';
const MyCard = ({children , MyIcon , title , week , cardStyle , containerStyle, iconStyle, iconBackground , chartFilter , optionsCharts , optionWeek , selectBackground , selectColor,selectColorChart,selectBackgroundChart}) => {

  const [filter, setFilter] = React.useState('Sales');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    
    <div className = {`card-container ${cardStyle}`}>
        <div className={`card ${containerStyle}`} >
            <div className='card-header' >
            {MyIcon ? 
            <div className={`icon `} style={{backgroundColor: `${iconBackground}`}} >
            {MyIcon ? <MyIcon className={` ${iconStyle}`} /> : '' }
            </div> : ''}
            <div className='title-filter' >
                {title ? 
                <p className='title'> {title} </p> : ''
                }
                {chartFilter ? 
              <Dropdown
              selectBackground = {selectBackgroundChart}
              selectColor = {selectColorChart}
              options = {optionsCharts} />
              : ''  
              }
            </div>
            {optionWeek ?

            <Dropdown
            selectBackground = {selectBackground}
            selectColor = {selectColor}
             options={optionWeek} />
            : 
            ''}
            </div>
            {children}
        </div>
    </div>
  )
}

export default MyCard