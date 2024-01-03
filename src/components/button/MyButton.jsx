import { Button } from '@mui/material'
import React from 'react'

const MyButton = ({Icon , text , backgroundColor , onClick}) => {
  return (
    <Button onClick={onClick}
    startIcon = {<Icon />}
    variant='contained'
    sx={{backgroundColor : `${backgroundColor} ` , color : `white`  , ":hover": { backgroundColor: `${backgroundColor}` }
    , borderRadius : "0.6rem" , height : '2.75rem' , width : '11.25rem'
}}
    >
        <p style={{fontFamily : 'Inter', fontSize :'14px' , fontWeight : '400'}}> {text}</p>
    </Button>
  )
}

export default MyButton