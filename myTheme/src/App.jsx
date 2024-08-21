import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    <h1>Hello world</h1>
    </div>
  );

};

export default App;

