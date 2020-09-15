import React from 'react'
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Navbar from './Navbar'
import project1 from '../images/html-css-javascript-lg.jpg'



const useStyles=makeStyles({
   mainContainer:{
       background:"#233",
   height:"100%" 
},
cardContainer:{
    maxWidth:345,
    margin:"3rem",

}
})


const Portfolio = () => {
    const classes=useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                {/* First Project */}
                <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 1" height="140" image={project1}/>
                        <CardContent>
                            <Typography gutterBottom varient="h5">
                                Project 1
                            </Typography>
                            <Typography varient="body2" color="textSecondary" component="p">
                                Project Details
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Demo
                            </Button>
                        </CardActions>
                     
                </Card>
                </Grid>

                {/* Second Project */}
                <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 1" height="140" image={project1}/>
                        <CardContent>
                            <Typography gutterBottom varient="h5">
                                Project 1
                            </Typography>
                            <Typography varient="body2" color="textSecondary" component="p">
                                Project Details
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Demo
                            </Button>
                        </CardActions>
                     
                </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
