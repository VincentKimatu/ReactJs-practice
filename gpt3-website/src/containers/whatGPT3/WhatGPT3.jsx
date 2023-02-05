import React from 'react';
import Feature from '../feature/Feature';
import './WhatGPT3.css';

const WhatGPT3 = () => {
  return (
    <section className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
    </section>
  );
};

export default WhatGPT3;
