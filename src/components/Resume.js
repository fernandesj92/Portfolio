import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Box } from "@material-ui/core"
import Navbar from "./Navbar"


const useStyles= makeStyles(theme=>({
    mainContainer:{
        background:"#233"
    },
    timeLine:{
        position:"relative",
        padding:"1rem",
        margin:"0 auto",
        "&:before":{
            content:"''",
            position:"absolute",
            height:"100%",
            border:"1px solid tan",
            right:"40px",
            top:0
        },
        "&:after":{
            content:"''",
            display:"table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            "&:before":{
                left:"calc(50% - 1px)",
               right:"auto" 
            }
        }
    },
    timeLineItem:{
        padding:"1rem",
        borderBottom:"2px solid tan",
        position:"relative",
        margin:"1rem 3rem 1rem 1rem",
        clear:"both",
        "&:after":{
            content:"''",
            position:"absolute",
        },
        "&:before":{
            content:"''",
            position:"absolute",
            right:"-0.625rem",
            top:"calc(50% - 5px)",
            borderStyle:"solid",
            borderColor:"tomato tomato transparent transparent",
            borderWidth:"0.625rem",
            transform:"rotate(45deg)"
        },
        [theme.breakpoints.up("md")]:{
            width:"44%",
            margin:"1rem",
            "&:nth-of-type(2n)":{
                float:"right",
                margin:"1rem",
                borderColor:"tan"
            },
            "&:nth-of-type(2n):before":{
                right:"auto",
                left:"-0.625rem",
                borderColor:"transparent transparent tomato tomato "
            }
        }
    },

    timeLineYear:{
        textAlign:"center",
        maxWidth:"9.375rem",
        margin:"0 3rem 0 auto",
        fontSize:"1.8rem",
        background:"tomato",
        color:"white",
        lineHeight:1,
        padding:"0.5rem 0 1rem",
        "&:before":{
            display:"none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before":{
               display:"none" 
            }
        }
    },
    heading:{
        color:"tomato",
        padding:"3rem 0",
        textTransform:"uppercase"
    },
    subHeading:{
        color:"white",
        padding:"0",
        textTransform:"upperCase"
    }
}));

const Resume = () => {
    const classes=useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Work Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    {/**NIC */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2019</Typography>
                
                <Box component="div" className={classes.timeLineItem}>
                 <Typography variant="h5" align="center" className={classes.subHeading}>
                 Sr. Software Programmer
                 </Typography>
                   <Typography variant="body1" align="center" style={{color:"tomato"}}>
                       National Informatics Center <small>(Apr 2018 - Present)</small>
                   </Typography>
                   <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                       As a Sr. Programmer, I was a lead in introducing the Blockchain Technology. We developed various POCs such as NGDRS document management, 
                       Land Record document management and Generating and Storing Excise Transport Permits. We used Hperledger Fabric not only to create these DAPPS but also established 
                       a entire Hyperledger Fabric Blockchain networks connecting Peers on a vast geographical area between Goa, Bangalore and Pune. Fabric SDK was used with Node js to achieve this feat.
                   </Typography>
                </Box>

                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2018</Typography>
                
                <Box component="div" className={classes.timeLineItem}>
                 <Typography variant="h5" align="center" className={classes.subHeading}>
                 Software Developer
                 </Typography>
                   <Typography variant="body1" align="center" style={{color:"tomato"}}>
                       National Informatics Center <small>(July 2018 - Apr 2019)</small>
                   </Typography>
                   <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                       As a Software Developer at NIC I developed various modules for the Excise Department.
                        These modules helped connect the Liquour Manufacturers, Wholesellers and  Dealers to the Excise Officials.
                        The tech stack used was mainly c# with vanila javascript and css.

                   </Typography>
                </Box>

                   {/**GEL */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2016</Typography>
                <Box component="div" className={classes.timeLineItem}>
                 <Typography variant="h5" align="center" className={classes.subHeading}>
                    Trainee Software Engineer
                 </Typography>
                   <Typography variant="body1" align="center" style={{color:"tomato"}}>
                       Goa Electronics Ltd. <small>(Oct 2016 - Oct 2017)</small>
                   </Typography>
                   <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                       My role as a Trainee Software Engineer was to design and develope Web Applications as per the requirements stated in the SRS.
                       For the Backend we used Apache Wicket Framework with POstgreSql and as for the Frontend, Bootstrap and Jquery was used.
                   </Typography>
                </Box>
                
                {/**VSSS */}
                <Box component="div" className={classes.timeLineItem}>
                 <Typography variant="h5" align="center" className={classes.subHeading}>
                    Software Developer
                 </Typography>
                   <Typography variant="body1" align="center" style={{color:"tomato"}}>
                      Vibrant Skill Set Solutions <small>(Apr 2016 - Aug 2017)</small>
                   </Typography>
                   <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                      This was my first job as a professional. As a Software Developer in a start up company, my job was to gather software requirements and work closely the clients. We had developed a Web Application that connected to a biometric device over the network.
                      The web application was developed using Php, MySql, and Jquery. and to connect to the biometric device c# was used.
                   </Typography>

                </Box>
                </Box>
            </Box>
        </>
    )
}

export default Resume
