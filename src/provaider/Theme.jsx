import {createContext, useContext, useState } from "react";
import { changeCss } from '../servises/changeCss';


export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'

const ThemeContext = createContext();

export const ThemeProvider = ({children, ...props}) => {

  const [theme, setTheme] = useState(null)

  const change = name => {
    setTheme(name)
    changeCss(name)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change
      }}
      {...props}>
      
      {children}

    </ThemeContext.Provider>
  )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);

 