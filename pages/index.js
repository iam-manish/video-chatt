import Head from 'next/head'
import Image from 'next/image'
import React, { useState,useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Features } from "./components/features";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Approach } from "./components/approach";
import { DevelopmentProcess } from "./components/developmentprocess";
import { Team } from "./components/Team";
import { GetStart } from "./components/getstart";
import { Contact } from "./components/contact";
import { BackToTop } from "./components/backToTop"; 
import JsonData from "./data/data.json";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Script from 'next/script'



export default function Home() {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 1000, 
      easing: 'ease',
    });
      }, []);
  
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
    <Head>
      <title>BlocOrbit</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content="Bloc Orbit - The Blockchain Company" />
      <meta property="og:site_name" content="Bloc Orbit - The Blockchain Company" />
      <meta property="og:url" content="https://blocorbit.com/" />
      <meta property="og:description" content="We are a software development company specializing in developing reliable, secure and scalable decentralized applications based on Blockchain technologies." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://blocorbit.com/img/logo.png" />
      <meta name="description" content="We are a software development company specializing in developing reliable, secure and scalable decentralized applications based on Blockchain technologies." />
      <meta name="author" content="@blocorbit" />
      <link rel="canonical" href="https://blocorbit.com" />


        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/font-awesome/css/font-awesome.css"
        />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="stylesheet" type="text/css" href="css/responsive.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/nivo-lightbox/nivo-lightbox.css"
        />
        <link rel="stylesheet" type="text/css" href="css/nivo-lightbox/default.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900"
          rel="stylesheet"
        />
      </Head>
    <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    <Navigation/>
    <Header data={landingPageData.Header}/>
    <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Approach data={landingPageData.Testimonials} />
      <DevelopmentProcess data={landingPageData.DevelopmentProcess} />
      {/* <Team data={landingPageData.Team} /> */}

      <Features data={landingPageData.Features} />
      <Gallery data={landingPageData.Gallery}/>
      <GetStart data={landingPageData.GetStart}/>
      <Contact data={landingPageData.Contact} />
      <BackToTop/>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></Script>

      <Script src='js/main.js'></Script>
      
      </body>
    </>
  )
}
