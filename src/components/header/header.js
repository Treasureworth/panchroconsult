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
        padding: '1.2em 0 1em 0',
        display: "flex",
        direction: "column",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        fontSize: "1.1em"
    },
    headerWrapper: {
       
    },
    mobileMenu: {
      position: "fixed",
      minWidth: "100vw",
      minHeight: "100vh",
      top: '0px',
      left: '0px',
      padding: '3rem 8rem 6rem 5rem',
      backgroundColor: `${colors.mainSecondaryColor}`
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
        <div className={classes.headerWrapper}>
            <Container>
                <div style={{display: 'flex', minWidth: "100%", justifyContent: 'space-between'}}>

                    <div className={classes.content} 
                        style={{ minWidth: "70%", 
                                justifyContent: "space-between"}}>

                    
                            <div style={{display: 'flex', alignItems: "center"}}>
                                    <div>
                                        <img src="../Skye-taxis-mini.png" style={{maxWidth: "4.2rem", marginRight: "0.5rem"}}/>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <h1 style={{color: `${colors.mainSecondaryColor}`}}>Skye</h1>
                                        <h1 style={{color: `${colors.mainPrimaryColor}`}}>Taxis</h1>
                                </div>
                            </div>
                            
                            <div>
                            <Hidden mdDown>
                                    Home
                            </Hidden>
                            </div>
                            
                            <div>
                            <Hidden mdDown>
                                    About Us
                            </Hidden>
                            </div>

                            <div>
                            <Hidden mdDown>
                                    Contact
                            </Hidden>
                            </div>

                            <div>
                            <Hidden mdDown>
                                    Portfolio
                            </Hidden>
                            </div>

                            <div>
                            <Hidden mdDown>
                                    Projects
                            </Hidden>
                            </div>

                            <div>
                            <Hidden mdDown>
                                    Blog
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
                                    Home
                            </div>
                            
                            <div className={classes.mobileMenuItem}>
                                    About Us
                            </div>

                            <div className={classes.mobileMenuItem}>
                                    Contact
                            </div>

                            <div className={classes.mobileMenuItem}>
                                    Portfolio
                            </div>

                            <div className={classes.mobileMenuItem}>
                                    Projects
                            </div>

                            <div className={classes.mobileMenuItem}>
                                    Blog
                            </div>
                            <div className={classes.button1} style={{fontSize: "1.2rem", 
                                                                     padding: "0.9rem 1.8rem",
                                                                     justifyContent: "center",
                                                                     display: "flex",
                                                                     marginTop: '3em'}}>
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
