import React from "react";
import './styles/App.scss';
import Header from "./components/UI/header/Header";
import Input from "./components/logic/Input/Input"
import Item from "./components/logic/item/Item";
//images
import Arrrow from "./assets/other/arrow.svg"

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
            <div className="main__title_wrap">
              <span className="main__title">Продавцы</span>
              <span className="main__subtitle">620 продавцов</span>
            </div>
            <br />
            <div className="main__searchbar">
              <Input placeholder="Что вы ищите?" className="main__search"/>
              <button className="main__query">
                  По обновлению
                  <img src={Arrrow} alt="query"/>
              </button>
            </div>
            <div className="main__line"></div>
            <div className="main__wrap">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
        </main>
    </div>
  );
}

export default App;
