import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {openMobileMenu} from "../../utils/actions/index";
import * as colors from '../../assets/color'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {Animated} from "react-animated-css";

const useStyles = makeStyles({
    button1: {
      background: `linear-gradient(45deg, ${colors.mainPrimaryColor} 30%, ${colors.mainSecondaryColor} 90%)`,
      border: 0,
      borderRadius: 4,
      boxShadow: `0 3px 5px 2px ${colors.shadowColor}`,
      color: 'white',
      padding: '0.5rem 1.8rem',
      cursor: "pointer",
      border: `0.1em solid ${colors.mainPrimaryColor}`,
      fontWeight: 500,
      '&:hover': {
        background: `${colors.faintSecondaryColor}`,
        color: `${colors.mainPrimaryColor}`
      },
    },
    content: {
        padding: '1em 0 0.7em 0',
        display: "flex",
        direction: "column",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        fontSize: "1.1em"
    },
    headerWrapper: {
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100%'
    }, 
    slidder: {
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-end', 
    },
    searchWrapper: {
      minHeight: '4em',
      minWidth: '100%',
      borderRadius: '2px',
      marginTop: '3em'
    }
  });

const  SubHeaderContainer = (props, store) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {mobileMenuToggle} = useSelector(state => state.mobileMenuToggle)

    const menuToggleFunction = () => {
      dispatch(openMobileMenu());
    }

    return (
      <React.Fragment>
        <Container maxWidth="lg">
            <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>

            <Hidden mdDown>
              <Grid item xs={6} md>
                  <div className={classes.headerWrapper}>    
                 
                      <h1>
                      <span style={{color: colors.mainPrimaryColor, fontSize: '1.5em'}}>Multidisciplinary professional </span> outfit of Environmental Planners, Remote sensing technology and Development Analysts making the world habitable.
                      </h1> 
            
                  </div>
              </Grid>
            </Hidden>

            <Grid item xs={12} md direction="row">
              
                <div className={classes.slidder}>
                  <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDuration={3000} isVisible={true}>
                    <img src="https://res.cloudinary.com/jewelworth/image/upload/v1591312727/panchroconsult/panchro_guy_h2jk0d.png" style={{maxHeight: '45vh'}}/>
                  </Animated>
                </div>
            </Grid>

            </div>
        </Container>
        <Hidden mdUp>
                <Grid item xs={12}>
                    <div className={classes.headerWrapper} style={{backgroundColor: colors.backgroundColor, padding: '0em 1em'}}>  

                    <Animated animationIn="slideInUp" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                        <h1 style={{fontWeight: 400, 
                                    lineHeight: '2', 
                                    fontSize: '1.3em',
                                    marginTop: '1.5em'}}>
                        <span style={{color: colors.mainPrimaryColor, fontSize: '1em'}}>Multidisciplinary professional </span> outfit of Environmental Planners, Remote sensing technology and Development Analysts making the world habitable.
                        </h1> 
                    </Animated>                 
                    </div>
                </Grid>
        </Hidden>
      </React.Fragment>
    );
  }

export default SubHeaderContainer;
