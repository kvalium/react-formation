import React from 'react';
import Interest from './Interest';
import Routing from './Routing';
import Implementation from './Implementation';
import Nav from './Nav';
import reactRouter from '../../../assets/react-router.png';

const Router = () => (
  <section>
    <section id="router" className="dark" data-background-color="#282c34">
      <img data-src={reactRouter} alt="React Router" />
      <h1>React Router</h1>
    </section>
    <Interest />
    <Routing />
    <Implementation />
    <Nav />
  </section>
);

export default Router;
