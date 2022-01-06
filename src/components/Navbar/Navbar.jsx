import React from 'react';
import {appBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = () => {
    return (
        <>
            <AppBar position="fixed" className={classe.appBar} color="inherit">
                <toolbar>
                    <Typography variant="h6" className={classe.title} color="inherit">
                        <img src={'.src\assets\7064f8105512449.5f7b1e51a8e7a.jpg'} alt="Commerce.js" height="25px" className={classes.image}>
                        Commerce.js
                    </Typography>
                </toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
