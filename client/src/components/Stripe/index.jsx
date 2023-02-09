import React, { useState, useEffect } from "react";
import style from "./index.module.css";

const url = process.env.REACT_APP_API_URL || "http://localhost:3001";

const ProductDisplay = () => (
  <section className={`container ${style["container"]}`}>
    <div className={`${style["text-container"]}`}>
      <Logo />
      <h3>
        No dejes pasar la oportunidad de ser premium y disfrutar de todos los
        beneficios que tenemos para ti.
      </h3>
    </div>
    <div className={`${style["plan-container"]}`}>
      <div className={`${style["title-container"]}`}>
        <h3>Plan inicial</h3>
        <p>20.00 USD mensuales</p>
      </div>
      <form
        className={`${style["form"]}`}
        action={url + "/stripe/create-checkout-session"}
        method='POST'
      >
        {/* Add a hidden field with the lookup_key of your Price */}
        <input type='hidden' name='lookup_key' value='SP20' />

        <button
          className='button-green'
          id='checkout-and-portal-button'
          type='submit'
        >
          Pagar
        </button>
      </form>
    </div>
  </section>
);

const SuccessDisplay = ({ sessionId }) => {
  return (
    <section className={`container ${style["container"]}`}>
      <div className={`${style["text-success"]}`}>
        <div className={`${style["logo-container"]}`}>
          <Logo />
        </div>
        <h3>¡Suscripción exitosa al plan premium!</h3>
      </div>
      <form action={url + "/stripe/create-portal-session"} method='POST'>
        <input
          type='hidden'
          id='session-id'
          name='session_id'
          value={sessionId}
        />
        <button id='checkout-and-portal-button' type='submit'>
          Gestione sus datos de facturación
        </button>
      </form>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Stripe() {
  let [message, setMessage] = useState("");
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setSuccess(true);
      setSessionId(query.get("session_id"));
    }

    if (query.get("canceled")) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [sessionId]);

  if (!success && message === "") {
    return <ProductDisplay />;
  } else if (success && sessionId !== "") {
    return <SuccessDisplay sessionId={sessionId} />;
  } else {
    return <Message message={message} />;
  }
}

const Logo = () => (
  <svg
    className={`${style["logo"]}`}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 14 16'
    version='1.1'
  >
    <defs />
    <g id='Flow' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g
        id='0-Default'
        transform='translate(-121.000000, -40.000000)'
        fill='#E184DF'
      >
        <path
          d='M127,50 L126,50 C123.238576,50 121,47.7614237 121,45 C121,42.2385763 123.238576,40 126,40 L135,40 L135,56 L133,56 L133,42 L129,42 L129,56 L127,56 L127,50 Z M127,48 L127,42 L126,42 C124.343146,42 123,43.3431458 123,45 C123,46.6568542 124.343146,48 126,48 L127,48 Z'
          id='Pilcrow'
        />
      </g>
    </g>
  </svg>
);
