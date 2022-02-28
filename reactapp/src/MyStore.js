import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Myreducer } from "./Redux/Reducer/MyReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export const store = createStore(Myreducer, composeEnhancers(applyMiddleware(thunk)));
  