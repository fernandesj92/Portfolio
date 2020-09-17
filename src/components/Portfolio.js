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
import project1 from '../images/react-mui.png'



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
                            <Typography gutterBottom variant="h5">
                                This Website
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               This was my first React with Material UI project. This project was done with the help of a video from Youtube.
                               The reason for making this website in React and MUI was to firstly get my hands dirty with React js and to also learn about Material UI.
                                As time passes I will continue to harness my skills in React and continue to improve this website.
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
              {/*}  <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 1" height="140" image={project1}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 1
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
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
                </Grid>*/}
            </Grid>
        </Box>
    )
}

export default Portfolio
