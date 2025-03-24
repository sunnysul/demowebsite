import React from 'react';
import '../css/Clients.css';

// Import all client images (make sure to have these images in your project)
import dhariwal from "../logo/dhariwal.avif";
import graphite from "../logo/graphite.webp";
import indiana from "../logo/indiana.jpeg";
import kisanFeed from "../logo/kisan_feed.png";
import piaggio from "../logo/piaggio.png";
import ruby from "../logo/ruby.png";
import shatayu from "../logo/shatayu.jpeg";
import smAuto from "../logo/SM_auto.png";
import sudharshan from "../logo/sudharshan.png";
import ultraCorpo from "../logo/ultra_corpo.jpeg";
import varadHP from "../logo/varad_HP.png";
import varroc from "../logo/varroc.png";
 import global from "../logo/Global.png";
 import aurus from "../logo/auruspharma.png";

const clients = [
  { name: 'Dhariwal', image: dhariwal },
  { name: 'Graphite', image: graphite },
  { name: 'Indiana', image: indiana },
  { name: 'Kisan Feed', image: kisanFeed },
  { name: 'Piaggio', image: piaggio },
  { name: 'Ruby', image: ruby },
  { name: 'Shatayu', image: shatayu },
  { name: 'SM Auto', image: smAuto },
  { name: 'Sudharshan', image: sudharshan },
  { name: 'Ultra Corpo', image: ultraCorpo },
  { name: 'Varad HP', image: varadHP },
  { name: 'Varroc', image: varroc },
  { name: 'Global', image: global },
  { name: 'Aurus', image: aurus },
];

const Clients = () => {
  return (
    <div className="clients-page">
      <h1>Our Clients</h1>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <img 
              src={client.image} 
              alt={client.name} 
              className="client-image"
            />
            <div className="client-name">{client.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;