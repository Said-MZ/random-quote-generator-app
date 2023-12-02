import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Generator from "./Generator";
import Navbar from "./Navbar";
import { quotes, links } from "./data";

function App() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[quoteIndex]);
  const generateQuote = () => {
    const newQuoteIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[newQuoteIndex]);
  };
  return (
    <>
      <Navbar />
      <Generator quote={quote} generateQuote={generateQuote} />
      <Footer links={links} />
    </>
  );
}

export default App;
