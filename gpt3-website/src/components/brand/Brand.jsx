import React from 'react';
import './Brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <section className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google icon" />
      </div>
      <div>
        <img src={slack} alt="slack icon" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian icon" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox icon" />
      </div>
      <div>
        <img src={shopify} alt="shopify icon" />
      </div>
    </section>
  );
};

export default Brand;
