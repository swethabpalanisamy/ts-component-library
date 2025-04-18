import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SpectrumEdgeButton } from './components/spectrum-edge-button/Button';
import ToggleSwitch from './components/toggle-switch/ToggleSwitch';
import GradientLoader from './components/gradient-border-loader/GradientLoader';

function App() {
  return (<div className='App'>
  <div className='child'><h6>Spectrum Edge Button</h6><SpectrumEdgeButton>On Hover</SpectrumEdgeButton></div>
  <div className='child'><h6>Toggle Switch</h6> <ToggleSwitch /></div>
  <div className='child'><h6>Gradient Border Loader</h6> <GradientLoader /></div>
  </div>
  );
}

export default App;
