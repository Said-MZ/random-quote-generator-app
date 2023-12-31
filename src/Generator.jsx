import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { RiAiGenerate } from "react-icons/ri";

const Generator = ({ quote, generateQuote }) => {
  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote.quote}" - ${quote.person}`
    )}`;
    window.open(twitterUrl, "_blank");
  };

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
            <div>
              <RiAiGenerate />
              <span>New Quote</span>
            </div>
          </button>
          <button className="btn" onClick={tweetQuote}>
            <div>
              <FaXTwitter />
              <span>Tweet Quote</span>
            </div>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Generator;
