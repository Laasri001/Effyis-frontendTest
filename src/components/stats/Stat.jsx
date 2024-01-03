import React from 'react'
import './Stat.css'
export const Stat = (props) => {
  const percentColor = props.percentColor
  const valueColor = props.valueColor
  const titleStatColor = props.titleStatColor
  return (
    <div>
        <div className='card-bottom' >
        {props.stats?  props?.stats.map((stat)=> (
            <div className="stat-container" key={stat?.title} >
                <div>
                  <p className={`stat-title`} style={{color: `${stat.titleStatColor ? stat.titleStatColor : titleStatColor}`}} >{stat?.title} </p>
                </div>
                <div className='value-container' style={{}} >
                  <p className='value' style={{color: `${valueColor}`}} > {stat?.value} </p>
                  {stat?.percent ? 
                  <p className='pourcent' style={{alignSelf : "center" ,color : `${percentColor}`}}> +{stat?.percent}.00% </p>
                  : ''}
                </div>
      
            </div >
          )) : ''}
          </div>
    </div>
  )
}
