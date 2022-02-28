import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyComponent from './Redux/Reducer/MyComponent'
import {store} from './MyStore'
import { Provider } from "react-redux";

ReactDOM.render(
  <div>
    <React.StrictMode>
    <Provider store={store}>
      <App />
      
     <MyComponent/>
    </Provider>
  </React.StrictMode>,
   
    
    </div>,
  
  document.getElementById('root')
);


