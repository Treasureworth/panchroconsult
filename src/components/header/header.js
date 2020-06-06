import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {openMobileMenu} from "../../utils/actions/index";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CancelIcon from '@material-ui/icons/Cancel';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import * as colors from '../../assets/color'

const useStyles = makeStyles({
    button1: {
      background: `linear-gradient(45deg, ${colors.mainPrimaryColor} 30%, ${colors.mainSecondaryColor} 90%)`,
      border: 0,
      borderRadius: 4,
      boxShadow: `0 3px 5px 2px ${colors.shadowColor}`,
      color: 'white',
      padding: '0.8rem 1.8rem',
      cursor: "pointer",
      border: `0.1em solid ${colors.mainPrimaryColor}`,
      fontWeight: 500,
      '&:hover': {
        background: `${colors.faintSecondaryColor}`,
        color: `${colors.mainPrimaryColor}`
      },
    },

    button2: {
        border: 0,
        borderRadius: 4,
        boxShadow: `0 3px 5px 2px ${colors.shadowColor}`,
        padding: '0.5rem 1.8rem',
        cursor: "pointer",
        border: `0.1em solid ${colors.mainPrimaryColor}`,
        background: `${colors.white}`, 
        color: `${colors.mainPrimaryColor}`,
        fontWeight: 500,
        '&:hover': {
          background: `${colors.faintSecondaryColor}`
        },
      },

    content: {
        // padding: '1.2em 0 1em 0',
        display: "flex",
        direction: "column",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        fontSize: "1.1em"
    },
    headerWrapper: {
    },
    quickContact: {
      background: colors.mainSecondaryColor,
      minHeight: '3em',
      padding: '.8em 0em',
      color: colors.white,
      fontSize: '1em',
      fontWeight: 500
    },
    mobileMenu: {
      position: "fixed",
      minWidth: "100vw",
      minHeight: "100vh",
      top: '0px',
      left: '0px',
      padding: '3rem 8rem 6rem 5rem',
      backgroundColor: `${colors.mainSecondaryColor}`,
      zIndex: 5000
    },
    mobileMenuItem: {
      margin: "2em 0px",
      fontSize: "1.1rem",
      color: "white",
      cursor: 'pointer'
    }
  });


const  HeaderContainer = (props, store) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {mobileMenuToggle} = useSelector(state => state.mobileMenuToggle)

    const menuToggleFunction = () => {
      dispatch(openMobileMenu());
    }

    return (
      <React.Fragment>
        <div className={classes.quickContact}>
            <Container>
              <div style={{display: 'flex'}}>

                <Grid item xs={8} md={10}>
                    <div id="home" style={{display: 'flex'}}>
                          <div>
                            +2348023888504
                          </div>
                          <Hidden mdDown>
                              <div style={{marginLeft: '1em'}}>
                                info@panchroconsult.com
                              </div>
                          </Hidden>
                          
                    </div>
                </Grid>

                <Grid item xs>
                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <LinkedInIcon/>
                  </div>
                </Grid>
            
              </div>
              
            </Container>
        </div>
        <div className={classes.headerWrapper}>
            <Container>
                <div style={{display: 'flex', minWidth: "100%", justifyContent: 'space-between'}}>

                    <div className={classes.content} 
                        style={{ minWidth: "70%", 
                                justifyContent: "space-between"}}>

                    
                            <div style={{display: 'flex', alignItems: "center"}}>
                                    <div>
                                      <a href="#">
                                         <img src="https://res.cloudinary.com/jewelworth/image/upload/v1591316466/panchroconsult/Panchroconsult-logo_mini_xdhixj.png" 
                                              style={{maxWidth: "7rem"}}/>
                                      </a>
                          
                                    </div>
                            </div>
                            
                            <div>
                            <Hidden mdDown>
                              <a href="/">
                                Home
                              </a>
                            </Hidden>
                            </div>
                            
                            <div>
                            <Hidden mdDown>
                              <a href="#about">
                                About Us
                              </a>
                            </Hidden>
                            </div>

                            <div>
                            <Hidden mdDown>
                                <a href="#service">
                                  Service
                                </a>
                            </Hidden>
                            </div>

                            <div>
                            <Hidden mdDown>
                                <a href="#service">
                                  Contact
                                </a>
                            </Hidden>
                            </div>

                            <div>
                            <Hidden mdDown>
                                    <a href="#projects">
                                    Projects
                                    </a>
                            </Hidden>
                            </div>

                            <div>
                            <Hidden mdDown>
                                <a href="#">
                                  Blog
                                </a>
                            </Hidden>
                            </div>
                    </div>
                    <div className={classes.content} 
                         style={{ minWidth: "20%", 
                                justifyContent: "space-between"}}>         
                       
                      <Hidden mdDown>

                            <div className={classes.button1}>
                            Subscribe for newsletters
                            </div>
                    </Hidden>

                  {
                    // Menu to display on the mobile device
                    mobileMenuToggle?
                    <Hidden mdUp>
                      <Grid item xs={12}>
                        <Paper className={classes.mobileMenu}>
                            <div>
                              <CancelIcon style={{color: "white", 
                                                  fontSize: "2rem",
                                                  float: "right",
                                                  marginTop: "-0.6em",
                                                  marginRight: "-3em" }}

                                            onClick={() => menuToggleFunction()}/>
                            </div>

                            
                            <div className={classes.mobileMenuItem}>
                                <a href="/">
                                  Home
                                </a>
                            </div>
                            
                            <div className={classes.mobileMenuItem}>
                                <a href="#about" onClick={() => menuToggleFunction()}>
                                  About Us
                                </a>
                            </div>

                            <div className={classes.mobileMenuItem}>
                                  <a href="#service" onClick={() => menuToggleFunction()}>
                                  Service
                                </a>
                            </div>

                            <div className={classes.mobileMenuItem}>
                                <a href="#contact" onClick={() => menuToggleFunction()}>
                                  Contact
                                </a>
                            </div>

                            <div className={classes.mobileMenuItem}>
                                <a href="#projects" onClick={() => menuToggleFunction()}>
                                  Projects
                                </a>
                            </div>

                            <div href="#" className={classes.mobileMenuItem}>
                                    Blog
                            </div>
                            <div className={classes.button1} style={{fontSize: "1.2rem", 
                                                                     padding: "0.9rem 1.8rem",
                                                                     justifyContent: "center",
                                                                     display: "flex",
                                                                     marginTop: '3em',
                                                                     boxShadow: `1px 1px 1px 1px ${colors.white}`,}}>
                                   Newsletters
                            </div>
                        </Paper>
                      </Grid>
                    </Hidden>:
                    ""
                  }
                 
                    <Hidden mdUp>
                            <MenuIcon style={{ fontSize: '2em', 
                                               float: "right", 
                                               margin: "auto",
                                              color: colors.mainPrimaryColor }}
                                      onClick={() => menuToggleFunction()}/>
                    </Hidden> 
                  </div>
                    
                </div>
            </Container>
        </div>
      </React.Fragment>
    );
  }

export default HeaderContainer;
