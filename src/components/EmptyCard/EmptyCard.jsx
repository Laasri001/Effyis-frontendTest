import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MyButton from '../button/MyButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './emptyCard.css'
const EmptyCard = ({AddNewProduct}) => {
  return (
    <div className='' style={{backgroundColor : '',height : '100%' , width : '100%' , display : 'flex' , flexDirection : 'column' , justifyContent : 'center' , alignItems : 'center'}}>
        <div className='card-icon' style={{}}>
            <ShoppingBagIcon sx={{color : '#BEC0CA' , height : '60px',width :'60px'}} />
        </div>
        <div className='content' >
            <p style={{fontFamily : 'Poppins' , fontSize : '20px' , fontWeight : '400' , textAlign : 'center' , marginTop : '1rem'}}> No orders Yet?</p>
            <p style={{fontFamily : 'Inter' , fontSize : '14px' , fontWeight : '400' , color:"#8B8D97" , textAlign : 'center' , marginTop : '1rem' ,marginBottom : '2rem'}}>Add products to your store and start selling to see orders here.</p>
            <MyButton
            onClick={AddNewProduct}
            text="New Product"
            Icon = {FavoriteBorderOutlinedIcon}
            backgroundColor="#D23565"
            />
        </div>
    </div>
  )
}

export default EmptyCard