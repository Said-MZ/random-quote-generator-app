import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";

const Generator = ({ quote, generateQuote }) => {
  return (
    <main>
      <section className="generator">
        <span className="icon">
          <BiSolidQuoteRight />
        </span>
        <div className="quote-container">
          <h1 className="quote">"{quote.quote}"</h1>
          <h4 className="person">- {quote.person}</h4>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={generateQuote}>
            New Quote
          </button>
        </div>
      </section>
    </main>
  );
};

export default Generator;
