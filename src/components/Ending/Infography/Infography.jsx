import React from 'react';
import LangKnown from './LangKnown';
import LangLearn from './LangLearn';
import FrameKnown from './FrameKnown';
import FrameLearn from './FrameLearn';
import Merge from './Merge';
import Download from './Download';
import Criteria from './Criteria';
import Music from './Music';

const Infography = () => (
  <section>
    <section id="infography">
      <h1>Infographie</h1>
    </section>
    <LangKnown />
    <LangLearn />
    <FrameKnown />
    <FrameLearn />
    <Merge />
    <Download />
    <Criteria />
    <Music />
  </section>
);

export default Infography;
