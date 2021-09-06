import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { useHistory } from 'react-router';
import { Box } from '@material-ui/core';
import CartCard from '../cart/cartCard';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: '30%'
    }
}));
function Navbar() {


    const [datas, SetData] = useState()
    const state = useSelector(state => state.cartData.cart)


    useEffect(() => {
        SetData(state?.userData)
    }, [state])



    const history = useHistory();

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [toggle, setToggle] = useState(false)



    const toggleDrawer = () => {
        setToggle(!toggle)
        // setOpen(!true)
    };

    const handleLogout = () => {
        window.location.reload();
        JSON.parse(localStorage.clear('profile'));
    }

    return (
        <div>
            <div className={classes.root}>

                <AppBar position="static" style={{ backgroundColor: 'black' }} >
                    <Toolbar>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" className={classes.title}>
                            E-commerce
                        </Typography>

                        <div>
                            <IconButton
                                color="inherit"
                                onClick={toggleDrawer}
                            >
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >

                                <MenuItem onClick={() => history.push('/sellproducts')} >Sell Product</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
            <SwipeableDrawer
                anchor="right"
                open={toggle}
                onClose={false}
                onOpen={true}
            >
                <Box style={{ display: "flex", alignItems: 'center', padding: '10px' }}>
                    <IconButton
                        onClick={toggleDrawer}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        CART
                    </Typography>
                    <Divider light />
                </Box>
                <div style={{ height: '85%', overflowY: 'scroll' }}>
                    {
                        datas && (
                            <>
                                {
                                    datas.map((data) => (
                                        <ListItem button>
                                            <CartCard props={data} />
                                            <Divider light />
                                        </ListItem>
                                    ))
                                }
                            </>
                        )
                    }
                </div>
                <Button style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>Proceed to Buy</Button>
            </SwipeableDrawer>
        </div>
    )
}

export default Navbar
