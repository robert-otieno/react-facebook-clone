import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Add, ExpandMore, Flag, Forum, Home, NotificationsActive, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';

function Header() {
    return (
        <div className="header">
            <div className='header__left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' alt=''/>
                <div className='header__input'>
                    <SearchIcon/>
                    <input type='text' placeholder='Search Facebook'/>
                </div>
            </div>
            <div className='header__center'>
                <div className="header__option header__option--active">
                    <Home fontSize='large'/>
                </div>
                <div className="header__option">
                    <Flag fontSize='large'/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize='large'/>
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize='large'/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize='large'/>
                </div>
            </div>
            <div className='header__right'>
                <div className="header__info">
                    <Avatar/>
                    <h4>Johnny</h4>
                    <IconButton>
                        <Add/>
                    </IconButton>
                    <IconButton>
                        <Forum/>
                    </IconButton>
                    <IconButton>
                        <NotificationsActive/>
                    </IconButton>
                    <IconButton>
                        <ExpandMore/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
