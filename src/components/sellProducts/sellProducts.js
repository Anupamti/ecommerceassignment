import { Backdrop, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { createUser } from '../../Redux/action/userData';
import { useHistory } from 'react-router';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
    Container: {
        marginTop: '30px'
    },
    upload: {
        color: 'white',
        background: 'black'
    },
    input: {
        display: 'none',
    },
    camera: {
        marginLeft: '10px'
    },
    button: {
        width: '400px',
        color: 'white',
        background: 'black'
    },
    submit: {
        color: 'white',
        background: 'black',
        marginBottom: '40px'
    },
    variation: {
        marginLeft: '10px',
        marginTop: '10px'
    }
}));
function SellProducts() {
    const [opendailog, setopendailog] = useState(false)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handelDrwaer = () => {
        setopendailog(!opendailog)
    }

    const [productTitle, setproductTitle] = useState()
    const [image, setimage] = useState()
    const [variationOne, setvariationOne] = useState()
    const [variationTwo, setvariationTwo] = useState()
    const [variationThree, setvariationThree] = useState()
    const [meta, setmeta] = useState()
    const [seodescription, setseodescription] = useState()

    const [form, setForm] = useState();

    const history = useHistory();
    useEffect(() => {
        if (!form) {

        }
        else {
            dispatch(createUser(form))
            setOpen(true);
            setEditorBody("");
            setimage("");
            setmeta("");
            setproductTitle("");
            setseodescription("");

        }
    }, [form])

    useEffect(() => {
        SetModule();
    }, [])

    const [editorBody, setEditorBody] = useState("");
    const [toolbar, setToolBar] = useState();
    const [format, setFormat] = useState();

    const handleEditorChange = (e) => {
        setEditorBody(e)
    }

    const handelSubmit = () => {
        const data = new FormData()
        data.append('productTitle', productTitle);
        data.append('description', editorBody);
        data.append('seoTitle', meta);
        data.append('image', image);
        data.append('seoDesc', seodescription);

        setForm(data)
    }

    const SetModule = () => {

        const Toolbar = {
            toolbar: [
                [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image", "video"],
                ["clean"],
                ["code-block"],
            ],

        };

        const Formats = [
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "link",
            "image",
            "video",
            "code-block",
        ];

        setToolBar(Toolbar);
        setFormat(Formats)
    }


    return (
        <div>
            <Container className={classes.Container}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Typography variant="button" display="block" gutterBottom>
                        Product Title
                    </Typography>

                    <TextField id="outlined-basic" label=" Enter Title Here" onChange={(e) => setproductTitle(e.target.value)} variant="outlined" />

                    <Typography variant="button" display="block" gutterBottom>
                        Product Description
                    </Typography>

                    <Box>
                        <ReactQuill
                            modules={toolbar}
                            formats={format}
                            onChange={handleEditorChange}
                            value={editorBody}

                        />
                    </Box>

                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={(e) => setimage(e.target.files[0])}
                    />
                    <Typography variant="button" display="block" gutterBottom>
                        Upload Media
                    </Typography>
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" className={classes.upload} component="span">
                            Upload
                            <PhotoCamera className={classes.camera} />
                        </Button>
                    </label>
                    <Typography variant="button" display="block" gutterBottom>
                        Product Variant
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        This product has multiple options , like different sizes or colors
                    </Typography>
                    <Button variant="contained" onClick={handelDrwaer} className={classes.upload} component="span" >Add Variant Option</Button>

                    <Typography variant="button" display="block" gutterBottom>
                        SEO Meta Details
                    </Typography>

                    <TextField onChange={(e) => setmeta(e.target.value)} id="outlined-basic" label="SEO Title" variant="outlined" />
                    <TextField id="outlined-basic" onChange={(e) => setseodescription(e.target.value)} label="SEO Description" variant="outlined" />

                    <Button variant="contained" onClick={handelSubmit} className={classes.submit} component="span">
                        Submit
                    </Button>

                </form>
                <Dialog
                    fullWidth={true}
                    maxWidth={'md'}
                    open={opendailog}
                    aria-labelledby="max-width-dialog-title"
                >
                    <DialogTitle id="max-width-dialog-title">Add Variation</DialogTitle>
                    <DialogContent>

                        <form className={classes.form} noValidate>
                            <TextField className={classes.variation} onChange={(e) => setvariationOne(e.target.value)} id="outlined-basic" label=" Variation Type" autoComplete="off" variant="outlined" />
                            <TextField className={classes.variation} onChange={(e) => setvariationTwo(e.target.value)} id="outlined-basic" label=" Variation Type" autoComplete="off" variant="outlined" />
                            <TextField className={classes.variation} onChange={(e) => setvariationThree(e.target.value)} id="outlined-basic" label=" Variation Type" autoComplete="off" variant="outlined" />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handelDrwaer} color="primary">
                            Done
                        </Button>
                    </DialogActions>
                </Dialog>

            </Container>
            <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Product Added Successfully
                </Alert>
            </Snackbar>
        </div>
    )
}

export default SellProducts
