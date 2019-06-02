import React from 'react';
import WhyThis from './WhyThis';
import Actions from './Actions';
import Reducers from './Reducers';
import Store from './Store';
import Loading from './Loading';
import UseCase from './UseCase';
import FourthDemo from './FourthDemo';
import redux from '../../../assets/redux.png';

const Redux = () => (
  <section>
    <section id="redux" className="dark" data-background-color="#282c34">
      <img data-src={redux} alt="Redux" />
      <h1>Redux</h1>
    </section>
    <WhyThis />
    <Actions />
    <Reducers />
    <Store />
    <Loading />
    <UseCase />
    <FourthDemo />
  </section>
);

export default Redux;
