import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('userToken');
        navigate('/login');
        navigate(0);
    };
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Job Portal
                </Typography>
                <Button color="inherit" component={Link} to="/home">Home</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/jobs">Job Listings</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
                <Button color="inherit" component={Link} to="/showcase">Company Showcase</Button>
                <Button color="error" onClick={handleLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;