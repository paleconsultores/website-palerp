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

  // Styles
import './Body.css';


export class Body extends React.Component {
  render() {
    return(
      <div className="container">
        <section id="Hero">
            <Hero />
        </section>
        <section>
            <Message>
              Somos una empresa de consultoría y desarrollo de software,dedicada a brindar soluciones a empresas en distintos rubros
            </Message>
        </section>
        <section id="Information">
            <Information/>
        </section>
        <section id="Solutions">
            <Solutions/>
        </section>
        <section>
            <Message>
              Conoce mas sobre nuestro trabajo
            </Message>
        </section>
        <section id="Carousel">
             <Carousel/>
        </section>
        <section id="Services">
             <Services/>
        </section>
        <section id="ClientesList">
            <ClientList/>
        </section>    
      </div>
    );
  }
}