import React, { useState } from "react";
import "./style.css";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import emojiListJSON from "./assets/json/emoji.json";

function App() {
  const [search, setSearch] = useState("");
  const emojiListJSX = emojiListJSON.map(item => {
    if (search === "") {
      return <Line symbol={item.symbol} title={item.title}></Line>;
    } else {
      if (item.keywords.toLowerCase().includes(search.toLowerCase())) {
        return <Line symbol={item.symbol} title={item.title}></Line>;
      } else {
        return null;
      }
    }
  });
  return (
    <>
      <div>
        <Search search={search} setSearch={setSearch}></Search>
        <div>
          <ul>{emojiListJSX}</ul>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
