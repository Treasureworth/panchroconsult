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

const  Services = (props, store) => {
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
                 More about <span style={{color: colors.mainPrimaryColor, fontSize: '1.4em'}}>
                 what we offer</span>
               </h1>
                <Grid container spacing={4}>
                  
                
                <Grid item xs={12} sm={4}>
                    <ScrollAnimation animateIn='fadeIn'>
                      <Paper className={classes.paper}>
                                <img src="https://res.cloudinary.com/jewelworth/image/upload/v1591360727/panchroconsult/shutterstock_401470402_kplk7c.jpg"
                                      width="100%" height="250px" className={classes.img}/>

                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                  <span style={{padding: '0em 1em', 
                                                color: colors.mainPrimaryColor,
                                                fontSize: '1.1em',
                                                fontWeight: 500}}>
                                    Development Analysis and Project Management.
                                  </span>
                                  <span style={{padding: '0em 1em 1em 1em', textAlign: 'left'}}>
                                    <p>
                                    Project management.
                                    </p>
                                    <p>
                                    Feasibility Studies to determine the appropriateness, 
                                    profitability, etc of proposed developments.
                                    </p>
                                    <p>
                                    Preparing, revising and developing planning and design 
                                    guidelines.
                                    </p>
                                  </span>
                                  {/* <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <a className={classes.button2} style={{width: '90%', marginBottom: '1em'}}>
                                      Read more
                                    </a>
                                  </div> */}
                                </div>
                                
                          </Paper>
                    </ScrollAnimation>
          
                </Grid>
  

                    <Grid item xs={12} sm={4}>
                        <ScrollAnimation animateIn='fadeIn'>
                          <Paper className={classes.paper}>
                              <img src="https://res.cloudinary.com/jewelworth/image/upload/v1591360713/panchroconsult/shutterstock_59937847-_Converted_f1xycw.jpg"
                                    width="100%" height="250px" className={classes.img}/>

                              <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span style={{padding: '0em 1em', 
                                              color: colors.mainPrimaryColor,
                                              fontSize: '1.1em',
                                              fontWeight: 500}}>
                                  Geographic Iinformation System and Remote sensing Services.
                                </span>
                                <span style={{padding: '0em 1em 1em 1em', textAlign: 'left'}}>
                                  <p>
                                  Supply and Analysis of Remotely Sensed Data.
                                  </p>
                                  <p>
                                  Implementing Functional GIS/Remote Sensing Units.
                                  </p>
                                  <p>
                                  Mapping Services.
                                  </p>
                                  <p>
                                  Training.
                                  </p>
                                </span>
                              </div>
                              
                          </Paper>
                        </ScrollAnimation>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                    <ScrollAnimation animateIn='fadeIn'>
                        <Paper className={classes.paper}>
                            <img src="https://res.cloudinary.com/jewelworth/image/upload/v1591365706/panchroconsult/planning_g3hd6b.jpg"
                                  width="100%" height="250px" className={classes.img}/>

                            <div style={{display: 'flex', flexDirection: 'column'}}>
                              <span style={{padding: '0em 1em', 
                                            color: colors.mainPrimaryColor,
                                            fontSize: '1.1em',
                                            fontWeight: 500}}>
                                Preparation of Campus and Town Master Plans.
                              </span>
                              <span style={{padding: '0em 1em 1em 1em', textAlign: 'left'}}>
                                 <p>
                                  Environmental and Social Impact Studies.
                                 </p>
                                 <p>
                                 Institutional/Campus Planning.
                                 </p>
                                 <p>
                                  Preparation of Academic Briefs and environmental Audit.
                                 </p>
                                 <p>
                                 Industrial Area Planning.
                                 </p>
                                 <p>
                                 Tourism and Recreational Planning.
                                 </p>
                                 <p>
                                  Site Development Plans.
                                 </p>
                              </span>
                             
                            </div>
                            
                        </Paper>
                        </ScrollAnimation>
                    </Grid>

                </Grid>
            </Container>   
        </div>
      </React.Fragment>
    );
  }

export default Services;
