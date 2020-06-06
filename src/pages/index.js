import React from "react";
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HeaderContainer from "../components/header/header";
import SubHeaderContainer from "../components/header/sub-header";
import { makeStyles } from '@material-ui/core/styles';
import * as colors from '../assets/color'
import AboutUs from "../components/content/aboutus";
import Services from "../components/content/services";
import ContactUs from "../components/content/contact";
import Projects from "../components/content/projects";
import FooterContainer from "../components/content/footerComponent";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles({
  headerWrapper: {
     minHeight: '45vh',
     background: `linear-gradient(45deg, ${colors.background} 30%, ${colors.backgroungFaint} 90%)`,
  }
});


export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Head>
        <title>Skye Taxis | Airport and Hotel transfers made easy</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="https://res.cloudinary.com/jewelworth/image/upload/v1591395079/panchroconsult/rsz_panchroconsult-logo_mini_asofzm.png" />
        <link rel="stylesheet" href="assets/styles.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>

      </Head>
      
       <CssBaseline />
       <HeaderContainer/>

       <div className={classes.headerWrapper}>
        <SubHeaderContainer/>
       </div>

         <div id="about" style={{marginTop: '2em', fontSize: '1.2em', }}>
             <AboutUs/>
         </div>

         <div id="service" style={{marginTop: '2em', fontSize: '1.2em'}}>
             <Services/>
         </div>
         <div id="contact" style={{marginTop: '2em', fontSize: '1.2em', backgroundColor: colors.backgroungFaint}}>
             <ContactUs/>
         </div>
         <div id="projects" style={{marginTop: '2em', fontSize: '1.2em'}}>
             <Projects/>
         </div>
       
      
      <footer>
        <FooterContainer/>

        <div className="scrollTop">
                <a href="#home">
                    <Fab style={{color: colors.mainSecondaryColor}} aria-label="edit">
                       <KeyboardArrowUpIcon />
                    </Fab>
                </a>
        </div>
        
      </footer>
     <style jsx>{`
        .container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  footer {
    width: 100vw;
    position: 'absolute';
    bottom: '0px'
  }

  footer img {
    margin-left: 0.5rem;
  }

  footer a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .title a {
    color: #0070f3;
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    line-height: 1.5;
    font-size: 1.5rem;
  }

  code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 800px;
    margin-top: 3rem;
  }

  .card {
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  .card:hover,
  .card:focus,
  .card:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  .card h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .card p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  .logo {
    height: 4em;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 0.9rem;
          scroll-behavior: smooth;
        }
        h1{
          font-size: 1.5rem;
          margin: 0px;
          z-index: 500;
          line-height: 2em;
        }
        .headerText{
          font-size: 3.5em;
          font-weight: 600;
          line-height: 1.3em;
        }
        * {
          box-sizing: border-box;
        }
        .scrollTop {
          display: block; /* Hidden by default */
          position: fixed; /* Fixed/sticky position */
          bottom: 20px; /* Place the button at the bottom of the page */
          right: 30px; /* Place the button 30px from the right */
          z-index: 99; /* Make sure it does not overlap */
          border: none; /* Remove borders */
          outline: none; /* Remove outline */
          color: white; /* Text color */
          cursor: pointer; /* Add a mouse pointer on hover */

        }
      `}</style>
    </React.Fragment>
  )
}
