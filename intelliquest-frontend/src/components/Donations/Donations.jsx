/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styles from './Donations.module.css';

const Donations = () => {
  useEffect(() => {
    // Load the Stripe Buy Button script
    const script = document.createElement('script');
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize the buy button if script loaded successfully
      if (window.Stripe) {
        const stripeBuyButton = window.Stripe.elements();
        stripeBuyButton.create({
          buyButtonId: "buy_btn_1Plhu8HzptOMOLPZonlPK1hG",
          publishableKey: "pk_test_51PlgTKHzptOMOLPZnKpOqkiZyYo09XpvztC7JXjp9Uvid9MF2lfddszfuDADaJH4fQ55ulfKGhmOKpdAcezm11Rz00lz576mhz"
        });
      }
    };

    return () => {
      // Clean up the script tag if the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className={styles.donationsContainer}>

        <div className={styles.gridContainer}>
          {/* Stripe Buy Button element */}
          <stripe-buy-button
            buy-button-id="buy_btn_1Plhu8HzptOMOLPZonlPK1hG"
            publishable-key="pk_test_51PlgTKHzptOMOLPZnKpOqkiZyYo09XpvztC7JXjp9Uvid9MF2lfddszfuDADaJH4fQ55ulfKGhmOKpdAcezm11Rz00lz576mhz"
          ></stripe-buy-button>
        </div>

      </div>
    </div>
  );
};

export default Donations;


