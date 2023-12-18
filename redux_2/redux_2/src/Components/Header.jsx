import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLanguageContext } from "../Contexts/LanguageContext";
import { useDispatch, useSelector } from "react-redux"
import {  toggleMode } from "../store/darkMode/darkMode.slice";


const Header = () => {
  const {languages, language, setLanguage } = useLanguageContext();
  const dispatch = useDispatch();
  const {mode} = useSelector((state) => state.darkMode)
  const toggleLightMode = () => {
   dispatch(toggleMode()) 
  }

  return (
    <div style ={mode === ' light' ? {backgroundColor: '#333333',
  color: '#000000' } : { backgroundColor: '#ffffff',
  color: '#ffffff' }}>
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