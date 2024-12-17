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
import { Link } from 'react-scroll';

const Navbar = () =>{
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            to: 'home'
        },
        {
            text: 'Sobre Nós',
            icon: <InfoIcon />,
            to: 'about'
        },
        {
            text: 'Nosso Trabalho',
            icon: <HomeWorkIcon />,
            to: 'work'
        },
        {
            text: 'Avaliação',
            icon: <CommentRoundedIcon />,
            to: 'testemonial'
        },
        {
            text: 'Contato',
            icon: <PhoneRoundedIcon />,
            to: 'contact'
        },
        {
            text: 'Cart',
            icon: <ShoppingCartRoundedIcon />,
            to: '' // Deixe vazio ou ajuste se precisar
        }
    ];
    
    return(
        <div className="container-nav">
            <nav>
                <div className="nav-logo-container">
                    <img src={Logo} alt="Logo padaria"></img>
                </div>
                <div className='navbar-links-container'>
                    <Link to="home" smooth={true} duration={600}>
                        <a href="">Home</a>
                    </Link>
                    <Link to="about" smooth={true} duration={600}>
                        <a href=''>Sobre Nós</a>
                    </Link>
                    <Link to="work" smooth={true} duration={600}>
                        <a href=''>Nosso Trabalho</a>
                    </Link>
                    <Link to="testemonial" smooth={true} duration={600}>
                        <a href=''>Avaliação</a>
                    </Link>
                    <Link to="contact" smooth={true} duration={600}>
                        <a href=''>Contato</a>
                    </Link>
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
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={600}
                                    onClick={() => setOpenMenu(false)} // Fecha o menu após o clique
                                >
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} sx={{ color: '#000' }} />
                                </ListItemButton>
                                </Link>
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