import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/styles'

const useStyles=makeStyles({
  particlesCanvas:{
    position:"absolute",
    opacity:"0.3"
  }
})

const Index = () => {
  const classes=useStyles();
    return (
        <>
        <Navbar/>
          <Header/>
          <Particles
          canvasClassName={classes.particlesCanvas}
          params={{
            particles:{
              number:{
                value:45,
                density:{
                  enable:true,
                  value_area:900
                }
              },
              shape:{
                type:["circle"],
                stroke:{
                  width:0,
                  color:"tomato"
                }
              },
              size:{
                value:8,
                random:true,
                anim:{
                  enable:true,
                  speed:5,
                  size_min:0.1,
                  sync:false
                }
              },
              opacity:{
                value:0.5,
                random:true,
                anim:{
                  enable:true,
                  speed:1,
                  opacity_min:0.1
               }
              }
            }
          }}
          
            />
          
        </>
    )
}

export default Index
