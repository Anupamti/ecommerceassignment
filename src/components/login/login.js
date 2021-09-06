import { Box, Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { signin } from '../../Redux/action/users';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', flexDirection: 'column', width: '100%',
        justifyItems: 's'
    },
    Input: {
        paddingTop: '20px',
    },
}));
function Login() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [form, setForm] = useState();

    useEffect(() => {
        if (!form) {
        }
        else {
            dispatch(signin(form, history));
        }
    }, [form])

    const handleClick = () => {

        // const data = new FormData();
        let data = {
            email,
            password
        }

        setForm(data)
    }


    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="sm">
                <Typography variant="h5" style={{ marginTop: '20px' }}>
                    Login
                </Typography>
                <form className={classes.margin} noValidate autoComplete="off">
                    <Box className={classes.Input}>
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" type="email" onChange={(e) => setEmail(e.target.value)} />

                    </Box>
                    <Box className={classes.Input}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </Box>

                    <Box className={classes.Input}>
                        <Button style={{ backgroundColor: 'black' }} variant="contained" color='primary' onClick={handleClick}>
                            Login
                        </Button>

                        <Button style={{ color: 'black', marginLeft: '20px' }} variant="outlined" color='primary' onClick={() => history.push('/signup')}>
                            Signup
                        </Button>
                    </Box>

                </form>
            </Container>
        </div>
    )
}

export default Login
