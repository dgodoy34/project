import React from 'react';
import WhatsApp from './whatsapp.png';

function WhatsAppButton() {
  return (
    <div className="whatsapp">
      <a href="https://wa.me/c/5491120226907">
        <img src={WhatsApp} alt="Wpp" />
      </a>
    </div>
  );
}

export default WhatsAppButton;

