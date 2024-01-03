import React from 'react'
import './navbar.css'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { Height } from '@mui/icons-material';
const Navbar = () => {
    return (
        <div className='container' style={{width : '100%'}}>
            <div className='topNav'>
                <div className='top-container'>
                    <div className='dashboard'>
                        <p> Dashboard </p>
                    </div>
                    <div className='profile'>
                        <div className='badge'>
                            <Badge badgeContent={4} sx={{color : '#D23565'}}  >
                                <NotificationsIcon sx={{color : '#D23565' }}/>
                            </Badge>
                        </div>
                        <div className='group'>
                            <p style={{fontFamily : "DM Sans" , fontSize : '14px'}}>Anima Agrwal</p>
                            <p style={{fontFamily : 'DM Mono' , fontSize : '12px' , color:'gray' , alignSelf:"end"}}>Company LLC</p>
                        </div>
                        <div className='avatar'>
                            <p style={{color : '#D23565' }}>--</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='breadcrumbs'>
                <div className='pages'>
                    <div>
                       <Link to='/' style={{textDecoration : 'none' , height : '16px',width : '16px',display : 'flex'}}> <HomeIcon className='home-icon'  /> </Link>
                    </div>
                    <ul style={{display : "flex"}}>
                        <p className='slash'>/</p>
                        <li><Link to='/page' className='no-underline'> Page </Link> </li>
                        <p className='slash'>/</p>
                        <li> <Link to='/page' className='no-underline'> Page </Link> </li>
                        <p className='slash'>/</p>
                        <li> <Link to='/page' className='no-underline'> Page </Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar