import React from 'react';
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
  return <div className="header">   


        <IconButton>
        <PersonIcon fontSize='large' className='header__icon'/>
        </IconButton>
        
        <img className='header__logo'
        alt=' '
src='https://www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo-253x300.png'
/>

    <IconButton>
        <ForumIcon fontSize='large' className='header__icon'/>
    </IconButton>

  </div>;
}

export default Header;
