import React from "react";
import { starWars, BBT } from "../utils/array";

function App() {
  const [state, setState] = React.useState({ active: false });

  function toggleClass() {
    setState({ active: !state.active });
  }

  return (
    <>
      <div className={state.active ? "main-1" : "main-2"}>
        <div
          className={state.active ? "switch-on" : "switch-btn"}
          onClick={toggleClass}
        ></div>
        <h1 className={state.active ? "title-1" : "title-2"}>
          {state.active ? "Star Wars" : "The Big Bang Theory"}
        </h1>
        <section className="card">
          <ul className="card__lists">
            {state.active
              ? starWars.map((card) => (
                  <li className="card__list">
                    <img className="card__item" src={card.src} alt={card.name} />
                    <p className="card__title-1">{card.name}</p>
                  </li>
                ))
              : BBT.map((card) => (
                  <li className="card__list">
                    <img className="card__item" src={card.src} alt={card.name} />
                    <p className="card__title-2">{card.name}</p>
                  </li>
                ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
