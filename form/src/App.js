
import './App.css';

import Form from './Components/Form';
import ShowData from "./ShowData/ShowData"
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
       
       <ShowData /> 
       {/* <Router>
         <Switch>
           <Route exact path="/Home" component={Form}/>
           <Route exact path="/Data" component={ShowData}/>
         </Switch>
       </Router> */}
      </header>
    </div>
  );
}

export default App;
