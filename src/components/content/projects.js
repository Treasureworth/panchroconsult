import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {openMobileMenu} from "../../../panchroconsult/src/utils/actions/index";
import * as colors from '../../assets/color'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles({
    content: {
        padding: '1em 0 0.7em 0'
    },
    paper: {
      textAlign: 'center'
    },
    button2: {
      border: 0,
      borderRadius: 4,
      boxShadow: `0 1px 1px 2px ${colors.shadowColor}`,
      padding: '1rem 1.8rem',
      cursor: "pointer",
      border: `1px solid ${colors.mainPrimaryColor}`,
      background: `${colors.faintSecondaryColor}`, 
      color: `${colors.mainPrimaryColor}`,
      fontWeight: 500,
      '&:hover': {
        background: `${colors.mainPrimaryColor}`,
        color: colors.white
      },
    },
    img: {
      marginBottom: '0.6em', 
      borderRadius: '5px 5px 0 0'
    }
  });

const  Projects = (props, store) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {mobileMenuToggle} = useSelector(state => state.mobileMenuToggle)

    const menuToggleFunction = () => {
      dispatch(openMobileMenu());
    }

    return (
      <React.Fragment>
        <div className={classes.content}>
            <Container maxWidth="lg">
               <h1 style={{marginBottom: '1.2em', textAlign: 'center'}}>
                 succesful <span style={{color: colors.mainPrimaryColor, fontSize: '1.4em'}}>
                 projects</span>
               </h1>
                <Grid container spacing={4}>
                  
                <Grid item xs={12} sm={3}>
                        <ScrollAnimation animateIn='fadeIn'>
                        <Paper className={classes.paper}>
                                        <div style={{backgroundColor: colors.mainPrimaryColor,
                                                    width: '4.5em',
                                                    height: '4.5em'}}>
                                            <span style={{color: colors.backgroungFaint,
                                                        fontSize: '4em',
                                                        fontWeight: 600}}>
                                                1
                                            </span>
                                        </div>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <span style={{padding: '0em 1em', 
                                                    color: colors.mainPrimaryColor,
                                                    fontSize: '1.1em',
                                                    fontWeight: 500,
                                                    marginTop: 5}}>
                                        Environmental Impact Assessment
                                        </span>
                                        <span style={{padding: '0em 1em 1em 1em', textAlign: 'left'}}>
                                        <p>
                                        <strong>Client:</strong> <br/>Niger state government
                                        </p>
                                        <p>
                                        <strong>Description:</strong> <br/>
                                        Environmental impact of the proposed Madalla modern market, Madalla
                                        </p>
                                        
                                        </span>
                                    </div>
                                    
                                </Paper>
                        </ScrollAnimation>
                      
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <ScrollAnimation animateIn='fadeIn'>
                            <Paper className={classes.paper}>
                                        <div style={{backgroundColor: colors.mainPrimaryColor,
                                                    width: '4.5em',
                                                    height: '4.5em'}}>
                                            <span style={{color: colors.backgroungFaint,
                                                        fontSize: '4em',
                                                        fontWeight: 600}}>
                                                2
                                            </span>
                                        </div>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <span style={{padding: '0em 1em', 
                                                    color: colors.mainPrimaryColor,
                                                    fontSize: '1.1em',
                                                    fontWeight: 500,
                                                    marginTop: 5}}>
                                        Property Survey for solid waste management
                                        </span>
                                        <span style={{padding: '0em 1em 1em 1em', textAlign: 'left'}}>
                                        <p>
                                        <strong>Client:</strong> <br/>Abuja Environmental Protection Agency, Abuja.
                                        </p>
                                        <p>
                                        <strong>Description:</strong> <br/>
                                        The project carried out a base line survey of properties
                                        </p>
                                        
                                        </span>
                                    </div>
                                    
                                </Paper>
                        </ScrollAnimation>
                        
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <ScrollAnimation animateIn='fadeIn'>
                                    <Paper className={classes.paper}>
                                                <div style={{backgroundColor: colors.mainPrimaryColor,
                                                            width: '4.5em',
                                                            height: '4.5em'}}>
                                                    <span style={{color: colors.backgroungFaint,
                                                                fontSize: '4em',
                                                                fontWeight: 600}}>
                                                        3
                                                    </span>
                                                </div>

                                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                                <span style={{padding: '0em 1em', 
                                                            color: colors.mainPrimaryColor,
                                                            fontSize: '1.1em',
                                                            fontWeight: 500,
                                                            marginTop: 5}}>
                                                Preliminary assessment of New Kebbi 
        Airport site
                                                </span>
                                                <span style={{padding: '0em 1em 1em 1em', textAlign: 'left'}}>
                                                <p>
                                                <strong>Client:</strong> <br/>Kebbi state government.
                                                </p>
                                                <p>
                                                <strong>Description:</strong> <br/>
                                                Preliminary assessment of the terrain and mapping of the communities around the proposed 
        airport site.
                                                </p>
                                                
                                                </span>
                                            </div>
                                            
                                        </Paper>
                            </ScrollAnimation>
                           
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <ScrollAnimation animateIn='fadeIn'>
                            <Paper className={classes.paper}>
                                            <div style={{backgroundColor: colors.mainPrimaryColor,
                                                        width: '4.5em',
                                                        height: '4.5em'}}>
                                                <span style={{color: colors.backgroungFaint,
                                                            fontSize: '4em',
                                                            fontWeight: 600}}>
                                                    4
                                                </span>
                                            </div>

                                        <div style={{display: 'flex', flexDirection: 'column'}}>
                                            <span style={{padding: '0em 1em', 
                                                        color: colors.mainPrimaryColor,
                                                        fontSize: '1.1em',
                                                        fontWeight: 500,
                                                        marginTop: 5}}>
                                        Environmental Impact Assessment
    Airport site
                                            </span>
                                            <span style={{padding: '0em 1em 1em 1em', textAlign: 'left'}}>
                                            <p>
                                            <strong>Client:</strong> <br/>Dodo project consultants.
                                            </p>
                                            <p>
                                            <strong>Description:</strong> <br/>
                                            Environmental impact assessment of the Proposed IBB University on the immediate environment.
                                            </p>
                                            
                                            </span>
                                        </div>
                                        
                                    </Paper>
                        </ScrollAnimation>
                            
                            </Grid>

                </Grid>

                <span>
                    <h1 style={{marginBottom: '1.5em', textAlign: 'center', marginTop: '3em'}}>
                    we are <span style={{color: colors.mainPrimaryColor, fontSize: '1.4em'}}>
                    certified</span> by
                    </h1>
                </span>

                <Grid container spacing={4}>
                  
                    <Grid item xs={4} sm={2}>
                        <img src="https://res.cloudinary.com/jewelworth/image/upload/v1591384832/panchroconsult/bureau-of-public-procurement-07vILn4xZaDo5ywWcP7Hmr3FkkgT9eqWOFcMfYTT_s2su0v.jpg"
                              width="80px"/>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <img src="https://res.cloudinary.com/jewelworth/image/upload/v1591384637/panchroconsult/ITF_logo_pgdoov.png"
                                width="80px"/>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <img src="https://res.cloudinary.com/jewelworth/image/upload/v1591384636/panchroconsult/cac_logo_mozh6c.jpg"
                        width="80px"/>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <img src="https://res.cloudinary.com/jewelworth/image/upload/v1591384636/panchroconsult/FIRS_zzcpyn.jpg"
                        width="80px"/>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <img src="https://res.cloudinary.com/jewelworth/image/upload/v1591384636/panchroconsult/NSITF_svbbeo.png"
                        width="80px"/>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <img src="https://res.cloudinary.com/jewelworth/image/upload/v1591384635/panchroconsult/LAP_dpyzzh.png"
                        width="80px"/>
                    </Grid>

                </Grid>
                
            </Container>   
        </div>
      </React.Fragment>
    );
  }

export default Projects;
