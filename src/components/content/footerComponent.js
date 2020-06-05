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
      minHeight: '10vh',
      padding: '.8em 0em',
      color: colors.white,
      fontSize: '1em',
      fontWeight: 500,
      marginTop: '1.5em'
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
      margin: "0.3em 0px",
      color: "white",
      cursor: 'pointer'
    }
  });


const  FooterContainer = (props, store) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {mobileMenuToggle} = useSelector(state => state.mobileMenuToggle)

    const menuToggleFunction = () => {
      dispatch(openMobileMenu());
    }
    const currentYear = new Date().getFullYear(); 
    return (
      <React.Fragment>
        <div className={classes.quickContact}>
            <Container>
              <div style={{display: 'flex', paddingBottom: 10}}>
                    <Grid container spacing={5}>

                    <Grid item xs={6} md={4}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                          <div className={classes.mobileMenuItem} style={{fontSize: '1.2em'}}>
                            Company
                          </div>

                          <div className={classes.mobileMenuItem}>
                                    Home
                            </div>
                            
                            <div className={classes.mobileMenuItem}>
                                    About Us
                            </div>

                            <div className={classes.mobileMenuItem}>
                                    Service
                            </div>

                            <div className={classes.mobileMenuItem}>
                                    Contact
                            </div>

                            <div className={classes.mobileMenuItem}>
                                    Projects
                            </div>

                            <div className={classes.mobileMenuItem}>
                                    Blog
                            </div>
                    </div>
                </Grid>

                <Grid item xs={6} md={2}>
                  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>

                  <div className={classes.mobileMenuItem} style={{fontSize: '1.2em'}}>
                            Follow us
                  </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 5}}>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <LinkedInIcon/>
                </div>
                </div>
                </Grid>

                </Grid> 

              </div>
                <Grid item xs={12} md={6}>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                   <div className={classes.mobileMenuItem} style={{fontSize: '1.2em'}}>
                   &copy; {currentYear} Panchro Consult Ltd. All rights reserved. 
                  </div>
                    </a>
                </Grid>

            </Container>
        </div>
      </React.Fragment>
    );
  }

export default FooterContainer;
