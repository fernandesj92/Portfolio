import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Typography,Avatar,Grid,Box} from "@material-ui/core"
import Typed from "react-typed"
import avatar from "../images/avatar-jon.png"

//CSS Styles
const useStyles=makeStyles(theme=>({
    avatar:{
        width:theme.spacing(25),
        height:theme.spacing(25),
        margin:theme.spacing(1)
    },
    title:{
        color:"tomato"
    },
    subTitle:{
        color:"tan",
        marginBottom:"3rem"
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:"1"
    }
}))

const Header = () => {
  const classes=useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Jonathan Fernandes" />
            </Grid>
          
           <Typography className={classes.title}  variant="h3">
<Typed strings ={["Jonathan Fernandes"]} typeSpeed={40}/>
           </Typography>
           <Typography className={classes.subTitle} variant="h4">
<Typed strings ={["Blockchain","Software Developer","Tech Enthusiast"]} typeSpeed={40} backSpeed={60} loop/>
           </Typography>
        </Box>
    )
}

export default Header