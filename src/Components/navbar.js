import React, { useState } from 'react';
import Logo from '../Assets/Logo.png'
import { BsCart2 } from 'react-icons/bs'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import {HiOutlineBars3} from 'react-icons/hi2'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

const Navbar = () =>{
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: 'Home', 
            icon: <HomeIcon />
        },
        {
            text: 'Sobre Nós',
            icon: <InfoIcon />
        },
        {
            text: 'Nosso Trabalho',
            icon: <HomeWorkIcon />
        },
        {
            text: 'Avaliação',
            icon: <CommentRoundedIcon />
        },
        {
            text: 'Contato',
            icon: <PhoneRoundedIcon />
        },
        {
            text: 'Cart',
            icon: <ShoppingCartRoundedIcon />
        }
    ]
    return(
        <div className="container-nav">
            <nav>
                <div className="nav-logo-container">
                    <img src={Logo} alt="Logo padaria"></img>
                </div>
                <div className='navbar-links-container'>
                    <a href="">Home</a>
                    <a href=''>Sobre Nós</a>
                    <a href=''>Nosso Trabalho</a>
                    <a href=''>Avaliação</a>
                    <a href=''>Contato</a>
                    <a href=''>
                        <BsCart2 className="navbar-cart-icon" />
                    </a>
                    <button className='primary-button'>Reservas Agora</button>
                </div>
                <div className='nav-bar-menu-container'>
                    <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
                </div>
                <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
                    <Box 
                    sx={{width: 250}}
                    role='presentation'
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(true)}>
                        <List>
                            {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} sx={{ color: '#000' }} />
                                </ListItemButton>
                            </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </nav>
        </div>
    )
}
export default Navbar;