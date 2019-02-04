import React from 'react';
import less from '../../../assets/less.png';
import sass from '../../../assets/sass.png';
import stylus from '../../../assets/stylus.png';

const Design = () => (
  <section id="design">
    <img className="clearfix" data-src={less} alt="Less" />
    <img data-src={sass} alt="Sass" />
    <img data-src={stylus} alt="Stylus" />
    <h2>CSS</h2>
    <p>
      Des feuilles qui ont du style<br />
      Du <em>design</em> pour vôtre application<br />
      Choisir entre le <strong><span className="less">Less</span></strong>, le <strong><span className="sass">Sass</span></strong> ou le <strong><span className="stylus">Stylus</span></strong>
    </p>
  </section>
);

export default Design;
