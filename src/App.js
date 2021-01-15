import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is front end javascript framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library among engineers",
//   },
//   {
//     title: "How do you use Reaact?",
//     content: "You use Reacy by creating components",
//   },
// ];
const options = [
  {
    label: "This is color red",
  },
  {
    label: "This is color blue",
  },
  {
    label: "This is color black",
  },
];
function App() {
  return (
    <div className="App">
      <Translate />
    </div>
  );
}

export default App;
