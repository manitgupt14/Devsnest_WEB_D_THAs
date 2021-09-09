import React,{useState} from 'react';
import './App.css';
import ThemeContext from './ThemeContext';
import ThemeToggle from './components/Themetoggle';
import Todos from './components/Todos'



function App() {

  const [theme,setTheme]=useState<boolean>(false);

  return (
    <div className={theme?"App dark":"App"}>
      <ThemeContext.Provider value={{theme,setTheme}}>
      <ThemeToggle/>
      <Todos/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
