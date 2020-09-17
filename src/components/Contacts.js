import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import NavBar from "./Navbar"


const useStyles = makeStyles((theme)=>({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    button:{
        marginTop:"1rem",
        color:"tomato",
        borderColor:"tomato"
    }
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan"
            },
            "& .Mui-focused fieldset": {
                borderColor: "tan"
            },
        },
    },
})(TextField);

const Contacts = () => {
    const classes = useStyles()
    return (

        <Box component="div" style={{background:"#233",height:"100vh"}}>
            <NavBar />
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color:"tomato",textAlign:"center",textTransform:"uppercase"}}>
                        Contact Me
                    </Typography>
                    <InputField fullWidth={true} label="Name" variant="outlined" margin="dense" size="medium" inputProps={{ style: { color: "white" } }} /><br />
                    <InputField fullWidth={true} label="Email" variant="outlined" margin="dense" size="medium" inputProps={{ style: { color: "white" } }} /><br />
                    <InputField fullWidth={true} label="Company Name" variant="outlined" margin="dense" size="medium" inputProps={{ style: { color: "white" } }} /><br />
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>CONTACT ME</Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
