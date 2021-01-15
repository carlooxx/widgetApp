import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";

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
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Accordion items={items} />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            label="Select Color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
