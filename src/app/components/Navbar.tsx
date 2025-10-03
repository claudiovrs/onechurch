'use client';
import { useState, type MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleOpen = (e: MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" elevation={0} style={{ background: 'transparent' }}>
            <Toolbar className='p-4'
                style={{
                    backgroundColor: 'black',
                    opacity: 0.8,
                    color: 'white',
                }}
            >
                <Link legacyBehavior href="/">
                    <a className="flex items-center gap-3">
                        <Image src="/logo.png" alt="OneChurch" width={110} height={110} className="w-24 h-auto md:w-36" />
                    </a>
                </Link>
                <div className="flex-1" />
                <nav className="hidden md:flex gap-4 items-center">
                    <Link legacyBehavior href="#pontes"><Button color="inherit">Pontes</Button></Link>
                    <Link legacyBehavior href="#sobre"><Button color="inherit">Sobre</Button></Link>
                    <Link legacyBehavior href="#eventos"><Button color="inherit">Eventos</Button></Link>
                    <Link legacyBehavior href="#doe"><Button variant="contained" color="primary">Doe</Button></Link>
                </nav>
                <IconButton
                    className="md:hidden"
                    aria-label="open menu"
                    color="inherit"
                    onClick={handleOpen}
                    sx={{ display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    PaperProps={{ style: { minWidth: 200 } }}
                >
                    <MenuItem onClick={handleClose}>
                        <Link legacyBehavior href="#pontes"><a className="w-full">Pontes</a></Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link legacyBehavior href="#sobre"><a className="w-full">Sobre</a></Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link legacyBehavior href="#eventos"><a className="w-full">Eventos</a></Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link legacyBehavior href="#doe"><a className="w-full">Doe</a></Link>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}