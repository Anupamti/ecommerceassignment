import { Container } from '@material-ui/core'
import React, { useEffect } from 'react'
import CardRender from '../cardRender/cardRender'
import Navbar from '../navbar/navbar'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { getUserDetails } from '../../Redux/action/userData';
import { useDispatch, useSelector } from 'react-redux';
import { GetCart } from '../../Redux/action/cart';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));
function Home() {

    const dispatch = useDispatch();
    const { userData } = useSelector(state => state.userDetails.data)

    const classes = useStyles();


    useEffect(() => {
        dispatch(getUserDetails())
        dispatch(GetCart())
    }, [])

    return (
        <div>
            <Container style={{ marginTop: '20px' }}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={5}>
                            {
                                userData?.map((data, i) => (
                                    <Grid key={i} item>
                                        <CardRender props={data} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home
