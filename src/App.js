import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index'; 
import FormInput from "./FormInput";

function App() {
  return (
      <Provider store={store}>
          <FormInput/>
      </Provider>
  );
}

export default App;
