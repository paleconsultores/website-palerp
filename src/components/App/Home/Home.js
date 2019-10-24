// Dependencies
import React from 'react';

// Resources
import { Header } from './1-Header/Header';
import { Body } from './2-Body';
import { Footer } from './3-Footer/Footer';
import './Home.css'

export function Home() {
  return(
    <section className="Home">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </section>
  );
}