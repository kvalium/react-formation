import React from 'react';
import ReduxIntro from './ReduxIntro';
import Actions from './Actions';
import ActionCreators from './ActionCreators';
import Reducers from './Reducers';
import ReducerExample from './ReducerExample';
import CombineReducers from './CombineReducers';
import Store from './Store';
import StoreBasicUsage from './StoreBasicUsage'
import Loading from './Loading';
import UseCase from './UseCase';
import redux from '../../assets/redux.png';

const Redux = () => (
  <section>
    <section id="redux" className="dark" data-background-color="#282c34">
      <img data-src={redux} alt="Redux" />
      <h1>Redux</h1>
    </section>
    <ReduxIntro />
    <Actions />
    <ActionCreators />
    <Reducers />
    <ReducerExample />
    <CombineReducers />
    <Store />
    <StoreBasicUsage /> 
    <Loading />
    <UseCase />
  </section>
);

export default Redux;
