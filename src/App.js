import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use Reaact?",
    content: "You use Reacy by creating components",
  },
];

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
