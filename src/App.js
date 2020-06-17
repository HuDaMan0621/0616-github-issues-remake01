import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import IssuesList from './components/IssuesList';
import IssueDetail from './components/IssueDetail';


import './App.css';
import IssuesList from './components/IssuesList'

function App() {
  return (
    <> 
      <BrowserRouter> {/* we need the Browser router warping eveything */}
        <div className="App">
          {/* the Switch function will match what it founds and stop everything else */}
          <Switch> 
            <Route exact path="/" component={IssuesList} />   {/* put everything inside the issues's page or put the routes as a child of that route. */}
            <Route path="/issue/:issueNumber" component={IssueDetail} />   {/* issue number is the 4 digit number (may go up to 5, 6 as we progress) the ID is a long 10 digit number. */}
            {/* put everything inside the issues's page or put the routes as a child of that route. */}
            <Route>
              <h1>Error! 404 - Not Found on Earth, try Mars? Link</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter> {/* we need the Browser router warping eveything */}
    </>
  );
}

export default App;
