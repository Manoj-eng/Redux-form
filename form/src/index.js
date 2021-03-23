import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AllDataReducer from './redux/AllDataReducer';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

import Form from './Components/Form';
import ShowData from "./ShowData/ShowData"

const store = createStore(
  AllDataReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
         <Switch>
           <Route exact path="/Home" component={Form}/>
           <Route exact path="/" component={ShowData}/>
         </Switch>
       </Router>
      {/* <Form/>
      <ShowData /> */}
    <App />
    
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
