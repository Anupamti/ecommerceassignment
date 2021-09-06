import { Box, Button, Container, Divider, IconButton, ListItem, SwipeableDrawer, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDToCart, GetCart } from '../../Redux/action/cart';
import { ButtonContainer, Image, OfferData, Price, ProductContainer, ProductData, ProductDetails, ProductImage, ProductPrice, ProductTitle, Variation, VariationContainer, VariationImage, VariationName } from './productStyles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CartCard from '../cart/cartCard';
import { makeStyles } from '@material-ui/core/styles';

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
function ProductPage() {
    const classes = useStyles();
    const [selectedProduct, setSelectedProduct] = useState();
    const [URL] = useState('https://ecommerceanupamsassignment.herokuapp.com/');
    const { userData } = useSelector(state => state.userDetails.data)
    const id = useSelector(state => state.userDetails.id)

    const dispatch = useDispatch()

    const [datas, SetData] = useState()
    const state = useSelector(state => state.cartData.cart)
    const [toggle, setToggle] = useState()

    const [clicked, setClicked] = useState(false)


    useEffect(() => {
        dispatch(GetCart())
        setData()
    }, [clicked])


    const setData = () => {
        SetData(state?.userData)
    }

    useEffect(() => {
        console.log(id)
        if (userData) {
            if (id) {
                userData.filter((data => data._id == id))
                    .map((data) => (
                        setSelectedProduct(data)
                    ))
            }
        }
    }, [userData, id])

    const handleAddToCart = () => {
        dispatch(ADDToCart(selectedProduct))
        setClicked(!clicked)
        setToggle(true)

    }


    const toggleDrawer = () => {
        setToggle(false)
    }

    return (
        <div style={{ backgroundColor: '#f0f2f1', height: 'fit-content' }}  >
            {
                selectedProduct ? (<>

                    <Container >
                        <ProductContainer>
                            <Image src={`${URL}${selectedProduct?.image}`} />

                            <ProductData>
                                <OfferData>
                                    Limited Stock
                                </OfferData>
                                <ProductTitle>
                                    {selectedProduct?.productTitle}
                                </ProductTitle>
                                <ProductPrice>
                                    <del> ₹  7783</del> <Price>  ₹  3434</Price>
                                </ProductPrice>

                                <ProductDetails>
                                    {selectedProduct?.description}
                                </ProductDetails>

                                <VariationContainer>

                                    <Variation>
                                        <VariationImage src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa454069-1f38-4db1-a9e3-75d6b00c42e8/deo9l7n-5dffc348-4abd-42fa-bbae-e7a8e1cc23a8.png/v1/fill/w_1280,h_650,strp/tva_time_collar_from_loki_png_by_akithefullxd_deo9l7n-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUwIiwicGF0aCI6IlwvZlwvYWE0NTQwNjktMWYzOC00ZGIxLWE5ZTMtNzVkNmIwMGM0MmU4XC9kZW85bDduLTVkZmZjMzQ4LTRhYmQtNDJmYS1iYmFlLWU3YThlMWNjMjNhOC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1WBhhSLI86S7CmhWPR61z9tqC4nO1cZpBeT1IkWxUDg" />
                                        <VariationName>Matte Black</VariationName>
                                    </Variation>

                                    <Variation>
                                        <VariationImage src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa454069-1f38-4db1-a9e3-75d6b00c42e8/deo9l7n-5dffc348-4abd-42fa-bbae-e7a8e1cc23a8.png/v1/fill/w_1280,h_650,strp/tva_time_collar_from_loki_png_by_akithefullxd_deo9l7n-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUwIiwicGF0aCI6IlwvZlwvYWE0NTQwNjktMWYzOC00ZGIxLWE5ZTMtNzVkNmIwMGM0MmU4XC9kZW85bDduLTVkZmZjMzQ4LTRhYmQtNDJmYS1iYmFlLWU3YThlMWNjMjNhOC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1WBhhSLI86S7CmhWPR61z9tqC4nO1cZpBeT1IkWxUDg" />
                                        <VariationName>Matte Black</VariationName>
                                    </Variation>


                                    <Variation>
                                        <VariationImage src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa454069-1f38-4db1-a9e3-75d6b00c42e8/deo9l7n-5dffc348-4abd-42fa-bbae-e7a8e1cc23a8.png/v1/fill/w_1280,h_650,strp/tva_time_collar_from_loki_png_by_akithefullxd_deo9l7n-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUwIiwicGF0aCI6IlwvZlwvYWE0NTQwNjktMWYzOC00ZGIxLWE5ZTMtNzVkNmIwMGM0MmU4XC9kZW85bDduLTVkZmZjMzQ4LTRhYmQtNDJmYS1iYmFlLWU3YThlMWNjMjNhOC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1WBhhSLI86S7CmhWPR61z9tqC4nO1cZpBeT1IkWxUDg" />
                                        <VariationName>Matte Black</VariationName>
                                    </Variation>
                                </VariationContainer>
                                <ButtonContainer>
                                    <Button style={{ margin: '10px ', width: '100%', color: 'black' }} variant="outlined" onClick={handleAddToCart} color='primary'>ADD TO CART</Button>

                                    <Button style={{ margin: '10px ', width: '100%', color: 'white', backgroundColor: 'black' }} variant="contained" >BUY IT NOW</Button>
                                </ButtonContainer>
                            </ProductData>
                        </ProductContainer>
                    </Container>
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
                </>) : (<> </>)
            }
        </div>
    )
}

export default ProductPage
