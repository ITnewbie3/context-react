import { useState } from 'react';
import './App.css';
import MainPage from './conponent/MainPage';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [ isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
    <div className="App">
      <MainPage></MainPage>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
