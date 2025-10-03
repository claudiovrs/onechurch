'use client';
import Link from 'next/link';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {
    return (
        <AppBar position="fixed" elevation={0} style={{ background: 'transparent' }}>
            <Toolbar className='p-4'
                style={{
                    backgroundColor: 'black',
                    opacity: 0.8,}}
            >
                <Link legacyBehavior href="/">
                    <a className="flex items-center gap-3">
                        <Image src="/logo.png" alt="OneChurch" width={140} height={140} />
                        <span className="font-semibold text-lg text-black">OneChurch</span>
                    </a>
                </Link>
                <div className="flex-1" />
                <nav className="hidden md:flex gap-4">
                    <Link legacyBehavior href="#pontes"><Button>Pontes</Button></Link>
                    <Link legacyBehavior href="#sobre"><Button>Sobre</Button></Link>
                    <Link legacyBehavior href="#eventos"><Button>Eventos</Button></Link>
                    <Link legacyBehavior href="#doe"><Button variant="contained" color="primary">Doe</Button></Link>
                </nav>
                <IconButton className="md:hidden"><MenuIcon /></IconButton>
            </Toolbar>
        </AppBar>
    );
}