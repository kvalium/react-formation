import React, { Component } from 'react';

// RevealJS
import Reveal from 'reveal.js/js/reveal';

// HighLightJS
import hljs from 'highlight.js/lib';

// Slides
import {
  Title,
  // WhoAmI,
  // WhoAreYou,
  // Summary,
  RemindersTitle,
  JavaScript,
  EcmaScript,
  Coding,
  Node,
  Npm,
  Tools
} from './Opening';

import {
  TopicTitle,
  Intro,
  Syntax,
  JsXml,
  Init,
  StateProps,
  Nested,
  Compo,
  LifeCycle,
  Pure,
  Context,
  Arch,
  Router,
  Flux,
  Redux,
  VirtualDom,
  Jest
} from './Main';

import {
  OverviewTitle,
  Frameworks,
  Infography,
  DevWay,
  Quote,
  Thank,
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
          <Title />
          {/* <WhoAmI />
          <WhoAreYou /> */}
          {/* <Summary /> */}
          <RemindersTitle /> 
          <JavaScript />
          <EcmaScript />
          {/* <Coding /> */}
          <Node />
          <Npm />
          <Tools />
          <TopicTitle />
          <Intro />
          <Syntax />
          <JsXml />
          <Init />
          <StateProps />
          <Nested />
          <Compo />
          <LifeCycle />
          <Pure />
          <Context />
          <Arch />
          <Router />
          <Flux />
          <Redux />
          <VirtualDom />
          <Jest />
          <OverviewTitle />
          <Frameworks />
          <Infography />
          <DevWay />
          <Quote />
          <Thank />
          <Appendix />
        </div>
      </div>
    );
  }
}