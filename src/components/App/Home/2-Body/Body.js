// Dependencies
import React from 'react';

// Resources
import { Hero } from './1-Hero';
import { Information } from './2-Information';
import { Solutions } from './3-Solutions';
import { Carousel } from './4-Carousel';
import { Services } from './5-Services';
import { ClientList } from './6-ClientList';
import { Message } from './7-Message';
import { MoreInformation } from './8-MoreInformation';
import {MessageSecond} from './9-MessageSecond';
import {ContactUs} from "./ContactUs";
import {AboutUs} from "./AboutUs";
import CookieConsent, { Cookies } from "react-cookie-consent";

// Styles
import './Body.css';

export function Body() {
  return(
    <div className="container">
      <Hero />
      {/* <AboutUs/> */}
      <Solutions/>
      <Carousel/>
      <Services/>
      <ClientList/>
      <ContactUs/>
      <CookieConsent
          buttonText="Acepto"
          onAccept={() => {alert("Estoy de acuerdo!")}}
          debug={true}
          enableDeclineButton
          declineButtonText="Desacuerdo"
          onDecline={() => {alert("No estoy de acuerdo!")}}
        >
         Este sitio web utiliza cookies para mejorar la experiencia del usuario.{" "}
          <span style={{ fontSize: "10px" }}>
            {/* This bit of text is smaller :O */}
          </span>
        </CookieConsent>
    </div>
  );

}