//Dependencies
import React from 'react';
import { ClientCard } from './ClientCard';

// Resources
import './ClientList.css';

export function ClientList() {
  return (
    <section className="client-list">
      <div className="client-list__title">
        <p className="title title--large title--green">Nuestros casos de éxito</p>
      </div>
      <div className="client-list-cards">
        {
          [1, 2, 3, 4, 5].map(item => <ClientCard></ClientCard>)
        }
      </div>
    </section>
  );
};