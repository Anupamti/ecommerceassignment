import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import { Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useDispatch } from 'react-redux';
import { selectId } from '../../Redux/action/userData';
import { useHistory } from 'react-router';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 305,
        width: '250px',
        cursor: 'pointer'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


function CardRender({ props }) {

    const dispatch = useDispatch()
    const history = useHistory();


    const classes = useStyles();

    const [URL] = useState('https://ecommerceanupamsassignment.herokuapp.com/')

    const handleClick = () => {
        // setId(props?._id)
        dispatch(selectId(props?._id))
        history.push('/productpage')
        // console.log(props?._id, "this is selected")
    }

    // useEffect(() => {
    //     if (!selectedid) {

    //     }
    //     else {

    //         history.push('/productpage')
    //     }

    // }, [selectedid])

    return (
        <div>
            <Card className={classes.root} onClick={handleClick}>
                <CardHeader
                    title={props?.productTitle}
                />
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={4} readOnly />
                </Box>
                <CardMedia
                    className={classes.media}
                    image={`${URL}${props?.image} `}
                    title={props?.productTitle}
                />
                <CardContent>
                    <del>₹ 4883</del>
                    <Typography gutterBottom variant="h5" component="h2" >₹  4,699</Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>

                    <IconButton aria-label="add-to-cart">
                        <AddShoppingCartTwoToneIcon />
                    </IconButton>

                </CardActions>

            </Card>

        </div>
    )
}

export default CardRender
