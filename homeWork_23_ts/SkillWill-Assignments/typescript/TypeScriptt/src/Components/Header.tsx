import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLanguageContext } from "../Contexts/LanguageContext";
import {  DarkModeState, toggleMode } from "../store/darkMode/darkMode.slice";
import { useDispatch, useSelector   } from "react-redux";
import { RootState } from "../store";




const Header: React.FC = () => {
  const {languages, language, setLanguage } = useLanguageContext();
  const dispatch = useDispatch();
  const {mode} = useSelector((state: RootState) => state.darkMode)
  const toggleLightMode = () => {
   dispatch(toggleMode()) 
  }

  return (
    <div className={mode === 'light' ? 'light-mode' : 'dark-mode'}>
      <header>
      <select value = {language} onChange = {(e) => setLanguage(e.target.value)}>
      <option value = {languages[0]}>GE</option>
      <option value = {languages[1]}>EN</option>
      </select>
      <button onClick={() => toggleLightMode()}>{mode === 'light' ? 'DarkMode' : 'LightMode'}</button>
        
      </header>
    </div>
  )
}

export default Header;