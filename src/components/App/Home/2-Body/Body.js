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


// Styles
import './Body.css';


function submitBody(e) {
  e.preventDefault();
  console.log("submit from Body");
}

export class Body extends React.Component {
  render() {
    return(
      <div className="container">
        <section id="Hero">
            <Hero />
        </section>
        <Solutions/>
        <Carousel/>
        <Services/>
        <ClientList/>
        <ContactUs/>
      </div>
    );
  }
}