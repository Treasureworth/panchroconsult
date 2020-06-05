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
import MyLocationIcon from '@material-ui/icons/MyLocation';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';


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

const  ContactUs = (props, store) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {mobileMenuToggle} = useSelector(state => state.mobileMenuToggle)

    const menuToggleFunction = () => {
      dispatch(openMobileMenu());
    }

    const center = {
        lat:  9.62,
        lng: 6.53
      };

    const zoom = 13;

    return (
      <React.Fragment>
        <div className={classes.content}>
            <Container maxWidth="lg">
               <h1 style={{marginBottom: '1.2em', textAlign: 'center', marginTop: '1em'}}>
                 Here's <span style={{color: colors.mainPrimaryColor, fontSize: '1.4em'}}>
                 our contact</span>
               </h1>
                <Grid container spacing={4}>
                  
                    <Grid item xs={12} sm={6}>
                        <div style={{lineHeight: '2.2em', marginBottom: '3em', display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex'}}>
                                <span style={{paddingTop: 7, marginRight: 10}}>
                                <MyLocationIcon style={{color: colors.mainPrimaryColor, fontSize: '1.4em'}}/>
                                </span> 
                                <span>
                                    Suit 6 IICO Shopping Complex, Opposite Niger State 
                                    Supply Company, <br/>
                                    Mu'azu Muhammad Road, Minna, <br/>Niger State.
                                </span> 
                            </div>
                            <div style={{display: 'flex'}}>
                                <span style={{paddingTop: 7, marginRight: 10}}>
                                <MailOutlineIcon style={{color: colors.mainPrimaryColor, fontSize: '1.4em'}}/>
                                </span> 
                                <span>
                                     info@panchroconsult.com
                                </span> 
                            </div>
                            <div style={{display: 'flex'}}>
                                <span style={{paddingTop: 7, marginRight: 10}}>
                                <PhoneIcon style={{color: colors.mainPrimaryColor, fontSize: '1.4em'}}/>
                                </span> 
                                <span>
                                +2348023888504
                                </span> 
                            </div>
                        </div>                    
                    </Grid>

                    <Grid item xs={12} sm={6}>
                   
                    </Grid>
                </Grid>
            </Container>   
        </div>
      </React.Fragment>
    );
  }

export default ContactUs;
