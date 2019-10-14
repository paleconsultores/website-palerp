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
        <Hero />
        <Message>
          Somos una empresa de consultoría y desarrollo de software,dedicada a brindar soluciones a empresas en distintos rubros
        </Message>
        <Information/>
        <Solutions/>
        <Message>
          Conoce mas sobre nuestro trabajo
        </Message>
        <Carousel />
        <Services />
        <ClientList />
      </div>
    );
  }
}