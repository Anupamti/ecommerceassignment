import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { signup } from '../../Redux/action/users';
import { useDispatch } from 'react-redux';
import { Box, Button, Container, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column', width: '100%',
        justifyItems: 's'
    },
    Input: {
        paddingTop: '20px',
    },
}));
function Signup() {

    const history = useHistory();
    const dispatch = useDispatch();



    const [firstName, setfirstName] = useState()
    const [lastName, setlastName] = useState()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setconfirmPassowrd] = useState()
    const [form, setForm] = useState();

    useEffect(() => {
        if (!form) {
        }
        else {
            dispatch(signup(form, history));
        }
    }, [form])


    const handleClick = () => {

        let data = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }

        setForm(data)
    }

    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="sm">
                <Typography variant="h5" style={{ marginTop: '20px' }}>
                    Create a New Account
                </Typography>
                <form className={classes.margin} noValidate autoComplete="off">
                    <Box className={classes.Input}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" type="name" onChange={(e) => setfirstName(e.target.value)} />

                    </Box>
                    <Box className={classes.Input}>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" type="name" onChange={(e) => setlastName(e.target.value)} />
                    </Box>

                    <Box className={classes.Input}>
                        <TextField id="outlined-basic" label="E-Mail" variant="outlined" type="email" onChange={(e) => setEmail(e.target.value)} />
                    </Box>

                    <Box className={classes.Input}>
                        <TextField id="outlined-basic" label="Enter Password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </Box>

                    <Box className={classes.Input}>
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" onChange={(e) => setconfirmPassowrd(e.target.value)} />
                    </Box>

                    <Box className={classes.Input}>
                        <Button variant="contained" color='primary' onClick={handleClick}>
                            Signup
                        </Button>

                        <Button style={{ color: "black", marginLeft: '20px' }} variant="outlined" color='primary' onClick={() => history.push('/login')}>
                            Login
                        </Button>
                    </Box>

                </form>
            </Container>

        </div>
    )
}

export default Signup
