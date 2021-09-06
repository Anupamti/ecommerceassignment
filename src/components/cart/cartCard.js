import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { GetCart, RemoveFromCart } from '../../Redux/action/cart';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        width: '95%'
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function CartCard({ props }) {

    const dispatch = useDispatch()

    const [URL] = useState("https://ecommerceanupamsassignment.herokuapp.com/")

    const handleremove = () => {
        dispatch(RemoveFromCart(props._id))
        dispatch(GetCart())
    }
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt={`${URL}${props?.image} `} src={`${URL}${props?.image} `} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" style={{ marginRight: '30px' }}>
                                        {props?.productTitle}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom style={{ marginRight: '30px' }} >
                                        Matte Black
                                    </Typography>
                                    {/* <Typography variant="body2" color="textSecondary">
                                        ID: 1030114
                                    </Typography> */}
                                </Grid>
                                <Grid item>
                                    <Button onClick={handleremove} variant="body2" style={{ cursor: 'pointer' }}>
                                        Remove
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    ₹ 3434.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>

        </div>
    )
}

export default CartCard
