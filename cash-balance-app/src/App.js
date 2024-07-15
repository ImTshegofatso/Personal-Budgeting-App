import React from 'react';
import './App.css';
import AccountBalance from './components/AccountBalance';
import { GlobalProvider } from './GlobalState'; // Import the GlobalProvider

function App() {
  return (
    <div className="App">
      <GlobalProvider> {/* Wrap the entire app with GlobalProvider */}
        <AccountBalance /> {/* Render the AccountBalance component */}
      </GlobalProvider>
    </div>
  );
}

export default App;
