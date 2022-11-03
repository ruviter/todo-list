import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import st from "./Nav.module.css";

const Nav = ({ onDarkMode, onStateChange, state }) => {
  const style = { cp: {}, ncp: {}, all: {} };
  style.cp = state.dark
    ? state.list === "completed"
      ? { textDecorationLine: "underline", color: "white" }
      : { color: "white", opacity:'0.6'}
    : state.list === "completed"
    ? { textDecorationLine: "underline" }
    : {opacity:'0.6'};
  style.ncp = state.dark
    ? state.list === "active"
      ? { textDecorationLine: "underline", color: "white" }
      : { color: "white", opacity:'0.6'}
    : state.list === "active"
    ? { textDecorationLine: "underline" }
    : {opacity:'0.6'};
  style.all = state.dark
    ? state.list === "all"
      ? { textDecorationLine: "underline", color: "white" }
      : { color: "white", opacity:'0.6' }
    : state.list === "all"
    ? { textDecorationLine: "underline" }
    : {opacity:'0.6'};

  return (
    <>
      <div className={st.darkMode} onClick={onDarkMode}>
        {state.dark ? (
          <div style={{ color: "white" }}>
            <BsFillSunFill />
          </div>
        ) : (
          <BsFillMoonFill />
        )}
      </div>
      <form action="submit" onChange={onStateChange}>
        <input
          type="radio"
          name="state"
          id="cp"
          value="completed"
          className={st.radioBT}
        />
        <input
          type="radio"
          name="state"
          id="ncp"
          value="active"
          className={st.radioBT}
        />
        <input
          type="radio"
          name="state"
          id="all"
          value="all"
          className={st.radioBT}
        />
        <label htmlFor="cp" style={style.cp} className={st.cp}>
          Completed
        </label>
        <label htmlFor="ncp" style={style.ncp} className={st.ncp}>
          Active
        </label>
        <label htmlFor="all" style={style.all} className={st.all}>
          All
        </label>
      </form>
    </>
  );
};

export default Nav;
