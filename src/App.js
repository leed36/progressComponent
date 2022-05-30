import React from 'react';
import { ProgressIndicator } from './components/ProgressIndicator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProgressIndicator steps= {[
            'Not Started',
            'In Progress',
            'Almost done',
            'Done',
            'owiefj',
          ]}>
        </ProgressIndicator>
        <ProgressIndicator steps= {[
            'Not Started',
            'In Progress',
            'Done',
          ]}>
        </ProgressIndicator>
        <ProgressIndicator steps= {[
            'Not Started',
            'In Progress',
            'Done',
            'Not Started',
            'In Progress',
            'Done',
            'Not Started',
            'In Progress',
          ]}>
        </ProgressIndicator>
      </header>
    </div>
  );
}

export default App;
