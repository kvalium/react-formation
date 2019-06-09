import React, { Component, Suspense } from 'react';

// RevealJS
import Reveal from 'reveal.js/js/reveal';

// HighLightJS
import hljs from 'highlight.js/lib';

import { Opening } from "./Opening";
import { Reminder } from "./Reminder";
import { Tools } from "./Tools";
import { Basics } from "./Basics";
import { StateProps } from "./StateProps";
import { LifeCycle } from "./LifeCycle";
import { Architecture } from "./Architecture";
import { Router } from "./Router";
import { Redux } from "./Redux";
import { UnitTesting } from "./UnitTesting";

import {
  Frameworks,
  Infography,
  Appendix
} from './Ending';

export default class App extends Component {
  componentDidMount() {
    Reveal.initialize({
      width: 1920,
      height: 1080,
      margin: 0.05,
      controls: false,
      slideNumber: true,
      history: true,
      mouseWheel: false,
      transition: 'slide'
    });

    hljs.initHighlightingOnLoad();

    // Glitch
    try {
      document.getElementsByClassName('resume-button')[0].innerHTML = 'Continuer';
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="reveal">
        <div className="slides">
          <Suspense fallback={<div>Loading...</div>}>
            <Opening />
            {/* <WhoAmI />
            <WhoAreYou /> */}
            {/* <Summary /> */}
            <Reminder />
            <Tools />
            <Basics />
            <StateProps />

            <LifeCycle />
            {/* <Compo /> */}
            {/* <Pure /> */}
            <Architecture />
            <Router />
            {/* <Flux /> */}
            {/* <Context /> */}
            <Redux />
            {/* <VirtualDom /> */}
            <UnitTesting />
            {/* <OverviewTitle /> */}
            <Frameworks />
            <Infography />
            {/* <DevWay /> */}
            {/* <Quote /> */}
            {/* <Thank /> */}
            <Appendix />
          </Suspense>
        </div>
      </div>
    );
  }
}