import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Generator from "./Generator";
import Navbar from "./Navbar";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  const links = [
    {
      icon: <FaInstagram />,
      link: "https://www.facebook.com/said.alzain.3",
    },
    {
      icon: <FaFacebook />,
      link: "https://www.instagram.com/feartfulz",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/Said-MZ",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/said-zain-740a8b246",
    },
  ];
  const quotes = [
    {
      quote: "Any person capable of angering you becomes your master",
      person: "Epictetus",
    },
    {
      quote: "Java is to Javascript what car is to Carpet.",
      person: "Chris Heilmann",
    },
    {
      quote: "No man is free who cannot control himself.",
      person: "Pythagoras",
    },
    {
      quote:
        "If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and five minutes thinking about solutions.",
      person: "Einstein",
    },
    {
      quote:
        "Any application that can be written in JavaScript, will eventually be written in JavaScript.",
      person: "Jeff Atwood",
    },
    {
      quote:
        "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off",
      person: "Bjarne Stroustrup",
    },
    {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      person: "Martin Fowler",
    },
    {
      quote: "What one man can do, another can do.",
      person: "Charles Morse",
    },
    {
      quote: "Code is like humor. When you have to explain it, it's bad.",
      person: "Cory House",
    },
    {
      quote:
        "If I only had an hour to chop down a tree, I would spend the first 45 minutes sharpening my axe.",
      person: "Abraham Lincoln",
    },
  ];
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
