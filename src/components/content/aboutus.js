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

const useStyles = makeStyles({
    content: {
        padding: '1em 0 0.7em 0',
        lineHeight: '2.4em'
    },
    paper: {
      textAlign: 'center',
      borderRadius: '0px'
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

const  AboutUs = (props, store) => {
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
                 More <span style={{color: colors.mainPrimaryColor, fontSize: '1.4em'}}>
                 about us</span>
               </h1>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                      <div className={classes.paper}>
                          <img src="https://res.cloudinary.com/jewelworth/image/upload/v1591360746/panchroconsult/shutterstock_1167389212_ykrxdt.jpg" 
                                width="100%" style={{borderRadius: '4px'}}/>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <paper style={{}}>
                      Panchro Consult Ltd is a multidisciplinary professional outfit of 
                      Environmental Planners, Remote sensing technology and Development 
                      Analysts currently operating from Minna. Panchro obtained registration 
                      with the corporate affairs in September 2008, and has since then 
                      maintained a broad spectrum of high calibre staff capable of undertaking 
                      projects with the highest professional expertise. The Firm's partners and 
                      senior professional staff have acquired considerable and varied 
                      experiences both locally and internationally and have proven track 
                      records in project execution. In addition to its own staff, the Firm has 
                      associate firms and professionals to draw from where necessary to meet 
                      deadlines, or where its expertise is deemed to be short.
                      </paper>   
                    </Grid>

                </Grid>
            </Container>   
        </div>
      </React.Fragment>
    );
  }

export default AboutUs;
